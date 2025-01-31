// This file contains a function to fetch API data using fetch API

// Import required modules
import { Loading, LocalStorage, Notify } from 'quasar'

// Function to fetch API data
export default async function fetchApi(url = '', options = {}) {
  // Set options to an empty object by default
  options = options || {};

  // Set headers to an empty object by default
  options.headers = options.headers || {};

  // Set content type to JSON by default
  options.headers['Content-Type'] = 'application/json';

  // Set except header to JSON by default
  options.headers['Accept'] = 'application/json';

  // Set method to GET by default
  options.method = options.method || 'GET';

  // Set body to null by default
  options.body = options.body || null;

  // Set API base URL from environment variable by default
  const apiBaseUrl = 'http://192.168.0.17:8000/api';

  // Add API base URL to URL
  url = apiBaseUrl + url;

  // Add token to headers if available
  const token = JSON.parse(JSON.stringify(LocalStorage.getItem('token')));

  // Check if token is available
  if (token) {
    // Add token to headers
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    // Show a loading message
    Loading.show();

    // Make API request
    const response = await fetch(url, options);

    // Check if response is ok
    const data = await response?.json();

    // Check if response is ok
    if (response?.ok) {
      // Return data if response is ok
      return data;
    } else {
      // Log error to console
      throw new Error(data?.message || response?.message);
    }
  } catch (error) {
    // Log error to console
    console.error(error);

    // Show an error message in notification
    Notify.create({
      position: 'top',
      message: error?.message,
      color: 'negative',
      icon: 'warning',
      timeout: 5000,
    });
  } finally {
    // Hide a loading message
    Loading.hide();
  }
}

// Function to fetch login data
export async function postLogin(form = {
  email: String,
  password: String,
  remember: Boolean
}, url = '/login') {

  // Set options to form data
  const options = {
    method: 'POST',
    body: JSON.stringify(form),
  };

  // Call fetchApi function with URL and options
 const response = await fetchApi(url, options)

  const { token, user, message } = response;

  // Check if token is available
  if (token) {
    // Save token to local storage
    LocalStorage.setItem('token', token);
  }

  // Check if user is available
  if (user) {
    // Save user to local storage
    LocalStorage.setItem('user', user);
  }

  if  (message) {
    // Show an error message in notification
    Notify.create({
      position: 'top',
      message: message,
      color: 'green-10',
      icon: 'check',
      timeout: 5000,
    });
  }

  // Return data
  return response;
}

// Function to fetch register data
export async function postRegister(form = {
  name: String,
  email: String,
  password: String,
  password_confirmation: String
}, url = '/register') {

  // Set options to form data
  const options = {
    method: 'POST',
    body: JSON.stringify(form),
  };

  // Call fetchApi function with URL and options
  await fetchApi(url, options).then(async ({ message }) => {
    if (message) {
      // Show an error message in notification
      Notify.create({
        position: 'top',
        message: message,
        color: 'green-10',
        icon: 'check',
        timeout: 5000,
      });

      // Log user to console
      return postLogin({
        email: form.email,
        password: form.password,
        remember: true
      });
    }
  }).catch(error => { console.error(error) });
}

// Function to fetch logout data
export async function postLogout(url = '/logout') {
  // Set options to an empty object
  const options = {};

  // Call fetchApi function with URL and options
  return await fetchApi(url, options).then(() => {
    // Remove token from local storage
    localStorage.removeItem('token');

    // Remove user from local storage
    localStorage.removeItem('user');
  });
}

// Function to fetch user data
export async function getUser(options = {
  data: {
    id: Number | null,
    username: String | null,
  }
}, url = '/user') {
  // Call fetchApi function with URL
  return await fetchApi(url, options).then(({ data }) => {
    // Return data
    return data;
  });
}

// Function to fetch user data
export async function putUser(form = {
  name: String | null,
  email: String | null,
  password: String | null,
  password_confirmation: String | null
}, options = {
  data: {
    id: Number | null,
    username: String | null,
  }
}, url = '/user') {
  // Set options to form data
  options.method = 'PUT';
  options.body = JSON.stringify(form);

  // Call fetchApi function with URL and options
  return await fetchApi(url, options).then(({ data }) => {
    // Check if token is available
    if (data?.token) {
      // Save token to local storage
      localStorage.setItem('user', data.user);
    }

    // Return data
    return data;
  });
}


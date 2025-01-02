// This file contains a function to fetch API data using fetch API

// Import required modules
import { Loading, LocalStorage, Notify } from 'quasar'

// Function to fetch API data
export default async function fetchApi(url = '', options = {}) {
  // Set options to empty object by default
  options = options || {};

  // Set headers to empty object by default
  options.headers = options.headers || {};

  // Set content type to json by default
  options.headers['Content-Type'] = 'application/json';

  // Set except header to json by default
  options.headers['Accept'] = 'application/json';

  // Set method to GET by default
  options.method = options.method || 'GET';

  // Set body to null by default
  options.body = options.body || null;

  // Set API base URL from environment variable by default
  const apiBaseUrl = 'http://192.168.0.4:8000/api';

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
    // Show loading message
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

    // Show error message in notification
    Notify.create({
      position: 'top',
      message: error?.message,
      color: 'negative',
      icon: 'warning',
      timeout: 5000,
    });
  } finally {
    // Hide loading message
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
  return await fetchApi(url, options);
}
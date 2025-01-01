/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:
 */

/*export default function (api) {
  return [
    {
      name: 'auth',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        { name: 'Login', value: 'login' },
        { name: 'Register', value: 'register' },
        { name: 'Forgot Password', value: 'forgotPassword' },
        { name: 'Reset Password', value:'resetPassword' },
        { name: 'Password Confirmation (Lock Screen)', value: 'passwordConfirmation' },
        { name: 'Email Confirmation', value: 'emailConfirmation' },
        { name: 'Social Login', value:'socialLogin' },
        { name: 'Two-Factor Authentication', value: 'twoFactorAuthentication' },
      ]
    },
    {
      name: 'authLogin',
      type: 'checkbox',
      required: true,
      when: 'auth.login',
      message: 'Since you want "Login Page", select the authentication method:',
      choices: [
        { name: 'Email Input', value: 'emailPassword' },
        { name: 'Password Input', value:'passwordInput' },
        { name: 'Show Remember-me checkbox?', value:'showRemember' },
        { name: 'Show Forgot Password link?', value:'showForgotPassword' },
        { name: 'Show Register Link?', value:'showRegister' },
        { name: 'Show Social Login Buttons?', value:'showSocialLogin' },
      ]
    },
  ]
}*/


module.exports = function () {
  return [
    {
      name: 'serviceA',
      type: 'confirm',
      message: 'Do you want service "A"?'
    },

    {
      name: 'serviceB',
      type: 'confirm',
      message: 'Do you want service "B"?'
    },

    {
      name: 'productName',
      type: 'string',
      required: true,
      when: 'service.B',
      message: 'Since you want service "B", what is the Product Name?',
      default: 'MyProduct'
    },

    {
      name: 'publishService',
      type: 'confirm',
      message: 'Do you want the publishing service?',
      default: true
    }
  ]
}

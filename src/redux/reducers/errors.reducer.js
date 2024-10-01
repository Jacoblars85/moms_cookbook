import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Enter your email and password!';
    case 'LOGIN_FAILED':
      return "Oops! The email and password didn't match. Try again!";
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    case 'LOGIN_FAILED_PASSWORDS_DONT_MATCH':
      return `Oops! The email and password didn't match. Try again!`;
    default:
      return state;
  }
};

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose a email and password!';
    case 'REGISTRATION_FAILED':
      return "Oops! That didn't work. Enter valid email, name and company!";
    case 'REGISTRATION_FAILED_PASSWORDS_DONT_MATCH':
      return `Oops! The passwords didn't match. Try again!`;
    case 'REGISTRATION_FAILED_DUPLICATE_EMAIL':
      return 'Oops! The email is already taken. Try again!';
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  loginMessage,
  registrationMessage,
});

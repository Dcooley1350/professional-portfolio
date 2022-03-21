import validator from 'validator';

const validateData = ({ name, email, message }) => {
  const errorList = [];

  // Validate Name
  if (name.length < 1) {
    errorList.push('Name is required');
  }
  if (name.length > 100) {
    errorList.push('Max name length is 100');
  }

  // Validate Email
  if (email.length < 1) {
    errorList.push('Email is required');
  }
  if (email.length > 100) {
    errorList.push('Max email length is 100');
  }
  if (!validator.isEmail(email)) {
    errorList.push('A valid email address is required');
  }
  // Validate Message
  if (message.length < 1) {
    errorList.push('Message is required');
  }
  if (message.length > 250) {
    errorList.push('Max message length is 250');
  }

  return errorList;
};

export default validateData;

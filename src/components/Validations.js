const validation = (userData) => {
  const errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = "Invalid email";
  }
  if (!userData.email) {
    errors.email = "You must enter an email";
  }
  if (userData.email.length > 35) {
    errors.email = "The email must not exceed 35 characters";
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "The password must have at least one number";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "The password must be 6-10 characters";
  }

  return errors;
};

export default validation;

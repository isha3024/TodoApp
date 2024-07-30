// INFO: all global functions will be added here
export const sum = (a, b) => {
  return a + b;
};

// ** allow only number value
export const NumberValidation = val => {
  let alphaNumericRegex = /^([0-9])*$/;
  return alphaNumericRegex.test(val);
};
export const EmailValidation = val => {
  let characterRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return characterRegex.test(val);
};
export const StringValidation = val => {
  let characterRegex = /^[a-zA-Z\s?.?]*$/;
  return characterRegex.test(val);
};
export const passwordValidation = val => {
  passwordPattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;
  return passwordPattern.test(val);
};
export const formatCreditCardNumber = input => {
  // Remove non-numeric characters
  const numericInput = input.replace(/(.{4})/g, '$1 ');

  // Insert a space after every 4 digits
  let formattedInput = '';
  for (let i = 0; i < numericInput.length; i += 4) {
    formattedInput += numericInput.slice(i, i + 4) + ' ';
  }

  // Trim any extra spaces
  formattedInput = formattedInput.trim();

  return formattedInput;
};

export const calculateDiscountedPrice = (originalPrice, percentageDiscount) => {
  const discountAmount = (originalPrice * percentageDiscount) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice;
};

export const calculatePercentage = (part, whole) => {
  return (part / whole) * 100;
};

export const validateCVV = cvv => {
  // Assuming CVV should be a 3 or 4-digit number
  if (cvv) {
    return /^\d{3,4}$/.test(cvv);
  }
  return false;
};

export const isValidCreditCardNumber = inputNumber => {
  if (inputNumber) {
    // Remove any non-digit characters from the input
    var cleanedInput = inputNumber.replace(/\D/g, '');

    // Check if the cleaned input is exactly 16 digits long
    if (cleanedInput.length !== 16) {
      return false;
    }

    // Split the cleaned input into groups of four digits
    var groups = cleanedInput.match(/.{1,4}/g) || [];

    // Check if there are four groups
    if (groups.length !== 4) {
      return false;
    }

    // Check if each group consists of exactly four digits
    if (!groups.every(group => /^\d{4}$/.test(group))) {
      return false;
    }

    // If all checks pass, the input is considered valid
    return true;
  }
  return false;
};

export const validateZipCode = zipCode => {
  // Assuming a simple check for a valid zip code
  return /^\d{6}$/.test(zipCode);
};

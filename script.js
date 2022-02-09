function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isNumber(num) {
  return (num.length > 0) && !isNaN(num);
 }

 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 }
 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.name, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.number, isNumber);
  valid &= fieldValidation(fields.question, isNotEmpty);
 
  return valid;
 }
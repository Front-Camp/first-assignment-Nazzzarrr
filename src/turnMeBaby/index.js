/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  try {
    if (typeof(str) != 'string') throw 'Error: this is not a string.'; 
  } finally {}
  
  var nString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    nString += str[i];
  }
  return nString;
};

export default turnMeBaby;

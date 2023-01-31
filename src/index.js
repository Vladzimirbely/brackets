module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  let checkStr = true;
  
  while (checkStr) {
    let string = str;
    for (let i = 0; i < bracketsConfig.length; i++) {
      let bracketsToStr = bracketsConfig[i].join('');
      str = str.split(bracketsToStr).join('');
    }
    if (string === str) {
      checkStr = false;
    }
  } 
  return str === '';
}

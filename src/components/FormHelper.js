const getRandomLetter = () => {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};
const getRandomNumber = () => {
  let charset = "0123456789";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};
const getRandomSymbol = () => {
  let charset = "[]{}-_!@#$%^&*()|+`~?/.,'<>=";
  let randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
};

const generatePassword = (hasNumbers = false, hasSymbols = false, len = 6) => {
  let getRandomFunc = [getRandomLetter];
  getRandomFunc = hasNumbers
    ? [...getRandomFunc, getRandomNumber]
    : getRandomFunc;
  getRandomFunc = hasSymbols
    ? [...getRandomFunc, getRandomSymbol]
    : getRandomFunc;

  let password = [];
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * getRandomFunc.length);
    let chars = getRandomFunc[randomIndex]();
    password.push(chars);
  }
  return password.join("");
};

export { generatePassword };

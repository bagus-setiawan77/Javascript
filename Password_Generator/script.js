function generatePassword(length, lowerCharInclude, upperCharInclude, numberCharInclude, symbolCharInclude){

  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "1234567890";
  const symbolChar = "!@#$%^&*()_+<>:";

  let allowedChars = ''
  let password = ''

  allowedChars += lowerCharInclude ? lowerChar : ''
  allowedChars += upperCharInclude ? upperChar : ''
  allowedChars += numberCharInclude ? numberChar : ''
  allowedChars += symbolCharInclude ? symbolChar : ''

  if(length <= 0){
    return `(password lenght must be at least 1)`;
  }
  if(allowedChars.length === 0){
    return `(at least 1 set of character needs to be selected)`;
  }

  for(i = 0; i < length; i++){ 
    const randomIndex = Math.floor(Math.random() * allowedChars.length)
    password += allowedChars[randomIndex]

  }

  return password;

}


const passwordLenght = 10;
const lowerCharInclude = true;
const upperCharInclude = false;
const numberCharInclude = false;
const symbolCharInclude = false;

const password = generatePassword(passwordLenght, lowerCharInclude, upperCharInclude, numberCharInclude, symbolCharInclude)

console.log(`generate password : ${password}`)
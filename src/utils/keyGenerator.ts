export const keyGenerator = () => {
  const randomNumber = Math.ceil(Math.random() * 1000);
  const randomLetter = ["a", "m", "Z", "X", "e", "I", "l", "O", "P", "W", "q"];
  return `${randomLetter[Math.ceil(Math.random() * randomLetter.length)]}${
    randomLetter[Math.ceil(Math.random() * randomLetter.length)]
  }${randomNumber}${
    randomLetter[Math.ceil(Math.random() * randomLetter.length)]
  }${randomLetter[Math.ceil(Math.random() * randomLetter.length)]}`;
};

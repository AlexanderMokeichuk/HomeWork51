const random = () => {
  const result = [];

  while (result.length < 5) {
    const randomNumber = Math.floor(Math.random() * (36 - 5)) + 5;
    if (result.indexOf(randomNumber) === -1) {
      result.push(randomNumber);
    }
  }

  return (
    result
  );
};

export default random;
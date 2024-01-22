const array = ["apple", "banana", "cherry", "date", "elderberry"];

const forEachClick = () => {
  const forEachList = array.forEach((a, index) => {
    return `${index} : ${a}`;
  });
  console.log(forEachList);
};

forEachClick();

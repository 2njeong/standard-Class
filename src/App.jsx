import { useState } from "react";
import "./App.css";

function App() {
  const array = ["apple", "banana", "cherry", "date", "elderberry"];

  const [arr, setArray] = useState(array);
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const forEachClick = () => {
    let forEachtemp = "";
    arr.forEach((a, index) => {
      forEachtemp += `${index}: ${a}, `;
    });
    console.log(forEachtemp.slice(0, -2));
    setResult(forEachtemp.slice(0, -2));
  };

  const filterClick = () => {
    const filteredArr = arr.filter((fruit) => {
      if (fruit.includes(input)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredArr);
  };

  const mappedClick = () => {
    const mappedArr = arr.map((fruit) => fruit.toUpperCase());
    setResult(mappedArr.join(", "));
  };

  const reducedClick = () => {
    const reducedArr = arr.reduce((acc, cur) => {
      return `${acc} + ${cur}`;
    });
    setResult(reducedArr);
  };

  const pushedClick = () => {
    console.log(input);
    if (!input) {
      alert("입력값이 없습니다!");
      return false;
    }
    const newArr = [...arr, input];
    // newArr.push(input);
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const poppedClick = () => {
    const newArr2 = [...arr];
    newArr2.pop();
    setArray(newArr2);
    setResult(newArr2.join(", "));
  };

  const slicedClick = () => {
    const slicedArr = arr.slice(0, -2);
    // setArray(slicedArr);
    setResult(slicedArr.join(", "));
  };

  const splicedClick = () => {
    const newArr3 = [...arr];
    newArr3.splice(2, 2, "kiwi", "lime");
    // setArray(newArr3);
    setResult(newArr3.join(", "));
  };

  const indexOfClick = () => {
    for (const a of arr) {
      if (a === `${input}`) {
        let theIndex = arr.indexOf(a);
        return setResult(theIndex);
      } else {
        setResult("-1");
      }
    }
  };

  const includesClick = () => {
    const isInclude = arr.some((a) => a.includes(input));
    console.log(isInclude);
    setResult(`${isInclude}`);
  };

  const findClick = () => {
    const foundFruit = arr.find((fruit) => fruit.includes(input));
    setResult(foundFruit ? `${foundFruit}` : "Not Found!");
  };

  const everyClick = () => {
    const isEvery = arr.every((a) => a.length > 5);
    setResult(`${isEvery}`);
  };

  const sortClick = () => {
    const newArr4 = [...arr];
    newArr4.sort((a, b) => b.localeCompare(a));
    console.log(arr);
    console.log(newArr4);
    setResult(newArr4.join(", "));
  };

  const btnsArr = [
    { name: "forEach", func: forEachClick },
    { name: "filter", func: filterClick },
    { name: "map", func: mappedClick },
    { name: "reduce", func: reducedClick },
    { name: "push", func: pushedClick },
    { name: "pop", func: poppedClick },
    { name: "slice", func: slicedClick },
    { name: "splice", func: splicedClick },
    { name: "indexOf", func: indexOfClick },
    { name: "includes", func: includesClick },
    { name: "find", func: findClick },
    { name: "some", func: includesClick },
    { name: "every", func: everyClick },
    { name: "sort", func: sortClick },
  ];
  const [btns, setBtn] = useState(btnsArr);

  return (
    <div className="div">
      <h1>Standard반 배열 API</h1>
      <input
        value={input}
        onChange={(e) => {
          console.log(e);
          setInput(e.target.value);
        }}
      ></input>
      <br />
      {btnsArr.map((btn, index) => {
        return (
          <button key={index} className="btn" onClick={btn.func}>
            {btn.name}
          </button>
        );
      })}

      <div className="originArr">
        <strong>원본배열 :</strong>
        {array.join(", ")}
      </div>
      <div className="originArr">
        <strong>결과물 :</strong> {result}
      </div>
    </div>
  );
}

export default App;

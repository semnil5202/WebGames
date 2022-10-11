import React, { useState, useRef } from "react";

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const input = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (Number(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult("정답입니다.");
      setValue("");
      setScore((prevState) => prevState + 1); // 1
      input.current.focus();
    } else {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult(
        `오답입니다. ${first} 곱하기 ${second}의 정답은 ${first * second}`
      );
      setValue("");
      setWrongScore(wrongScore + 1); // 2
      input.current.focus();
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          {first} 곱하기 {second}는?
        </div>
        <form onSubmit={onSubmit}>
          <input ref={input} type="number" value={value} onChange={onChange} />
          <button>입력!</button>
        </form>
        <div>{result}</div>
        <div>맞힌 문제 : {score}개</div>
        <div>틀린 문제 : {wrongScore}개</div>
      </div>
    </>
  );
};

export default Gugudan;

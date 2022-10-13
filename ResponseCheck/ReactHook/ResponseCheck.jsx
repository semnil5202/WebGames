import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  const [text, setText] = useState("클릭해서 시작하세요");
  const [state, setState] = useState("wait");
  const [result, setResult] = useState();
  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const onReset = () => {
    clearTimeout(timeout);
    setState("wait");
    setText("클릭해서 시작하세요");
    setResult(null);
  };

  const onClickScreen = () => {
    if (state === "wait") {
      setState("ready");
      setText("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setState("now");
        setText("지금 클릭하세요!");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      setState("wait");
      setText("너무 성급했어요 다시시작!");
    } else if (state === "now") {
      clearTimeout(timeout.current);
      endTime.current = new Date();
      setState("wait");
      setText("클릭해서 시작하세요");
      setResult(endTime.current - startTime.current);
    }
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {text}
      </div>
      <div>시간 : {result}ms</div>
      <button onClick={onReset}>리셋버튼</button>
    </>
  );
};

export default ResponseCheck;

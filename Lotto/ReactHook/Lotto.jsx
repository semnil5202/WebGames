import React, { useState, useRef, useEffect, useMemo } from "react";
import Ball from "./Ball";

function getLottoNumber() {
  const lottoNum = Array(45)
    .fill()
    .map((_, i) => i + 1);
  const shuffles = [];
  while (lottoNum.length > 0) {
    shuffles.push(
      lottoNum.splice(Math.floor(Math.random() * lottoNum.length), 1)[0]
    );
  }
  const bonusNumber = shuffles[shuffles.length - 1];
  const winNumbers = shuffles.slice(0, 6).sort((a, b) => a - b);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getLottoNumber(), []);
  const [number, setNumber] = useState(lottoNumbers);
  const [renderNum, setRenderNum] = useState([]);
  const [bonusNum, setBonusNum] = useState(null);
  const [redo, setRedo] = useState(false);
  const interval = useRef();

  useEffect(() => {
    interval.current = setTimeout(() => {
      if (number.length > 1) {
        setRenderNum([...renderNum, number.shift()]);
      } else if (number.length === 1) {
        setBonusNum(number.shift());
        setRedo(true);
      }
    }, 100);
    return () => {
      clearTimeout(interval);
    };
  }, [renderNum]);

  const onClickButton = () => {
    setNumber(getLottoNumber());
    setRenderNum([]);
    setBonusNum(null);
    setRedo(false);
  };

  return (
    <>
      <h2>로또추첨기</h2>
      <div>
        {renderNum.map((i) => (
          <Ball key={i} number={i} />
        ))}
      </div>
      <h2>보너스 번호</h2>
      {bonusNum && <Ball number={bonusNum} />}
      {redo && <button onClick={onClickButton}>다시하기</button>}
    </>
  );
};

export default Lotto;

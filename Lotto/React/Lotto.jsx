import React, { Component, createRef } from "react";
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

class Lotto extends Component {
  state = {
    number: getLottoNumber(),
    renderNum: [],
    bonusNum: null,
    redo: false,
  };
  interval = createRef();

  componentDidMount() {
    this.runTimeOuts();
  }

  componentDidUpdate() {
    this.runTimeOuts();
  }

  componentWillUnmount() {
    clearTimeout(this.interval.current);
  }

  onClickButton = () => {};

  runTimeOuts = () => {
    const { number, renderNum } = this.state;
    this.interval.current = setTimeout(() => {
      if (number.length > 1) {
        this.setState({
          renderNum: [...renderNum, number.shift()],
        });
      } else if (number.length === 1) {
        this.setState({
          bonusNum: number.shift(),
          redo: true,
        });
      }
    }, 100);
  };

  onClickButton = () => {
    this.setState({
      number: getLottoNumber(),
      renderNum: [],
      bonusNum: null,
      redo: false,
    });
  };

  render() {
    const { renderNum, redo, bonusNum } = this.state;
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
        {redo && <button onClick={this.onClickButton}>다시하기</button>}
      </>
    );
  }
}

export default Lotto;

import React, { Component } from "react";

class Gugudan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
      score: 0,
      wrongScore: 0,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (Number(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        //1
        return {
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          result: "정답입니다.",
          value: "",
          score: prevState.score + 1,
        };
      });
      this.input.focus();
    } else {
      this.setState({
        // 2
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        result: `오답입니다. ${this.state.first} 곱하기
        ${this.state.second}의 정답은 ${this.state.first * this.state.second}`,
        value: "",
        wrongScore: this.state.wrongScore + 1,
      });
      this.input.focus();
    }
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  input; // input 태그 focus

  render() {
    return (
      <div>
        <div>
          {this.state.first} 곱하기 {this.state.second}는?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={(c) => {
              this.input = c;
            }}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
        <div>맞힌 문제 : {this.state.score}개</div>
        <div>틀린 문제 : {this.state.wrongScore}개</div>
      </div>
    );
  }
}

export default Gugudan;

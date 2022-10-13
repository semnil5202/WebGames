import React, { Component, createRef } from "react";

class ResponseCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "클릭해서 시작하세요",
      state: "wait",
      result: null,
    };
    this.timeout = createRef();
    this.startTime = createRef();
    this.endTime = createRef();
  }

  onReset = () => {
    this.setState({
      state: "wait",
      text: "클릭해서 시작하세요",
      result: null,
    });
    clearTimeout(this.timeout.current);
  };

  onClickScreen = () => {
    const { state } = this.state;
    if (state === "wait") {
      this.setState({
        state: "ready",
        text: "초록색이 되면 클릭하세요",
      });
      this.timeout.current = setTimeout(() => {
        this.setState({
          state: "now",
          text: "지금 클릭하세요!",
        });
        this.startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(this.timeout.current);
      this.setState({
        state: "wait",
        text: "너무 성급했어요 다시시작!",
      });
    } else if (state === "now") {
      clearTimeout(this.timeout.current);
      this.endTime.current = new Date();
      this.setState({
        state: "wait",
        text: "클릭해서 시작하세요",
        result: this.endTime.current - this.startTime.current,
      });
    }
  };

  render() {
    return (
      <>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.text}
        </div>
        <div>시간 : {this.state.result}ms</div>
        <button onClick={this.onReset}>리셋버튼</button>
      </>
    );
  }
}

export default ResponseCheck;

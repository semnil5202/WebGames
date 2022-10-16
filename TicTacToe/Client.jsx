import React from "react"; // const React = require('react');
import ReactDom from "react-dom/client"; // const ReactDom = require('react-dom');
import TicTacToe from "./TicTacToe"; // const TicTacToe = require('./TicTacToe')

ReactDom.createRoot(document.querySelector("#root")).render(<TicTacToe />);

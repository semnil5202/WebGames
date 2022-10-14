import React from "react"; // const React = require('react');
import ReactDom from "react-dom/client"; // const ReactDom = require('react-dom');
import Lotto from "./Lotto"; // const Lotto = require('./Lotto')

ReactDom.createRoot(document.querySelector("#root")).render(<Lotto />);

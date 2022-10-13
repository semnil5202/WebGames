import React from "react"; // const React = require('react');
import ReactDom from "react-dom/client"; // const ReactDom = require('react-dom');
import ResponseCheck from "./ResponseCheck"; // const ResponseCheck = require('./ResponseCheck')

ReactDom.createRoot(document.querySelector("#root")).render(<ResponseCheck />);

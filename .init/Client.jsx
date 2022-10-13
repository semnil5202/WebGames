import React from "react"; // const React = require('react');
import ReactDom from "react-dom/client"; // const ReactDom = require('react-dom');
import ProjectName from "./ProjectName"; // const ProjectName = require('./ProjectName')

ReactDom.createRoot(document.querySelector("#root")).render(<ProjectName />);

import React from "react";
import ReactDOM from "react-dom";

console.log("hola");

ReactDOM.render(<h1>hola mundo!</h1>, document.getElementById("app"));

module.hot.accept();

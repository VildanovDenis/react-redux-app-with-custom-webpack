import React from "react";
import ReactDOM from "react-dom";

const element = <div>hello from custom webpack</div>;

const root = document.createElement("main");
root.id = "root";
document.documentElement.appendChild(root);

ReactDOM.render(element, document.getElementById("root"));

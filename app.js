import React from "react";
import ReactDOM from "react-dom/client";

const header1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1"
);

const header2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading 2"
);
const header3 = React.createElement(
  "h3",
  {
    id: "title2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [header1, header2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

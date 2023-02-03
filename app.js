import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = <h1>Title</h1>;

//Functional Component
const SubTitle = () => {
  return <h2>Subtitle</h2>;
};

const Header = () => {
  return (
    <div>
      {Title}
      <SubTitle />
      <h2>Im a Header</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

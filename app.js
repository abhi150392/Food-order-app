import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = <h1>Title</h1>;

//Functional Component
const Logo = () => {
  return (
    <div>
      <img
        src="https://marketplace.canva.com/EAFMNm9ybqQ/1/0/1600w/canva-gold-luxury-initial-circle-logo-qRQJCijq_Jw.jpg"
        height="75px"
      />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Logo />
      <input type="text" placeholder="Search.." />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

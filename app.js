import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const title = <h1>Food Villa</h1>;

//Functional Component
const Header = () => {
  return (
    <div className="nav-bar">
      <a href="/">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/017/485/019/small/a-man-is-riding-a-scooter-delivery-logo-template-vector.jpg" />
      </a>

      <ul className="nav-item">
        <li className="nav-items">Home</li>
        <li className="nav-items">About</li>
        <li className="nav-items">Contact</li>
        <li className="nav-items">Cart</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return <h1>Body</h1>;
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

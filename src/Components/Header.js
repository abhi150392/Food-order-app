import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoggedInUser = () => {
  //API call to check authentication
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/017/485/019/small/a-man-is-riding-a-scooter-delivery-logo-template-vector.jpg" />
    </a>
  );
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);

  useEffect(() => {
    console.log("useEfeect called");
  });
  console.log("render");

  return (
    <>
      <div className="nav-bar">
        <Title />
        <div>
          <ul className="nav-item">
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-items">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-items">Cart</li>
          </ul>
        </div>
        {isLogedIn ? (
          <button
            onClick={() => {
              setIsLogedIn(false);
            }}
          >
            LogIn
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLogedIn(true);
            }}
          >
            LogOut
          </button>
        )}
      </div>
    </>
  );
};

export default Header;

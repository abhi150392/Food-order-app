import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoggedInUser = () => {
  //API call to check authentication
  return false;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/017/485/019/small/a-man-is-riding-a-scooter-delivery-logo-template-vector.jpg"
      />
    </a>
  );
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEfeect called");
  });
  console.log("render");

  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li>
              {isLogedIn ? (
                <button
                  className="login-btn"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  LogIn
                </button>
              ) : (
                <button
                  className="logout-btn"
                  onClick={() => {
                    setIsLogedIn(true);
                  }}
                >
                  LogOut
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

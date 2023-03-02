import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";

// const LoggedInUser = () => {
//   //API call to check authentication
//   return false;
// };

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

  const isOnline = useOnline();

  useEffect(() => {
    console.log("useEfeect called");
  });
  console.log("render");

  const { user } = useContext(UserContext);

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
              <Link to="/instamart">Instamart</Link>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <span className="p-2 m-2 text-orange-500">{user.name}</span>
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

            <h1>{isOnline ? "✅ " : "🔴"}</h1>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

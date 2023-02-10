import { useState } from "react";

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

  return (
    <>
      <div className="nav-bar">
        <Title />
        <div>
          <ul className="nav-item">
            <li className="nav-items">Home</li>
            <li className="nav-items">About</li>
            <li className="nav-items">Contact</li>
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

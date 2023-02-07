const Title = () => {
  return (
    <a href="/">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/017/485/019/small/a-man-is-riding-a-scooter-delivery-logo-template-vector.jpg" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="nav-bar">
      <Title />
      <ul className="nav-item">
        <li className="nav-items">Home</li>
        <li className="nav-items">About</li>
        <li className="nav-items">Contact</li>
        <li className="nav-items">Cart</li>
      </ul>
    </div>
  );
};

export default Header;

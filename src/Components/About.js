import ProfileClass from "./ProfileClass";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container">
      {show ? (
        <>
          <Link to={"/about"}>
            <button
              className="profile-btn"
              onClick={() => {
                setShow(false);
              }}
            >
              Hide My Profile
            </button>
          </Link>
          <Outlet />
        </>
      ) : (
        <Link to={"profileInfo"}>
          <button
            className="profile-btn"
            onClick={() => {
              setShow(true);
            }}
          >
            Show My Profile
          </button>
        </Link>
      )}
    </div>
  );
};

export default About;

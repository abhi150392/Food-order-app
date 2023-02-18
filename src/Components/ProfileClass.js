import React from "react";
import ProfileUser from "./ProfileUser";
import ProfileClassWork from "./ProfileClassWork";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("constructor");
    //Best place to create State in react
    this.state = {
      userInfo: {
        name: "",
        avatar_url: "",
      },
    };
  }

  //Best place to call an API
  async componentDidMount() {
    // console.log("componentDidMount");
    const Api_URI = await fetch("https://api.github.com/users/abhi150392");
    const json = await Api_URI.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    /* this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000); */
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }
  render() {
    const { userInfo } = this.state;
    // console.log("render");
    return (
      <>
        <div className="profile-main-container">
          <div className="profile-inner-container">
            <h1 className="title">About Me</h1>
            <ProfileUser data={userInfo} />
          </div>
          <div className="profile-skills-container">
            <h1 className="title">Git Hub Repositories</h1>
            <ProfileClassWork />
          </div>
        </div>
      </>
    );
  }
}

export default ProfileClass;

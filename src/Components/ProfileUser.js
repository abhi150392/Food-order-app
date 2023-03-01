import React from "react";
import ProfileSocialMedia from "./ProfileSocialMedia";

class ProfileUser extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child-constructor");
  }

  componentDidMount() {
    // console.log("child-componentDidMount");
  }
  componentDidUpdate() {
    // console.log(" child componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log(" child componentWillUnmount");
  }

  render() {
    const { avatar_url } = this.props.data;
    return (
      <div className="profile-card">
        <img className="profile-img" src={this.props.data.avatar_url} />
        <p className="para">
          React.js Developer l JavaScript l HTML5 | CSS3 l Tailwind CSS | SASS |
          Front End Developer
        </p>
        <ProfileSocialMedia />
      </div>
    );
  }
}

export default ProfileUser;

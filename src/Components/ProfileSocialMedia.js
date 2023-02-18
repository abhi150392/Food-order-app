import { Component } from "react";
import { Linkedin_Link, Github_Link, Email_Link } from "../constants";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

class ProfileSocialMedia extends Component {
  constructor(props) {
    super(props);
    // console.log("SocialMedia constructor");
  }

  componentDidMount() {
    // console.log("SocialMedia componentDidMount");
  }
  componentDidUpdate() {
    // console.log("SocialMedia componentDidUpdate");
  }
  componentWillMount() {
    // console.log("SocialMedia componentWillMount");
  }

  render() {
    return (
      <div className="social-media-container">
        <a href={Linkedin_Link} className="btn-icons linkedin" target="_blank">
          <i>
            <SiLinkedin />
          </i>
        </a>
        <a href={Github_Link} className="btn-icons github" target="_blank">
          <i>
            <SiGithub />
          </i>
        </a>
        <a href={Email_Link} className="btn-icons email" target="_blank">
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default ProfileSocialMedia;

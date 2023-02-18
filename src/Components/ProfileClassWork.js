import { Component } from "react";

class ProfileClassWork extends Component {
  constructor(props) {
    super(props);
    // console.log("Cild ProfilClassWork Contructor");
  }
  componentDidMount() {
    // console.log("Child ProfilClassWork componentDidMount");
  }
  componentDidUpdate() {
    // console.log("Child ProfilClassWork componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("Child ProfilClassWork componentWillUnmount");
  }

  render() {
    // console.log("Cild ProfilClassWork render");
    return (
      <div className="work-exp-container">
        <h3 title="repo-title">
          <a
            href="https://github.com/abhi150392/Food-order-app"
            target="_blank"
          >
            Food Order APP
          </a>
        </h3>
        <h3 title="repo-title">
          <a
            href="https://github.com/abhi150392/Quiz-functionality"
            target="_blank"
          >
            Quiz functionality
          </a>
        </h3>
        <h3 title="repo-title">
          <a href="https://github.com/abhi150392/Shopping-Cart" target="_blank">
            Shopping Cart
          </a>
        </h3>
      </div>
    );
  }
}

export default ProfileClassWork;

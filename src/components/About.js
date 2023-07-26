import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    console.log("parent cons");
  }
  componentDidMount() {
    // APi's call
    console.log("parent Mount");
  }
  render() {
    console.log("parent render");
    return (
      <div className="about">
        <h1>Surjith</h1>
        <h3>Front-End Developer</h3>
        <UserClass />
      </div>
    );
  }
}

export default About;

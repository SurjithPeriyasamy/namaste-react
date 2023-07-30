import UserContext from "../utils/UserContext";
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
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold text-xl">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h1>Front-End Developer</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;

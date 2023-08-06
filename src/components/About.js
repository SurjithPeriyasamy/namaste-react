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
      <div className="flex flex-col text-lg font-semibold text-red-400 italic items-center h-80 m-5 justify-center">
        <div className="">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-xl">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
          <h1 className="italic font-bold  [text-shadow:_0_5px_2px_gray]">
            Front-End Developer
          </h1>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default About;

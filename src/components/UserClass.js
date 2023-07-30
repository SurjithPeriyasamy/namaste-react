import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // keyword that is used to call the parent's class method

    this.state = {
      userInfo: {
        name: "empty",
        location: "empty location",
      },
    };
    // console.log(this.state.userInfo.name + " child cons");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SurjithPeriyasamy");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    // console.log(this.state.userInfo.name + " child mount");
  }

  render() {
    const { name, location } = this.state.userInfo;
    // console.log(name + " child render");
    return (
      <div className="user-card">
        <h2>
          Name : {name} <small>(class Component)</small>
        </h2>
        <img
          className="w-52"
          src="https://avatars.githubusercontent.com/u/135200324?v=4"
        />
        <h3>Location : {location} </h3>
        <h4>Contact : @surjith007</h4>
      </div>
    );
  }
}

export default UserClass;

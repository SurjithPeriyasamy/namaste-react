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
      <div className="user-card ">
        <h2>
          Name : {name} <small></small>
        </h2>
        <div className="relative flex justify-center items-center">
          <div className="border-8 h-52 w-52 border-blue-400 border-x-teal-500 rounded-full animate-spin absolute "></div>
          <img
            className="w-52 m-3 rounded-full shadow-cyan-200 shadow-lg"
            src="https://avatars.githubusercontent.com/u/135200324?v=4"
          />
        </div>

        <h3>Location : {location} </h3>
        <h4>Contact : @surjith007</h4>
      </div>
    );
  }
}

export default UserClass;

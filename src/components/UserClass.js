import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // keyword that is used to call the parent's class method

    this.state = {
      userInfo: {
        login: "empty",
        location: "empty location",
      },
    };
    console.log(this.state.userInfo.login + " child cons");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SurjithPeriyasamy");
    const json = await data.json();
    console.log(json.login);

    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
    console.log(this.state.userInfo.login + " child mount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("willl Unmount");
  }

  render() {
    const { login, location } = this.state.userInfo;
    console.log(login + " child render");
    return (
      <div className="user-card">
        <h2>
          Name : {login} <small>(class Component)</small>
        </h2>
        <h3>Location : {location} </h3>
        <h4>Contact : @surjith007</h4>
      </div>
    );
  }
}

export default UserClass;

import { useEffect } from "react";

const User = (props) => {
  const name = props.name;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <h2>
        Name : {name} <small>(functional Component)</small>
      </h2>
      <h3>Location : Tamilnadu</h3>
      <h4>Contact : @surjith007</h4>
    </div>
  );
};

export default User;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg bg-pink-100 m-2 sm:bg-green-100 md:bg-blue-100">
      <div className="logo-container">
        <img className="logo w-40 h-full" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">
            {onlineStatus === false ? "Offline 🔴" : " Active Now 🟢"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className=" px-4"
            onClick={() => {
              logBtn == "Login" ? setLogBtn("Logout") : setLogBtn("Login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

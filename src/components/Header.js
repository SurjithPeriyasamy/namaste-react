import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName, loggedBtn, setLogBtn } =
    useContext(UserContext);

  //subscribing the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex shadow-md shadow-gray-500 sm:h-fit md-h-28  bg-white md:fixed z-10 right-0 left-0 top-0 items-center flex-col sm:flex-row sm:justify-between">
      <div className=" flex flex-col items-center shrink-0 p-2 ">
        <Link to="/">
          <img className="w-full h-20 md:hover:animate-bounce" src={LOGO_URL} />
        </Link>
        <h3 className="font-bold text-lg italic">
          Food <span className="text-red-800">Gear</span>
        </h3>
      </div>
      <div>
        <ul className="flex m-4 p-4 text-gray-700 justify-evenly flex-wrap font-semibold text-md">
          <li className="p-3  m-3">
            {onlineStatus === false ? "Offline 🔴" : " Active Now 🟢"}
          </li>
          <li className="p-3 m-3 hover:bg-red-500 hover:text-white hover:rounded-lg ease-linear duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3  m-3 hover:bg-red-500 hover:text-white hover:rounded-lg ease-linear duration-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-3 m-3 hover:bg-red-500 hover:text-white hover:rounded-lg ease-linear duration-200">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3 m-3 hover:bg-red-500 hover:text-white hover:rounded-lg ease-linear duration-200">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3 m-3 hover:bg-red-500 hover:text-white hover:rounded-lg ease-linear duration-200">
            <Link to="/cart">🛒- ({cartItems.length} items)</Link>
          </li>
          <li className="p-3 m-3 hover:bg-red-500 hover:text-white hover:rounded-lg ease-linear duration-200">
            <button
              onClick={() => {
                if (loggedBtn == "Login") {
                  setLogBtn("Logout");
                } else {
                  setLogBtn("Login");
                  setUserName("");
                }
              }}
            >
              {loggedBtn}
            </button>
          </li>
          <li className="p-3 m-3">
            {loggedBtn == "Login" ? "Default User" : "🙋‍♂️ " + loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

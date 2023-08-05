import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  loggedBtn: "Login",
});

export default UserContext;

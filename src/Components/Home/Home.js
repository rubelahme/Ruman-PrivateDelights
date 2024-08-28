import React from "react";
import NavBar from "./NavBar";
import FootEr from "./FootEr";
import Login from "../Login/Login";

const Home = () => {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Login></Login>
        <FootEr></FootEr>
      </div>
    </>
  );
};

export default Home;

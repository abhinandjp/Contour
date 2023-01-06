import React, { Fragment } from "react";
import Home from "../../Components/Contractor/Home";
import Navbar from "../../Components/Contractor/Navbar";

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default HomePage;

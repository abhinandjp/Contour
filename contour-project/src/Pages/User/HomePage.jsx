import React, { Fragment } from "react";
import Footer from "../../Components/User/Footer";
import Home from "../../Components/User/Home";
import Navbar from "../../Components/User/Navbar";

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default HomePage;

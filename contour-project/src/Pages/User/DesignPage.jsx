import React, { Fragment } from "react";
import Designs from "../../Components/User/Designs";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";

function DesignPage() {
  return (
    <Fragment>
      <Navbar />
      <Designs />
      <Footer />
    </Fragment>
  );
}

export default DesignPage;

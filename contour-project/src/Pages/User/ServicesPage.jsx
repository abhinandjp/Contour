import React, { Fragment } from "react";
import Footer from "../../Components/User/Footer";
import Navbar from "../../Components/User/Navbar";
import Services from "../../Components/User/Services";

function ServicesPage() {
  return (
    <Fragment>
      <Navbar />
      <Services />
      <Footer />
    </Fragment>
  );
}

export default ServicesPage;

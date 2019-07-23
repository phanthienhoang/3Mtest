import React from "react";

// core components
import IndexNavbar from "../Navbars/IndexNavbar.js";
// index sections
import Categories from "../Categories";
import Header from '../Headers';
import Footer from '../Footers';

function index() {
  return (
    <div>
      <IndexNavbar />
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default index;

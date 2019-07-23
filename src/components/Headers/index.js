/*eslint-disable*/
import React from "react";
import Login from "../Login";

// reactstrap components
import { Container } from "reactstrap";

// core components

function index() {
  return (
    <>
      
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/trangchu.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Online Exam CodeGym</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
                Designed by a team C0319i1
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
           
      </div>
    </>
  );
}



export default index;

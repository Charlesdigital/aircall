import React from "react";
import "./activityDetails.css";
import { FcEndCall } from "react-icons/fc";

// import axios from 'axios'
function activityDetails() {
  // const [
  //   number,
  //   name,
  //   date,
  //   time,
  //   numberofCalls,
  // ]

  return (
    <div className="time-container">
      <span className="date"> July 27, 2017</span>
    <div className="details-container">
      <div className="content">
        <span>
          {" "}
          <FcEndCall />{" "}
        </span>

        <div className="number-call">
          <div>
          <span className="number">+336 45 13 53 91</span>
          <span className="red-circle"> 5</span>
          </div>
          <span>tried to call on </span>
        </div>

        <div className="time">
          <span>7: 58</span>
          <span> PM </span>
        </div>

      </div>
    </div>
    </div>
  );
}

export default activityDetails;

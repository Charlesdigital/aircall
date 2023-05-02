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
  // ]

  return (
    <div className="details-container">
      <div className="content">
        <span>
          {" "}
          <FcEndCall />{" "}
        </span>

        <div className="number-call">
          <span className="number">+336 45 13 53 91</span>
          <span>tried to call on </span>
        </div>

        <div className="time">
          <span className="number">7: 58</span>
          <span> PM </span>
        </div>

      </div>
    </div>
  );
}

export default activityDetails;

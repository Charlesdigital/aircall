import "./bottomNavBar.css";
import { IoIosCall } from "react-icons/Io";
import { RxPerson } from "react-icons/Rx";
import { MdOutlineDialpad } from "react-icons/Md";
import { HiOutlineCog } from "react-icons/Hi";
import { BsStopCircle } from "react-icons/Bs";

import React from 'react'

function bottomNavBar() {
  return (
    <div classNAme="navbar-container">bottomNavBar
    <span> <IoIosCall /></span>
    <span> <RxPerson /></span>
    <span> <MdOutlineDialpad /></span>
    <span> <HiOutlineCog /></span>
    <span> <BsStopCircle /></span>



    </div>
  )
}

export default bottomNavBar
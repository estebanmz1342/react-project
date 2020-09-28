import React from "react";
import { Link } from "react-router-dom";
import Style from "./Footer.module.css";
    
const Footer = () => {
  return (
    <div className={Style.footer}>
      <p className={Style.text}>Copyright © 2020. All Rights Reserved</p>
    </div>
  );
};

export default Footer;

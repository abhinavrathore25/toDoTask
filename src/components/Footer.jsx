import React from "react";
import Silky from "./Silky";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="item">
      <Silky />
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;

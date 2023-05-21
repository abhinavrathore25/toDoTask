import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import Bagish from "./Bagish";

function Header() {
  return (
    <header>
      <Bagish/>
      <h1>
        <HighlightIcon />
        To-Do TASK
      </h1>
    </header>
  );
}

export default Header;

import React from "react";

function Silky() {
  const year = new Date().getFullYear();
  return (
    <footer className="item">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Silky;
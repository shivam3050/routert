import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div>
        header file
        <Link to="/">link to home</Link>
      </div>
    </>
  );
}
export default Header;

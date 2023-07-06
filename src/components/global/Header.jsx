import React from "react";
import { Link } from "react-router-dom";

import logo from "/DSlevelup.png";

const link =
  "relative text-principal font-primary font-medium text-2xl  duration-300 hover:ease-in hover:duration-300 noHover yesHover outline-none";

export default function Header() {
  return (
    <header className="absolute w-full bg-content py-5 flex items-center justify-around drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
      <img src={logo} alt="" className="w-[200px]" />
      <nav className="relative flex gap-4">
        <Link to="/" className={link}>
          Home
        </Link>
        <Link to="/register" className={link}>
          Register
        </Link>
        <Link to="/users" className={link}>
          Users
        </Link>
      </nav>
    </header>
  );
}

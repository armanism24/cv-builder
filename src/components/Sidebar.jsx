import React from "react";
import Logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.svg";
import share from "../assets/images/share.svg";
import details from "../assets/images/details.svg";
import settings from "../assets/images/settings.svg";
import logout from "../assets/images/logout.svg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className="fixed w-[110px] bg-primary h-full">
        <div className="flex flex-col items-center gap-2 sidebar-inner py-14">
          <Link to="/">
            <img className="w-12  mb-14" src={Logo} alt="" />
          </Link>
          <Link to="/">
            <img
              className="px-6 py-6 rounded-lg  bg-gradient"
              src={avatar}
              alt=""
            />
          </Link>
          <Link to="/cv-distribution">
            <img
              className="px-6 py-6 rounded-lg  bg-gradient"
              src={share}
              alt=""
            />
          </Link>
          <Link to="/users">
            <img
              className="px-6 py-6 rounded-lg  bg-gradient"
              src={details}
              alt=""
            />
          </Link>
          <Link to="/">
            <img
              className="px-6 py-6 rounded-lg  bg-gradient"
              src={settings}
              alt=""
            />
          </Link>
          <div>
            <img
              className="px-6 py-6 mt-16 rounded-lg  bg-gradient"
              src={logout}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

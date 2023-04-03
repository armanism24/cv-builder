import React from "react";
import notification from "../assets/images/notification.svg";
import person from "../assets/images/person.svg";
import description from "../assets/images/description.svg";
import search from "../assets/images/searchicon.svg";

const Topbar = () => {
  return (
    <div className="px-12 border-b border-[#E5E7EE] mb-[35px]">
      <div className="flex items-center justify-end gap-6 py-8">
        <img className=" " src={notification} alt="" />
        <img className=" " src={person} alt="" />
        <img className=" " src={description} alt="" />
        <img className=" " src={search} alt="" />
      </div>
    </div>
  );
};

export default Topbar;

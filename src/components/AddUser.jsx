import React from "react";
import Progress from "../assets/images/progress.svg";
import search from "../assets/images/search.svg";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AddUser = () => {
  return (
    <div className="w-full pb-40">
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Topbar />
          <div className="ml-[110px] px-10">
            <div className=" border border-[#E5E7EE] rounded-3xl px-4 py-10 text-secondary">
              <div className="flex justify-end gap-4 pb-12">
                <div className="max-w-[233px]">
                  <div className="flex gap-3 border border-[#E5E7EE] py-3 px-3 rounded-lg shadow-[#E7F0FF] shadow">
                    <img className="w-4" src={search} alt="" />
                    <input
                      type="text"
                      placeholder="Target Role"
                      className=" outline-none w-full text-sm bg-[#fff]"
                    />
                  </div>
                </div>
                <div className="">
                  <button className="border border-[#E5E7EE] py-2.5 px-3 rounded-lg font-semibold shadow-[#E7F0FF] shadow">
                    + Add New
                  </button>
                </div>
              </div>

              <table>
                <tr>
                  <th>Client</th>
                  <th>Sales Person</th>
                  <th>CV Specialist</th>
                  <th>ATS</th>
                  <th>Target Role</th>
                  <th>Industry</th>
                  <th>Joined</th>
                </tr>
                <tr>
                  <td>Catherine Clay</td>
                  <td>Shane Dhury</td>
                  <td>Samee Khalid</td>
                  <td>
                    <div className="flex justify-center">
                      <img src={Progress} alt="" />
                    </div>
                  </td>
                  <td>Finance Director</td>
                  <td>Finance</td>
                  <td>17 Jan</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

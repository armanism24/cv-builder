import React, { useState } from "react";
import trash from "../../assets/images/trash.svg";
import down from "../../assets/images/down.svg";
import plus from "../../assets/images/+.svg";

const Skills = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-[1070px]">
      <div className="mb-[10px] bg-[#fff] border border-[#EBECEE] shadow-sm hover:shadow duration-500 rounded-lg max-w-[900px] mx-auto">
        <div
          className={`py-5 w-full  flex justify-between tracking-faq-open`}
          onClick={() => setOpen(!open)}
        >
          <div
            className="px-8 py-4"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p className="">Title, Publisher, Date</p>
            <div className="flex items-center gap-3">
              <img src={trash} alt="" className="" />
              <img src={down} alt="" className="ml-6 " />
            </div>
          </div>
        </div>
        <div className={`${open ? "open" : "collapse"} `}>
          <div className="px-4 pt-2 pb-10">
            <div className="max-w-[900px] shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded-lg px-6 py-12 mt-10">
              <div className="max-w-[780px] mx-auto">
                <div>
                  <div className="w-full">
                    <form >
                      <div className="grid justify-start grid-cols-2 gap-6">
                        <div className="mb-4">
                          <label
                            className="block text-grey text-sm mb-2"
                            for="username"
                          >
                            Target Role
                          </label>
                          <input
                            className="appearance-none shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded w-full py-2 max-w-[340px] px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                          />
                        </div>

                        <button className="bg-[#F5F9FF] max-h-[40px] max-w-[135px] px-6 rounded mt-7 btn-g border border-[#6d8fbe]">
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded-lg px-6 py-12 mt-10">
                  <div className="flex justify-start gap-4">
                    <div className="flex justify-center items-center py-2 px-5 gap-2 rounded-full bg-[#E7F0FF] pr-7">
                      <img src={plus} alt="" className="w-3" />
                      <button>Web Development</button>
                    </div>
                    <div className="flex justify-center items-center py-2 px-5 gap-2 rounded-full bg-[#E7F0FF] pr-7">
                      <img src={plus} alt="" className="w-3" />
                      <button>Web Designing</button>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end gap-5 pt-20">
                      <button className="bg-[#0F67FE] text-[#fff] py-1 px-4 rounded">
                        + Add More
                      </button>
                      <button className="bg-[#0F67FE] text-[#fff] py-1 px-4 rounded">
                        + Add All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

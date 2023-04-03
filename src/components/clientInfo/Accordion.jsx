import React, { useState } from "react";

const Faq = ({ title, icon, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-full">
        <div className="main-container">
          <div>
            <div className="mb-8">
              <div className="mb-[10px] bg-[#fff] border border-[#EBECEE] shadow-sm hover:shadow duration-500 rounded-lg max-w-[1070px]">
                <div
                  className={`py-5 w-full cursor-pointer  flex justify-between tracking-faq-open bg-[#fff] rounded-lg`}
                  onClick={() => setOpen(!open)}
                >
                  <div className="flex items-center gap-6 px-16 py-3 ">
                    <img src={icon} alt="" />
                    <p>{title}</p>
                  </div>
                  <div className={` text-2xl md:mr-4 flex self-center`}></div>
                </div>
                <div className={`${open ? "open" : "collapse"} `}>
                  <div className="px-4 pt-2 pb-10">{content}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

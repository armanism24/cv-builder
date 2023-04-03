import React, { useState } from "react";
import ReactQuill from "react-quill";
import ArrowIcon from "../assets/images/downArrow.svg";
import downIcon from "../assets/images/down.svg";
import DistributionIcon from "../assets/images/disttribution.svg";
import Input from "./Input";
import Label from "./Label";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const CvDistribution = () => {
  const [cvDistribution, setCvDistribution] = useState([]);
  const [open, setOpen] = useState();

  const [components, setComponents] = useState([
    {
      id: 1,
      clientName: "",
      emailSubject: "",
      sector: "",
      description: "",
    },
  ]);

  const handleInputChange = (event, id) => {
    const { name, value } = event.target;
    const updatedComponents = components.map((component) => {
      if (component.id === id) {
        return {
          ...component,
          [name]:
            event.target.type === "checkbox" ? event.target.checked : value,
        };
      }
      return component;
    });
    setComponents(updatedComponents);
    setCvDistribution(components);
  };

  const handleRichTextChange = (value, id) => {
    const updatedComponents = components.map((component) => {
      if (component.id === id) {
        return {
          ...component,
          description: value,
        };
      }
      return component;
    });
    setComponents(updatedComponents);
    setCvDistribution(components);
  };

  return (
    <div className="w-full pb-40">
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Topbar />
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
                        <img src={DistributionIcon} alt="" />
                        <p>{`CV Distribution`}</p>
                      </div>
                      <div
                        className={` text-2xl md:mr-4 flex self-center`}
                      ></div>
                    </div>
                    <div>
                      <div>
                        <div>
                          {components.map((component, index) => (
                            <div
                              key={component.id}
                              className="mb-[10px] bg-[#fff]    duration-500 max-w-[1070px] mx-auto"
                            >
                              <div
                                className={`py-5 w-full flex justify-between`}
                              >
                                <div
                                  className="px-8 py-4"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                  }}
                                >
                                  <p>
                                    {component.clientName}{" "}
                                    {component.emailSubject}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="px-4 pt-2 pb-10">
                                  <div>
                                    <div className="max-w-[720px] mx-auto">
                                      <div>
                                        <div className="w-full">
                                          <>
                                            <div className="grid justify-start grid-cols-2 gap-6">
                                              <div className="mb-4">
                                                <Label
                                                  label="Client Name"
                                                  forHtml="clientName"
                                                />
                                                <Input
                                                  name={"clientName"}
                                                  componentId={component.id}
                                                  value={component.clientName}
                                                  handleInputChange={
                                                    handleInputChange
                                                  }
                                                />
                                              </div>
                                              <div className="mb-4 relative">
                                                <Label
                                                  label="Select Sector"
                                                  forHtml="sector"
                                                />
                                                <select
                                                  name={"sector"}
                                                  componentId={component.id}
                                                  value={component.sector}
                                                  handleInputChange={
                                                    handleInputChange
                                                  }
                                                  className="appearance-none bg-[#FFFFFF] shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded w-full py-2.5  px-3 text-grey text-sm leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                  <option value={"sector-a"}>
                                                    Sector A
                                                  </option>
                                                  <option value={"sector-b"}>
                                                    Sector B
                                                  </option>
                                                  <option value={"sector-c"}>
                                                    Sector C
                                                  </option>
                                                </select>
                                                <div className="absolute right-4 top-11">
                                                  <img
                                                    src={ArrowIcon}
                                                    alt=" "
                                                  />
                                                </div>
                                              </div>
                                              <div className="mb-4">
                                                <Label
                                                  label="Email Subject"
                                                  forHtml="emailSubject"
                                                />
                                                <Input
                                                  name={"emailSubject"}
                                                  componentId={component.id}
                                                  value={component.emailSubject}
                                                  handleInputChange={
                                                    handleInputChange
                                                  }
                                                />
                                              </div>
                                            </div>

                                            <div className="mt-12 relative">
                                              <Label
                                                label="Email Content"
                                                forHtml="description"
                                              />
                                              <ReactQuill
                                                theme="snow"
                                                className="ql-ReactQuill "
                                                value={component.description}
                                                onChange={(value) =>
                                                  handleRichTextChange(
                                                    value,
                                                    component.id
                                                  )
                                                }
                                              />
                                              <div className="flex justify-end gap-x-2 ">
                                                <div className="relative">
                                                  <button className="bg-[#FAFCFF] flex px-4 w-28 py-3 rounded-sm absolute right-44 bottom-6">
                                                    Attach
                                                    <img
                                                      src={downIcon}
                                                      alt=""
                                                      className="pl-4 w-8 pt-1"
                                                    />
                                                  </button>
                                                </div>
                                                <div className="relative">
                                                  <button className="bg-[#FAFCFF] flex px-4 w-36 py-3 rounded-sm absolute right-4 bottom-6">
                                                    Templates
                                                    <img
                                                      src={downIcon}
                                                      alt=""
                                                      className="pl-4 w-8 pt-1"
                                                    />
                                                  </button>
                                               
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex justify-end mt-5">
                                              <button className="bg-[#FAFCFF] px-8 py-3 rounded-sm ">
                                                Send
                                              </button>
                                            </div>
                                          </>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
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

export default CvDistribution;

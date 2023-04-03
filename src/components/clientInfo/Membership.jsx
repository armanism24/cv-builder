import React, { useState, useRef } from "react";
import trash from "../../assets/images/trash.svg";
import upload from "../../assets/images/uploadicon.svg";
import down from "../../assets/images/down.svg";
import Label from "../Label";
import Input from "../Input";

const Membership = ({ setMembershipData }) => {
  const [openModal, setOpenModal] = useState();
  const [open, setOpen] = useState();
  const [autoFillField, setAutoFillField] = useState("");
  const inputRef = useRef(null)


  const handleCollapse = (id) => {
    if (open === id) {
      setOpen(0);
    } else {
      setOpen(id);
    }
  };

  const [components, setComponents] = useState([
    {
      id: 1,
      membership_name: "",
      issuer: "",
      start_date: "",
      end_date: "",
    },
  ]);
  const addNewComponent = () => {
    const newId = components.length + 1;
    const newComponent = {
      id: newId,
      membership_name: "",
      issuer: "",
      start_date: "",
      end_date: "",
    };
    setComponents([...components, newComponent]);
    setMembershipData(components)
  };
  const deleteComponent = (id) => {
    const updatedComponents = components.filter(
      (component) => component.id !== id
    );
    setComponents(updatedComponents);
    setMembershipData(updatedComponents)
  };

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
    setMembershipData(updatedComponents)
  };


  const handleFileOpen = () => {
    inputRef.current.click();
  }

  const handleFileChange = (event) => {
    const inputChnge = event.target.files[0];
    console.log(inputChnge, "inputChnge")
  }


  return (
    <div>
      <div>
        {components.map((component, index) => (
          <div
            key={component.id}
            className="mb-[10px] bg-[#fff] border border-[#EBECEE] shadow-sm hover:shadow duration-500 rounded-lg max-w-[900px] mx-auto"
          >
            <div className={`py-5 w-full flex justify-between`}>
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
                  {component.membership_name} {component.issuer}{" "}
                </p>
                <div className="flex items-center gap-3">
                  <div className="cursor-pointer">
                    <img src={upload} alt="" onClick={handleFileOpen} />
                    <input
                      style={{ display: 'none' }}
                      type='file'
                      ref={inputRef}
                      onChange={handleFileChange}
                    />
                  </div>
                                    <img
                    src={trash}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => deleteComponent(component.id)}
                  />
                  <div onClick={() => handleCollapse(index + 1)}>
                    <img
                      src={down}
                      alt=""
                      className={` transition-all transform cursor-pointer duration-300 ml-6  ${open === index + 1 ? "rotate-180" : "rotate-0"
                        }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${open === index + 1 ? "open" : "collapse"} `}>
              <div className="px-4 pt-2 pb-10">
                <div className="max-w-[900px] shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded-lg px-6 py-12 mt-10">
                  <div className="max-w-[720px] mx-auto">
                    <div>
                      <div className="w-full">
                        <form>
                          <div className="grid justify-start grid-cols-2 gap-6">
                            <div className="mb-4">
                              <Label label="Membership Name" forHtml="membership_name" />
                              <Input
                                name={"membership_name"}
                                componentId={component.id}
                                value={component.membership_name}
                                handleInputChange={handleInputChange}
                              />
                            </div>
                            <div className="mb-4">
                              <Label label="Issuer" forHtml="issuer" />
                              <Input
                                name={"issuer"}
                                componentId={component.id}
                                value={component.issuer}
                                handleInputChange={handleInputChange}
                              />
                            </div>

                            <div className="mb-4">
                              <Label label="Time Period" forHtml="timePeriod" />
                              <div className="flex gap-10">
                                <div className="flex gap-3">
                                  <input
                                    className="appearance-none shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded w-full py-2  text-center px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
                                    type="month"
                                    placeholder="03-09"
                                    maxLength={5}
                                    name="start_date"
                                    value={component.start_date}
                                    onChange={(event) =>
                                      handleInputChange(event, component.id)
                                    }
                                  />
                                  <input
                                    className="appearance-none shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded w-full py-2  text-center px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
                                    type="month"
                                    placeholder="03-09"
                                    maxLength={5}
                                    name="end_date"
                                    value={component.end_date}
                                    onChange={(event) =>
                                      handleInputChange(event, component.id)
                                    }
                                  />
                                </div>
                              </div>

                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-16">
        <button
          className="bg-[#F5F9FF] py-3 px-6 rounded"
          onClick={addNewComponent}
        >
          + Add New
        </button>
      </div>
    </div>
  );
};

export default Membership;

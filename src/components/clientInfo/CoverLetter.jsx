import React, { useState, useRef } from "react";
import trash from "../../assets/images/trash.svg";
import upload from "../../assets/images/uploadicon.svg";
import down from "../../assets/images/down.svg";
import Label from "../Label";
import Input from "../Input";
import ReactQuill from "react-quill";
import Modal from "./Modal";
const CoverLetter = ({ setCoverletterData }) => {
  const [openModal, setOpenModal] = useState();
  const [open, setOpen] = useState();
  const [autoFillField, setAutoFillField] = useState("");
  const inputRef = useRef(null);
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
      target_role: "",
      special_requirements: "",
      useCv: false,
      bespoke_cover_letter: "",
    },
  ]);
  const addNewComponent = () => {
    const newId = components.length + 1;
    const newComponent = {
      id: newId,
      target_role: "",
      special_requirements: "",
      useCv: false,
      bespoke_cover_letter: "",
    };
    setComponents([...components, newComponent]);
    setCoverletterData(components);
  };
  const modalHandler = (field) => {
    setOpenModal(!openModal);
    setAutoFillField(field);
  };
  const autoFillResponsibilitiesText = (desc, id) => {
    const updatedComponents = components.map((component) => {
      if (component.id === id && autoFillField === "bespoke_cover_letter") {
        return {
          ...component,
          bespoke_cover_letter: desc,
        };
      }
      return component;
    });
    setComponents(updatedComponents);
    setCoverletterData(updatedComponents);
  };
  const deleteComponent = (id) => {
    const updatedComponents = components.filter(
      (component) => component.id !== id
    );
    setComponents(updatedComponents);
    setCoverletterData(updatedComponents);
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
    setCoverletterData(updatedComponents);
  };

  const handleRichTextChange = (value, id) => {
    const updatedComponents = components.map((component) => {
      if (component.id === id) {
        return {
          ...component,
          bespoke_cover_letter: value,
        };
      }
      return component;
    });
    setComponents(updatedComponents);
    setCoverletterData(updatedComponents);
  };

  const handleFileOpen = () => {
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const inputChnge = event.target.files[0];
    console.log(inputChnge, "inputChnge");
  };
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
                  {component.target_role} {component.special_requirements}
                </p>
                <div className="flex items-center gap-3">
                  <div className="cursor-pointer">
                    <img src={upload} alt="" onClick={handleFileOpen} />
                    <input
                      style={{ display: "none" }}
                      type="file"
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
                      className={` transition-all transform cursor-pointer duration-300 ml-6  ${
                        open === index + 1 ? "rotate-180" : "rotate-0"
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
                        <>
                          <div className="grid justify-start grid-cols-11 gap-6">
                            <div className="mb-4 col-span-5">
                              <Label label="Target Role" forHtml="target_role" />
                              <Input
                                name={"target_role"}
                                componentId={component.id}
                                value={component.target_role}
                                handleInputChange={handleInputChange}
                              />
                            </div>
                            <div className="cursor-pointer flex self-center items-center justify-center">
                              <img
                                src={upload}
                                alt=""
                                onClick={handleFileOpen}
                                className="w-8"
                              />
                              <input
                                style={{ display: "none" }}
                                type="file"
                                ref={inputRef}
                                onChange={handleFileChange}
                              />
                            </div>
                            <div className="mb-4 col-span-5">
                              <Label
                                label="Special Requirements"
                                forHtml="special_requirements"
                              />
                              <Input
                                name={"special_requirements"}
                                componentId={component.id}
                                value={component.special_requirements}
                                handleInputChange={handleInputChange}
                              />
                            </div>

                        
                          </div>
                          <div>
                              <div className="flex">
                                <label>
                                  <input
                                    className="mr-2 leading-tight"
                                    type="checkbox"
                                    name={"useCv"}
                                    value={component.useCv}
                                    onChange={(event) =>
                                      handleInputChange(event, component.id)
                                    }
                                  />
                                  <span className="text-sm text-grey">
                                    Use Current CV
                                  </span>
                                </label>
                              </div>
                            </div>
                          <div className="mt-12 relative">
                            <Label
                              label="Bespoke Cover Letter"
                              forHtml="bespoke_cover_letter"
                            />
                            <ReactQuill
                              theme="snow"
                              className="ql-ReactQuill "
                              value={component.bespoke_cover_letter}
                              onChange={(value) =>
                                handleRichTextChange(value, component.id)
                              }
                            />
                            <button
                              onClick={() => modalHandler("bespoke_cover_letter")}
                              className="bg-[#FAFCFF] px-5 py-3 rounded-sm absolute right-4 bottom-2"
                            >
                              + Add Content
                            </button>
                          </div>
                          <Modal
                            id={component.id}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            autoFillResponsibilitiesText={
                              autoFillResponsibilitiesText
                            }
                          />
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

export default CoverLetter;

import React, { useState, useRef } from "react";
import trash from "../../assets/images/trash.svg";
import upload from "../../assets/images/uploadicon.svg";
import down from "../../assets/images/down.svg";
import Label from "../Label";
import Input from "../Input";
import ReactQuill from "react-quill";
import Modal from "./Modal";
const Education = ({ setEducationData }) => {
  const [openModal, setOpenModal] = useState();
  const [open, setOpen] = useState();
  const [autoFillField, setAutoFillField] = useState("");
  const fileInputRef = useRef(null);

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
      degree_type: "",
      field_of_study: "",
      institution_name: "",
      start_date: "",
      end_date: "",
      isCurrent: false,
      description: "",
    },
  ]);
  const addNewComponent = () => {
    const newId = components.length + 1;
    const newComponent = {
      id: newId,
      degree_type: "",
      field_of_study: "",
      institution_name: "",
      start_date: "",
      end_date: "",
      isCurrent: false,
      description: "",
    };
    setComponents([...components, newComponent]);
    setEducationData(components);
  };

  const modalHandler = (field) => {
    setOpenModal(!openModal);
    setAutoFillField(field);
  };
  const autoFillResponsibilitiesText = (desc, id) => {
    const updatedComponents = components.map((component) => {
      if (component.id === id && autoFillField === "description") {
        return {
          ...component,
          description: desc,
        };
      }
      return component;
    });
    setComponents(updatedComponents);
    setEducationData(components);
  };

  const deleteComponent = (id) => {
    const updatedComponents = components.filter(
      (component) => component.id !== id
    );
    setComponents(updatedComponents);
    setEducationData(components);
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
    setEducationData(updatedComponents);
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
    setEducationData(updatedComponents);
  };


  const handleFileOpen = () => {
    fileInputRef.current.click();

  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
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
                  {component.degree_type} {component.field_of_study}{" "}
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <img src={upload} alt="" style={{ cursor: 'pointer' }} onClick={handleFileOpen} />
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ opacity: 0, position: 'absolute', top: '-9999px', left: '-9999px' }}
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
                        <>
                          <div className="grid justify-start grid-cols-2 gap-6">
                            <div className="mb-4">
                              <Label label="Degree Type" forHtml="degree_type" />
                              <Input
                                name={"degree_type"}
                                componentId={component.id}
                                value={component.degree_type}
                                handleInputChange={handleInputChange}
                              />
                            </div>
                            <div className="mb-4">
                              <Label
                                label="Field of Study"
                                forHtml="field_of_study"
                              />
                              <Input
                                name={"field_of_study"}
                                componentId={component.id}
                                value={component.field_of_study}
                                handleInputChange={handleInputChange}
                              />
                            </div>
                            <div className="mb-4">
                              <Label
                                label="Institution Name"
                                forHtml="institution_name"
                              />
                              <Input
                                name={"institution_name"}
                                componentId={component.id}
                                value={component.institution_name}
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
                                    placeholder="23-01"
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
                                    placeholder="10-03"
                                    maxLength={5}
                                    name="end_date"
                                    value={component.end_date}
                                    onChange={(event) =>
                                      handleInputChange(event, component.id)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="flex items-center justify-end mt-6">
                                <label>
                                  <input
                                    className="mr-2 leading-tight"
                                    type="checkbox"
                                    name={"isCurrent"}
                                    value={component.isCurrent}
                                    onChange={(event) =>
                                      handleInputChange(event, component.id)
                                    }
                                  />
                                  <span className="text-sm text-grey">
                                    Current
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 relative">
                            <Label label="Description" forHtml="description" />
                            <ReactQuill
                              theme="snow"
                              className="ql-ReactQuill "
                              value={component.description}
                              onChange={(value) =>
                                handleRichTextChange(value, component.id)
                              }
                            />
                            <button
                              onClick={() => modalHandler("description")}
                              className="bg-[#FAFCFF] px-5 py-3 rounded-sm absolute right-4 bottom-2">
                              + Add Content
                            </button>
                          </div>
                        </>
                      </div>
                      <Modal
                        id={component.id}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        autoFillResponsibilitiesText={
                          autoFillResponsibilitiesText
                        }
                      />
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

export default Education;

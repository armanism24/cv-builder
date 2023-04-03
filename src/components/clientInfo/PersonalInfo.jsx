import React, { useState } from "react";
import Label from "../Label";
import Input from "../Input";
import ReactQuill from "react-quill";
import Modal from "./Modal";

const PersonalInfo = ({ setPersonalInfoData, setPersonalInfoDescription }) => {
  const [openModal, setOpenModal] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [fields, setFields] = useState({
    first_name: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    portfolio: "",
    description: "",
  });
  const modalHandler = (field) => {
    setOpenModal(!openModal);
  };
  const autoFillResponsibilitiesText = (desc) => {
    setPersonalInfoData((prevFields) => ({
      ...prevFields,
      description: desc,
    }));
    
    setFields((prevFields) => ({
      ...prevFields,
      description: desc,
    }));

  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));

    setPersonalInfoData((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  const handleInputChangeDescription = (value) => {
    // const data = { description: value };
    setFields((prevFields) => ({
      ...prevFields,
      description: value,
    }));

    setPersonalInfoData((prevFields) => ({
      ...prevFields,
      description: value,
    }));
  };

  return (
    <div className="shadow-[#E7F0FF] max-w-[1070px] mx-auto shadow-md border border-[#E7F0FF] rounded-lg p-6 ">
      <div className="grid grid-cols-5 justify-center gap-4">
        <div className="overflow-hidden">
          {selectedImage && (
            <div>
              <img
                alt="not found"
                src={URL.createObjectURL(selectedImage)}
                className="rounded-full w-[130px] h-[130px] "
              />
            </div>
          )}
          <input
            type="file"
            name="myImage"
            id="upload-button"
            className="mt-5"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
        <div className="w-full col-span-2">
          <form>
            <div className="grid justify-start grid-cols-2 gap-3">
              <div className="mb-4">
                <div>
                  <Label label="First Name" forHtml="first_name" />
                  <Input
                    name={"first_name"}
                    value={fields.first_name}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <Label label="Last Name" forHtml="last_name" />
                  <Input
                    name={"last_name"}
                    value={fields.last_name}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <Label label="Phone Number" forHtml="phoneNo" />
                  <Input
                    name={"phone"}
                    value={fields.phone}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <Label label="Email Address" forHtml="email" />
                  <Input
                    name={"email"}
                    value={fields.email}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <Label label="Location" forHtml="location" />
                  <Input
                    name={"location"}
                    value={fields.location}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <Label label="Portfolio" forHtml="portfolio" />
                  <Input
                    name={"portfolio"}
                    value={fields.portfolio}
                    handleInputChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-2">
          <div className="mt-6 relative">
            <Label label="Description" forHtml="description" />
            <ReactQuill
              theme="snow"
              className="ql-ReactQuill "
              value={fields.description}
              onChange={handleInputChangeDescription}
            />
            <button
              onClick={() => modalHandler("description")}
              className="bg-[#FAFCFF] px-5 py-3 rounded-sm absolute right-4 bottom-2"
            >
              + Add Content
            </button>
          </div>
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            autoFillResponsibilitiesText={autoFillResponsibilitiesText}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

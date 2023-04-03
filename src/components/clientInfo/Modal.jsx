import Input from "../Input";
import Label from "../Label";
import CloseIcon from "../../assets/images/cross.svg";
import { useState } from "react";
const Modal = ({
  openModal,
  autoFillResponsibilitiesText,
  id,
  setOpenModal,
}) => {
  const [selectedText, setSelectedText] = useState();
  const [selectedTextItem, setSelectedTextItem] = useState([]);
  const selectedTextHandler = (item, index) => {
    setSelectedTextItem((prevCount) => [...prevCount, item]);
    setSelectedText(index);
  };

  const SaveText = () => {
  
    autoFillResponsibilitiesText(selectedTextItem.join(" "), id);
    setOpenModal(!openModal);
    setSelectedText();
  };
  return (
    <div
      className={`fixed  z-50 inset-0 overflow-y-auto ${
        openModal ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity`}
    >
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="flex  items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={`inline-block h-[700px] overflow-y-auto max-h-full  align-bottom bg-[#FFF] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            openModal ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div
            onClick={() => setOpenModal(false)}
            className="w-10 h-10 cursor-pointer flex justify-center items-center absolute -top-3  right-0 rounded-full shadow-xl p-1"
          >
            <img
              src={CloseIcon}
              alt=""
              className="transition-all transform hover:rotate-180"
            />
          </div>
          <div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mb-8">
                <Label label="Target Role" forHtml="targetRole" />
                <Input name={"targetRole"} />
              </div>
              <div className="mt-2">
                {modalData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        index === selectedText
                          ? "border-[#AFAFAF]"
                          : "border-[#0F67FE]"
                      } flex border  modal_wrapper  rounded-md mb-2 cursor-pointer transition-all hover:border-[#AFAFAF]`}
                    >
                      <div
                        className={`${
                          index === selectedText
                            ? "bg-[#AFAFAF]"
                            : "bg-[#0F67FE]"
                        }  w-[100px] add_modal_button text-[#FFF] text-center flex justify-center items-center`}
                      >
                        Add
                      </div>
                      <div
                        className="p-2 text-xs"
                        onClick={() => selectedTextHandler(item, index)}
                      >
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="my-8">
                <Label label="Description" forHtml="description" />
                <textarea
                  value={selectedTextItem}
                  rows={8}
                  className="appearance-none shadow-[#E7F0FF] shadow-md border border-[#E7F0FF] rounded w-full py-2.5  px-3 text-grey text-sm leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-end absolute bottom-10 inset-x-10 sm:mt-6">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-800 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={SaveText}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

const modalData = [
  `A AAAAAA ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna`,
  `B BBBBBB ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna`,
  `C CCCCC ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna`,
  `D DDDDDDDDD ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna`,
];

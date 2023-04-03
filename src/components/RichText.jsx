import React  from "react";
import ReactQuill from "react-quill";
const RichText = ({ richTextValue, setRichTextValue }) => {
  return (
    <ReactQuill
      theme="snow"
      className="ql-ReactQuill "
      value={richTextValue}
      onChange={setRichTextValue}
    />
  );
};

export default RichText;

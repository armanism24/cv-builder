import React from "react";

const Label = ({ label = "Label", forHtml = "Label" }) => {
  return (
    <label className="block mb-2 text-sm text-grey" forHtml={forHtml}>
      {label}
    </label>
  );
};

export default Label;

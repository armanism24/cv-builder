import React, { useRef } from "react";

function Export2Word({ content, filename = "" }) {
  const contentRef = useRef(null);

  const handleClick = () => {
    const preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    const postHtml = "</body></html>";
    const html = preHtml + contentRef.current.innerHTML + postHtml;

    const blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    // Specify link url
    const url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    // Specify file name
    filename = filename ? filename + ".doc" : "document.doc";

    // Create download link element
    const downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <div ref={contentRef}>
        {/* {content} */}
        </div>
      <button onClick={() => handleClick(filename + ".docx")}>Download</button>
    </div>
  );
}

export default Export2Word;

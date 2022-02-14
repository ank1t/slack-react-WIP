import React from "react";
import "./BookmarkPopup.css";

function BookmarkPopup() {
  const eDCOptions = ["Edit", "Delete", "Copy"];

  return (
    <div className="bookmarkPopup">
      <div className="bookmarkPopup__spacer__nounderline"></div>
      {eDCOptions.map((option) => (
        <div className="bookmarkPopup__option" key={option}>
          <span>{option}</span>
        </div>
      ))}
      <div className="bookmarkPopup__spacer__underline"></div>
      <div className="bookmarkPopup__spacer__nounderline"></div>
      <div className="bookmarkPopup__option">
        <span>Create folder</span>
      </div>
      <div className="bookmarkPopup__spacer__nounderline"></div>
    </div>
  );
}

export default BookmarkPopup;

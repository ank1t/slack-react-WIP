import React, { useEffect, useRef, useState } from "react";
import "./Bookmark.css";

function Bookmark({ url, handleRightClick, popupVisible }) {
  const favIconUrl = `${url}/favicon.ico`;
  const openUrl = () => {
    window.open(url, "_blank").focus();
  };

  const handleClick = (event) => {
    if (event.type === "click") {
      openUrl();
    } else if (event.type === "contextmenu") {
      handleRightClick(event, true);
    }
    event.stopPropagation();
  };

  return (
    <div
      className="bookmark tooltip"
      onClick={handleClick}
      onContextMenu={handleClick}
    >
      <img className="bookmarkImg" src={favIconUrl} alt="" />
      <span>{url}</span>
      <span className="tooltiptext">{url}</span>
    </div>
  );
}

export default Bookmark;

import React from "react";
import "./Bookmark.css";

function Bookmark({ url, handleRightClick }) {
  const favIconUrl = `${url}/favicon.ico`;
  const openUrl = () => {
    window.open(url, "_blank").focus();
  };

  const handleClick = (e) => {
    if (e.type === "click") {
      openUrl();
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      handleRightClick(e.pageX, e.pageY);
    }
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

import React, { useEffect, useState } from "react";
import "./Bookmark.css";

function Bookmark({ url }) {
  const favIconUrl = `${url}/favicon.ico`;
  const openUrl = () => {
    window.open(url, "_blank").focus();
  };

  return (
    <div className="bookmark" onClick={openUrl}>
      <img className="bookmarkImg" src={favIconUrl} />
      <span>{url}</span>
    </div>
  );
}

export default Bookmark;

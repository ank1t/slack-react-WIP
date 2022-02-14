import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "../../firebase";
import Bookmark from "../bookmark/Bookmark";
import BookmarkPopup from "../bookmarkPopup/BookmarkPopup";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  const [bookmarkPopupStyle, setBookmarkPopupStyle] = useState({
    display: "none",
  });

  const [bookmarks, setBookmarks] = useState([
    "https://google.com",
    "https://stackoverflow.com/",
    "https://www.facebook.com/",
  ]);

  const handleRightClick = (positionX, positionY) => {
    if (positionX && positionY) {
      setBookmarkPopupStyle({
        display: positionX && positionY ? "block" : "none",
        position: "absolute",
        top: positionY,
        left: positionX,
      });
    }
  };

  const handleClick = () => {
    //   if (e.type === "click") {
    //     // A left click anywhere in the chat window closes the popup.
    //     setPopupCoords([0, 0]);
    //   } else if (e.type === "contextmenu") {
    //     e.preventDefault();
    //     handleRightClick(e.pageX, e.pageY);
    //   }
  };

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapShot) => setRoomDetails(snapShot.data()));
    }
  }, [roomId]);

  return (
    <div className="chat" onClick={handleClick} onContextMenu={handleClick}>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <div className="chat__channel tooltip">
            <h4 className="chat__channelName">
              <strong># {roomDetails.name} </strong>
            </h4>
            <img
              src={require("../../assets/down-chevron.png")}
              className="chat__channelNameImg"
              alt=""
            />
            <span className="tooltiptext">Get channel details</span>
          </div>
          <span className="chat__channelTopicName">Topic name</span>
        </div>
        <div className="chat__headerRight">
          <img
            src={require("../../assets/user.png")}
            className="chat__header_userImg"
            alt=""
          />
          <span>5</span>
        </div>
      </div>
      <div className="chat__subheader">
        {bookmarks.map((bookmark, index) => (
          <div className="chat_addbookmark">
            <Bookmark
              url={bookmark}
              key={index}
              handleRightClick={handleRightClick}
            />
          </div>
        ))}
        <div className="chat_addbookmark">
          <span>+{"  "}Add a bookmark</span>
        </div>
      </div>
      <div style={bookmarkPopupStyle}>
        <BookmarkPopup />
      </div>
    </div>
  );
}

export default Chat;

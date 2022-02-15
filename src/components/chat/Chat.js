import React, { useCallback, useEffect, useState } from "react";
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
  const [popupVisible, setPopupVisible] = useState(false);
  var prevX, prevY;

  const [bookmarks, setBookmarks] = useState([
    "https://google.com",
    "https://stackoverflow.com/",
    "https://www.facebook.com/",
  ]);

  const hideBookmarkContextMenu = () => {
    setBookmarkPopupStyle({
      display: "none",
    });
    setPopupVisible(false);
  };

  /*
    first right click -> show popup, hide tooltip
    second right click at the same place -> show system right menu

    first left click -> closes the context menu.
    left click at the same place where the popup menu is open, does nothing.
  */
  const handleRightClick = useCallback((event, fromBookmark) => {
    console.log(event, fromBookmark);
    if (!fromBookmark) {
      hideBookmarkContextMenu();
    } else if (fromBookmark && !popupVisible) {
      setBookmarkPopupStyle({
        display: "block",
        position: "absolute",
        top: event.pageY,
        left: event.pageX,
      });
      setPopupVisible(true);
      event.preventDefault();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  const handleClick = (e) => {
    hideBookmarkContextMenu();
  };

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapShot) => setRoomDetails(snapShot.data()));
    }
  }, [roomId]);

  return (
    <div className="chat">
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
              popupVisible={popupVisible}
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

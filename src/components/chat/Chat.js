import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "../../firebase";
import Bookmark from "../bookmark/Bookmark";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  const [bookmarks, setBookmarks] = useState([
    "https://google.com",
    "https://stackoverflow.com/",
    "https://www.facebook.com/",
  ]);

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
            />
            <span className="tooltiptext">Get channel details</span>
          </div>
          <span className="chat__channelTopicName">Topic name</span>
        </div>
        <div className="chat__headerRight">
          <img
            src={require("../../assets/user.png")}
            className="chat__header_userImg"
          />
          <span>5</span>
        </div>
      </div>
      <div className="chat__subheader">
        {bookmarks.map((bookmark) => (
          <div className="chat_addbookmark">
            <Bookmark url={bookmark} key={bookmark} />
          </div>
        ))}
        <div className="chat_addbookmark">
          <span>+{"  "}Add a bookmark</span>
        </div>
      </div>
    </div>
  );
}

export default Chat;

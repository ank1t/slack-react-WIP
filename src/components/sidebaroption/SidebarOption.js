import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";

function SidebarOption({ Icon, title, id }) {
  const navigate = useNavigate();
  const selectChannel = () => {
    if (id) {
      navigate(`room/${id}`);
    }
  };
  return (
    <div className="sidebarOption" onClick={selectChannel}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebarOption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;

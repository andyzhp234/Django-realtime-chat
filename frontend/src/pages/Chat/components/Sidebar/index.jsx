import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ toggleOn, selected }) {
  const navigate = useNavigate();
  function handleChangeChannel(e) {
    navigate(`/chat/${e.target.getAttribute("data-key")}`);
  }
  function handleLogOut(e) {
    navigate("/");
  }
  return (
    <div className={`sidebar ${toggleOn}`}>
      <div className="sidebar__top mT45">
        <div
          className={`sidebar__options ${
            selected === "0" ? "sidebar__options--selected" : ""
          }`}
          data-key="0"
          onClick={handleChangeChannel}
        >
          Important Infos
        </div>
        <div
          className={`sidebar__options ${
            selected === "1" ? "sidebar__options--selected" : ""
          }`}
          data-key="1"
          onClick={handleChangeChannel}
        >
          Channel# 1
        </div>
        <div
          className={`sidebar__options ${
            selected === "2" ? "sidebar__options--selected" : ""
          }`}
          data-key="2"
          onClick={handleChangeChannel}
        >
          Channel# 2
        </div>
        <div
          className={`sidebar__options ${
            selected === "3" ? "sidebar__options--selected" : ""
          }`}
          data-key="3"
          onClick={handleChangeChannel}
        >
          Channel# 3
        </div>
        <div
          className={`sidebar__options ${
            selected === "4" ? "sidebar__options--selected" : ""
          }`}
          data-key="4"
          onClick={handleChangeChannel}
        >
          Channel# 4
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__options" onClick={handleLogOut}>
          Log out
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ChatBox from "./components/chatbox";

export default function Chat() {
  let location = useLocation();
  const [selected, setSelected] = React.useState(null);
  const [toggleOn, setToggleOn] = React.useState("off");

  function handleNavToggle(e) {
    if (toggleOn === "on") {
      setToggleOn("off");
    } else {
      setToggleOn("on");
    }
  }

  React.useEffect(() => {
    const pathnameArr = location.pathname.split("/");
    if (pathnameArr.length <= 2) {
      setSelected("0");
    } else {
      setSelected(pathnameArr.pop());
    }
  }, [location]);

  return (
    <div className="chat">
      <button
        className="mobile-nav-toggle"
        type="button"
        onClick={handleNavToggle}
      ></button>
      <Sidebar toggleOn={toggleOn} selected={selected} />
      <Header />
      <ChatBox />
    </div>
  );
}

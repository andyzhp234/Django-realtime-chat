import React from "react";
import fakeMessage from "./fakeMessages";

export default function ChatBox() {
  const myRef = React.useRef(null);

  React.useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, []);

  return (
    <div className="chatbox">
      <div className="chatbox__message-container" ref={myRef}>
        {fakeMessage.map((message, index) => {
          return (
            <div className="chatbox__message" key={index}>
              <div className="m5 wd100 fw700">{message.name}</div>
              <div className="m5 wd100">{message.content}</div>
              <div className="m5 wd100 taEnd">{message.time}</div>
            </div>
          );
        })}
      </div>
      <div className="chatbox__inputBox">
        <input className="input messageInput" />
      </div>
    </div>
  );
}

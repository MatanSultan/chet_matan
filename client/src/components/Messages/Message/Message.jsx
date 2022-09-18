import React from 'react';
import { FaPiedPiperSquare } from 'react-icons/fa';



import './Message.css';


const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd" id="messageContainer" icon={"BsAlarmFill"}>
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer2">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">
                {/* //date of send message */}
             
                {text}
              </p>

             
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;
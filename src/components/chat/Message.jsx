import React from "react";
import { useSelector } from "react-redux";
import styles from "./chat.module.css";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
function Message(props) {
    const profile_id = useSelector((state) => state.contact.profile_id)
    if(props.message.toUserId === profile_id) {
        return <LeftMessage message={props.message} />
    }
    if(props.message.toUserId !== profile_id) {
        return <RightMessage message={props.message} />
    }
  return (
    <div>
      
    </div>
  );
}

export default Message;

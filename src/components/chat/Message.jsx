import React from "react";
import { useSelector } from "react-redux";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";
import CenterMessage from "./CenterMessage";
function Message(props) {
  const profile_id = useSelector((state) => state.contact.profile_id);
  if (props.message.type === "info") {
    return <CenterMessage message={props.message} />;
  }
  if (props.message.toUserId === profile_id) {
    return <LeftMessage message={props.message} />;
  }
  if (props.message.toUserId !== profile_id) {
    return <RightMessage message={props.message} />;
  }
  return <div>{props.message.content}</div>;
}

export default Message;

import React from "react";
import styles from "./chat.module.css";
function RightMessage(props) {
  return (
    <div className={styles["right-message"]}>
      <p>{props.message.content}</p>
    </div>
  );
}

export default RightMessage;

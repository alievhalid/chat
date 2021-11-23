import React from "react";
import styles from "./chat.module.css";
function LeftMessage(props) {
  return (
    <div className={styles["left-message"]}>
      <p>{props.message.content}</p>
    </div>
  );
}

export default LeftMessage;

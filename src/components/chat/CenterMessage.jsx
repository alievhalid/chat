import React from "react";
import styles from "./chat.module.css";
function CenterMessage(props) {
  return (
    <div className={styles["center-message"]}>
      <p>{props.message?.content}</p>
    </div>
  );
}

export default CenterMessage;

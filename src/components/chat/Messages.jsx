import React from "react";
import styles from "./chat.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMessage } from "../../redux/messages";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Message from "./Message"
function Messages() {
  const messages = useSelector((state) => state.message.message);
  const param = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessage(param));
  }, [dispatch, param]);
  return (
    <div className={styles.messages}>
      <div className={styles.message}>
      {messages.map((message, index) => {
        return <Message message={message} key={index} />
      })}
      </div>
      <div className={styles["add-message"]}>
        <img src="https://designlooter.com/images/smiley-svg-18.png" alt="" />
        <img
          src="https://icon-library.com/images/add-image-icon/add-image-icon-28.jpg"
          alt=""
        />
        <div className={styles.sendInput}>
          <input type="text" placeholder="Введите текст сообщения" />
          <div className={styles.send}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/dark-action-bar-2/96/send-512.png"
              alt=""
            />
            {/* <img
            src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/3412773/3412773-1583503740424-2df9a60b9b249.jpg"
            alt=""
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;

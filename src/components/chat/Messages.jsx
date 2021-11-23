import React, { useState } from "react";
import styles from "./chat.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMessage, handleAddMessage } from "../../redux/messages";
import { useParams } from "react-router";
import Message from "./Message";
function Messages() {
  const messages = useSelector((state) => state.message.message);
  const contactId = useSelector((state) => state.contact.contactId);
  const myId = useSelector((state) => state.contact.profile_id);
  const param = useParams().id;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleClick = () => {
    dispatch(handleAddMessage(myId, value, contactId));
    setValue("");
  };
  const messageText = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(loadMessage(param));
  }, [dispatch, param]);
  return (
    <div className={styles.messages}>
      <div id="chat-window" className={styles.message}>
        {messages.map((message, index) => {
          return <Message message={message} key={index} />;
        })}
      </div>
      <div className={styles["add-message"]}>
        <img src="https://designlooter.com/images/smiley-svg-18.png" alt="" />
        <img
          src="https://icon-library.com/images/add-image-icon/add-image-icon-28.jpg"
          alt=""
        />
        <div className={styles.sendInput}>
          <input
            type="text"
            placeholder="Введите текст сообщения"
            value={value}
            onChange={messageText}
          />
          <div className={styles.send} onClick={handleClick}>
            {value.length >= 1 ? (
              <img
                src="https://cdn2.iconfinder.com/data/icons/dark-action-bar-2/96/send-512.png"
                alt=""
                onClick={handleClick}
              />
            ) : (
              <img
                src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/3412773/3412773-1583503740424-2df9a60b9b249.jpg"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { openProfile } from "../../redux/contact";
import { filterMessage } from "../../redux/messages";
import styles from "./chat.module.css";
import Messages from "./Messages";
function Chat() {
  const param = useParams().id;
  const open = useSelector((state) => state.contact.profileOpen);
  const profile = useSelector((state) =>
    state.contact.contact.find((item) => {
      return param === item._id;
    })
  );
  const value = useSelector((state) => state.message.filter);
  const handleFilter = (event) => {
    dispatch(filterMessage(event.target.value));
  };
  const dispatch = useDispatch();
  const handleShow = (id) => {
    dispatch(openProfile(!id));
  };

  return (
    <div className={styles.chat}>
      <div className={styles["chat-header"]}>
        <div className={styles.search}>
          <input type="text" value={value} placeholder="поиск сообщения" onChange={handleFilter} />
        </div>
        <div className={styles["chat-profile"]}>{profile?.fullname}</div>
        <div className={styles["chat-show-profile"]}>
          <img
            src="https://communityevolution.org/wp-content/uploads/2020/02/missing-profile-picture-1.jpg"
            alt=""
            onClick={() => handleShow(!open)}
          />
        </div>
      </div>
      <Messages filter={handleFilter} />
    </div>
  );
}

export default Chat;

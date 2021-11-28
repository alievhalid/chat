import React from "react";
import styles from "./contacts.module.css";
import { NavLink } from "react-router-dom";
import * as dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { setContactId } from "../../redux/contact";
function Contact(props) {
  const dispatch = useDispatch();

  // получаем id по клику на контакт
  const handleContactId = () => {
    dispatch(setContactId(props.contact._id));
  };
  return (
    <div>
      <NavLink to={`/${props.contact._id}`} className="active">
        <div className={styles.contact} onClick={handleContactId}>
          <div className={styles["contact-logo"]}>
            <img
              src="https://intocode.ru/d/react-chat/avatars/no-avatar.jpg"
              alt=""
            />
          </div>
          <div className={styles["contact-name"]}>
            {props.contact.fullname}
            <div className={styles["contact-lastMessage"]}>
              {props.contact?.lastMessage.content}
            </div>
          </div>
          <div className={styles.time}>
            {dayjs(props.contact.lastMessage?.time).format("HH:mm")}
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Contact;

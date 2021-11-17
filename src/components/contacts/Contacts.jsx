import React from "react";
import { useSelector } from "react-redux";
import styles from "./contacts.module.css";
import * as dayjs from "dayjs";
import { NavLink } from "react-router-dom";

function Contacts() {
  const contacts = useSelector((state) => state.contact.contact);
  return (
    <div className={styles.contacts}>
      <div className={styles["contact-inputs"]}>
        <input type="text" placeholder="Введите текст" />
      </div>
      <div className={styles["contact-scrool"]}>
        {contacts.map((contact, index) => {
          return (
              <NavLink to={`/${contact._id}`} className="active" key={index}>
              <div className={styles.contact}>
                <div className={styles["contact-logo"]}>
                  <img
                    src="https://intocode.ru/d/react-chat/avatars/no-avatar.jpg"
                    alt=""
                  />
                </div>
                <div className={styles["contact-name"]}>
                  {contact.fullname}
                  <div className={styles["contact-lastMessage"]}>
                    {contact?.lastMessage.content}
                  </div>
                </div>
                <div className={styles.time}>
                  {dayjs(contact.lastMessage?.time).format("HH:mm")}
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;

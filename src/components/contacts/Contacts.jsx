import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./contacts.module.css";
import * as dayjs from "dayjs";
import { NavLink } from "react-router-dom";
import { setFilterText } from "../../redux/contact";

function Contacts() {
  const contacts = useSelector((state) => state.contact.contact);
  const filter = useSelector((state) => state.contact.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullname.toUpperCase().indexOf(filter.toUpperCase()) > -1
  );
  const handleFilter = (event) => {
    dispatch(setFilterText(event.target.value))
  };
  return (
    <div className={styles.contacts}>
      <div className={styles["contact-inputs"]}>
        <input
          type="text"
          placeholder="Введите текст"
          value={filter}
          onChange={handleFilter}
        />
      </div>
      <div className={styles["contact-scrool"]}>
        {filteredContacts.map((contact, index) => {
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

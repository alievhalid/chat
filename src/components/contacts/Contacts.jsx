import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./contacts.module.css";
import { setFilterText } from "../../redux/contact";
import Contact from "./Contact";

function Contacts() {
  const contacts = useSelector((state) => state.contact.contact);
  const filter = useSelector((state) => state.contact.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullname.toUpperCase().indexOf(filter.toUpperCase()) > -1
  );
  const handleFilter = (event) => {
    dispatch(setFilterText(event.target.value));
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
          return <Contact contact={contact} key={index} />
        })}
      </div>
    </div>
  );
}

export default Contacts;

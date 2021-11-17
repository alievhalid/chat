import React from "react";
import Chat from "../chat/Chat";
import Contacts from "./Contacts";
import styles from "./contacts.module.css";
import { Route, Routes} from "react-router-dom";
function Content() {
  return (
    <div className={styles.content}>
      <Contacts />
      <Routes>
        <Route path={"/:id"} element={<Chat />} />
      </Routes>
    </div>
  );
}

export default Content;

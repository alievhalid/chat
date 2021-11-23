import React from "react";
import Chat from "../chat/Chat";
import Contacts from "./Contacts";
import styles from "./contacts.module.css";
import { Route, Routes } from "react-router-dom";
import Profile from "../profile/Profile";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
function Content() {
  const open = useSelector((state) => state.contact.profileOpen);
  return (
    <div className={styles.content}>
      <Contacts />
      <Routes>
        <Route path={"/:id"} element={<Chat />} />
      </Routes>
      <CSSTransition in={open} timeout={1000} unmountOnExit className="my-node">
        <Routes>
          <Route path={"/:id"} element={<Profile />} />
        </Routes>
      </CSSTransition>
    </div>
  );
}

export default Content;

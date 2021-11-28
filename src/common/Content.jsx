import React from "react";
import Chat from "../components/chat/Chat";
import Contacts from "../components/contacts/Contacts";
import styles from "../components/contacts/contacts.module.css"
import { Route, Routes } from "react-router-dom";
import Profile from "../components/profile/Profile";
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
      {/* анимация открытия/закрытия профиля */}
      <CSSTransition in={open} timeout={1000} unmountOnExit className="my-node">
        <Routes>
          <Route path={"/:id"} element={<Profile />} />
        </Routes>
      </CSSTransition>
    </div>
  );
}
export default Content;

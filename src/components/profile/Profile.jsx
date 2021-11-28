import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./profile.module.css";
function Profile() {
  const param = useParams().id;
  const profile = useSelector((state) =>

  // определяем какой контакт сейчас открыт
    state.contact.contact.find((item) => {
      return param === item._id;
    })
  );
  return (
    <div className={styles.profile}>
      <div className={styles["profile-logo"]}>
        <img
          src="https://intocode.ru/d/react-chat/avatars/no-avatar.jpg"
          alt=""
        />
      </div>
      <div className={styles["profile-name"]}>{profile?.fullname}</div>
      <div className={styles["profile-email"]}>@{profile?.username}</div>
      <div className={styles.social}>
        {profile?.socials ? Object.keys(profile?.socials).map((social, index) => {
          return (
            <div key={index}>
              <i className={`fa fa-${social}`} aria-hidden="true"></i>{social}
            </div>
          )
        }): 'пользователь скрыл данные'}
      </div>
    </div>
  );
}

export default Profile;

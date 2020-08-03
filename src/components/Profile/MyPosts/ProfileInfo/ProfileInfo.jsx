import React from "react";
import s from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.contentImg}>
        <img src="https://i.stack.imgur.com/jGlzr.png" />
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
    </div>
  );
};
export default ProfileInfo;

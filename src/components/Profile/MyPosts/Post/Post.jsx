import React from "react";
import s from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={s.profileItem}>
      <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png" />
      <div>
        <h5>{props.message}</h5>
        <span>Likes: {props.likesCount}</span>
      </div>
    </div>
  );
};
export default Post;

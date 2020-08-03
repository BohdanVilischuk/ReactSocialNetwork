import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </main>
  );
};

export default Profile;

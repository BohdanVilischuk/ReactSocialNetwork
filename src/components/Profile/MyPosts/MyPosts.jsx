import React from "react";
import myPostsClasses from "./MyPosts.module.scss";
import Post from "./Post/Post";
import s from "./MyPosts.module.scss";

const MyPosts = (props) => {
 
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();  

  let onAddPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text)
    newPostElement.current.value = ' ';
  };

  return (
    <div className={s.postsBLock}>
      <h3>My posts</h3>

      <div>
        <div>
          <div>
            <textarea ref={newPostElement} ></textarea>
          </div>
          <div>
            <button onClick={onAddPost} > Add new post</button>
          </div>
        </div>

        <h4>New posts</h4>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

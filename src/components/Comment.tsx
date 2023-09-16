import { useState } from "react";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface Author {
  name: string;
  role: string;
  avatarURL: string;
}

interface PostComment {
  id: string;
  author: Author;
  content: string;
  likes: number;
  onDeleteComment: (commentId: string) => void;
}

export function Comment(props: PostComment) {
  const { id, author, content, likes, onDeleteComment } = props;
  const { name, avatarURL } = author;

  const [likeCounter, setLikeConter] = useState(likes);

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleNewLike() {
    setLikeConter((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={avatarURL} alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{name}</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="2022-05-11 08:13:00"
              ></time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewLike}>
            <ThumbsUp />
            Like
            <span>{likeCounter}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
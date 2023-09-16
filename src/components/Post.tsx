import { useState, FormEvent, ChangeEvent } from "react";

import { format, formatDistanceToNow } from "date-fns";

import { ProfileInfo } from "./ProfileInfo";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";

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
  onDeleteComment?: (commentId: string) => void;
}

interface PostProps {
  author:  Author;
  content: string;
  publishedAt: Date;
  comments: PostComment[];
}

export function Post(props: PostProps) {
  const { author, content, publishedAt, comments } = props;

  const dateFormatted = format(new Date(publishedAt), "PPpp");
  const dateDistanteToNow = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
    includeSeconds: true,
  });

  const [commentList, setCommentList] = useState<PostComment[]>(comments);
  const [newComment, setNewComment] = useState("");

  function handleCreateNewComment(event: FormEvent, commentContent: string) {
    event.preventDefault();

    const commentToBeAdded: PostComment = {
      id: "teste",
      author: {
        name: "Roger Oliveira",
        role: "None",
        avatarURL: "https://github.com/rogerpoliver.png",
      },
      content: commentContent,
      likes: 0,
    };

    setCommentList((prevState) => [...prevState, commentToBeAdded]);
    setNewComment("");
  }

  function handleTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value);
  }

  function deleteComment(commentId: string) {
    setCommentList(commentList.filter((comment) => comment.id !== commentId));
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} style={styles.avatar} />
          <div className={styles.authorInfo}>
            <ProfileInfo name={author.name} role={author.role} />
          </div>
        </div>

        <time
          title={dateFormatted}
          dateTime={new Date(publishedAt).toISOString()}
        >
          {dateDistanteToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>{content}</p>
      </div>

      <form
        onSubmit={(e) => handleCreateNewComment(e, newComment)}
        className={styles.commentForm}
      >
        <strong>Give your feedback</strong>

        <textarea
          value={newComment}
          onChange={(e) => handleTextChange(e)}
          placeholder="What do you think about that?"
        />

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {commentList.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              author={comment.author}
              content={comment.content}
              likes={comment.likes}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
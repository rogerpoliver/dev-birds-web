import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import { ProfileInfo } from "./ProfileInfo";
import styles from "./Sidebar.module.css";
import data from "../../data/posts.json";

export function Sidebar() {
  const profileData = data[0];
  const { author } = profileData
  const role = 'Software Developer'
  
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src={author.avatarURL} style={styles.avatar} alt="" />
        <ProfileInfo name={author.name} role={role} />
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}

import styles from "./User.module.css";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const { name, email, password, avatar } = FAKE_USER;
  return (
    <div className={styles.user}>
      <img src={avatar} alt={name}></img>
      <span>Welcome, {name}</span>
      <button>Logout</button>
    </div>
  );
}

export default User;

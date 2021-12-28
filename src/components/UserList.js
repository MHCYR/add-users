import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles.users}>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};
export default UserList;

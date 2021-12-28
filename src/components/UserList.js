import styles from "./UserList.module.css";

const UserList = (props) => {
  function deleteUserHandler(event) {
    const userId = Number(event.target.id);
    props.onDelete(userId);
  }

  return (
    <ul className={styles.users}>
      {props.users.map((user) => (
        <li key={user.id} onClick={deleteUserHandler} id={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};
export default UserList;

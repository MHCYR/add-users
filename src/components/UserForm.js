import { useState } from "react";
import Button from "./UI/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) return;
    const user = {
      name: name,
      age: age,
      id: Math.random(),
    };
    props.onAddUser(user);
    setName("");
    setAge("");
  }
  function changeNameHandler(event) {
    setName(event.target.value);
  }
  function changeAgeHandler(event) {
    setAge(event.target.value);
  }
  return (
    <form onSubmit={submitHandler} className={styles["add-user"]}>
      <div className={styles["add-user__control"]}>
        <label>Name</label>
        <input type="text" value={name} onChange={changeNameHandler} />
      </div>
      <div className={styles["add-user__control"]}>
        <label>Age (years)</label>
        <input type="number" value={age} onChange={changeAgeHandler} />
      </div>
      <div className={styles["add-user__actions"]}>
        <Button type="submit">Add user</Button>
      </div>
    </form>
  );
};

export default UserForm;

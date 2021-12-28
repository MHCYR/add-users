import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const dummyUsers = [
  { name: "John Doe", age: 12, id: 1 },
  { name: "Jane Doe", age: 34, id: 2 },
];

function App() {
  const [users, setUsers] = useState(dummyUsers);

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  }

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;

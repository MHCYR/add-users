import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Modal from "./components/UI/Modal";

import "./App.css";

const dummyUsers = [
  { name: "John Doe", age: 12, id: 1 },
  { name: "Jane Doe", age: 34, id: 2 },
];

function App() {
  const [users, setUsers] = useState(dummyUsers);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("default content");

  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  }
  function deleteUserHandler(id) {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  }
  function closeModalHandler() {
    setShowModal(false);
  }
  function errorHandler(error) {
    setShowModal(true);
    setModalContent(error);
  }
  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} onError={errorHandler} />
      <UserList users={users} onDelete={deleteUserHandler} />

      {showModal && (
        <Modal
          title="Invalid input"
          content={modalContent}
          onClose={closeModalHandler}
        />
      )}
    </div>
  );
}

export default App;

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const dummyUsers = [
  { name: "John Doe", age: 12 },
  { name: "Jane Doe", age: 34 },
];

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList users={dummyUsers} />
    </div>
  );
}

export default App;

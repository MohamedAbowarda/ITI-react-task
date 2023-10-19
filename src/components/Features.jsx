import { useState } from "react";
import UserInfo from "./UserInfo";
function Features() {
  // state
  const [users, setUsers] = useState([
    { id: 1, name: "Mohamed", age: 30 },
    { id: 2, name: "Abowarda", age: 31 },
  ]);

  // handler to set state
  const saveHandler = () => {
    ///x1
    setUsers([...users, { id: 5, name: "Ali", age: 45 }]);
  };

  // delete callback
  const deleteHandler = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //loop for components
  const userList = users.map((user) => (
    <UserInfo
      id={user.id}
      name={user.name}
      age={user.age}
      key={user.id}
      delete={deleteHandler}
    />
  ));

  return (
    <div>
      <button type="button" onClick={saveHandler}>
        Insert
      </button>
      {userList}
    </div>
  );
};


export default Features;

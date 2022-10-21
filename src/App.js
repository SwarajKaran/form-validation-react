import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (newUser) => {
    setUsersList((prev) => {
      return [newUser, ...prev];
    });
  };
  return (
    // <>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </>

    // if <> </> diesn't work use React.Fragment or import Fragment from react and use as below
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;

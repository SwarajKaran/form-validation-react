import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0)
      return;
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser({
      id: Math.random() * 100,
      name: enteredUsername,
      age: enteredAge,
    });
    setEnteredUsername('');
    setEnteredAge('');
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(enteredAge);
  };
  return (
    <div>
      <ErrorModal title="An Error occured" message="Something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

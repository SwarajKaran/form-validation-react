import React, { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUserAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and/or age (non empty values)',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid age (>0)',
      });
      return;
    }
    props.onAddUser({
      id: Math.random() * 100,
      name: enteredName,
      age: enteredUserAge,
    });
    // setEnteredUsername('');
    // setEnteredAge('');
    // use below very rarely
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  //   console.log(enteredUsername);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  //   console.log(enteredAge);
  // };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onClick={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="text"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

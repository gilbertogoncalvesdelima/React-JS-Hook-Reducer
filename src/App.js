// useReduce
import React, { useReducer } from 'react';

const App = () => {
  const initialState = {
    name: '',
    isValid: false,
  };

  const [nameState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          name: action.value,
          isValid: action.value.length >= 3 ? true : false,
        };
      case 'SUBMIT':
        return {
          ...initialState,
        };
      default:
        return state;
    }
  }, initialState);

  // This function is triggered when the user types something
  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
    });
  };

  // This function is trigger when the user clicks the "submit" button
  const submitHandler = (event) => {
    event.preventDefault();
    alert(nameState.value);
    dispatch({
      type: 'SUBMIT'
    })
  };

  return (
    <form style={styles.container}>
      <input
        type="text"
        value={nameState.name}
        onChange={changeHandler}
        style={styles.input}
      />
      <button disabled={!nameState.isValid} onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default App;

const styles = {
  container: {
    padding: 50,
  },
};


/* Código para useState

import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  // This function is triggered when the user types something
  const changeHandler = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
    if (enteredName.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  // This function is trigger when the user clicks the "submit" button
  const submitHandler = (event) => {
    event.preventDefault();
    alert(name);
    setName('');
    setIsValid(false)
  };

  return (
    <form style={styles.container}>
      <input
        type="text"
        value={name}
        onChange={changeHandler}
        style={styles.input}
      />
      <button disabled={!isValid} onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default App;

const styles = {
  container: {
    padding: 50,
  },
};
*/
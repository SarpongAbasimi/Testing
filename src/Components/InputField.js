import React from 'react';

export const Input = ({ onUserInput, userInput, onHandleChange, onClear }) => {
  const theUserInput = React.createRef()
  const getUserInput = (e) => {
    e.preventDefault()
    console.log('Inputing userInput')
    onUserInput(theUserInput.current.value)
    onClear()
  };

  const handleInputChange = (e) => {
    onHandleChange(e.target.value)
  };

  return(
    <div>
      <form onSubmit={getUserInput}>
        <input onChange={handleInputChange} value={userInput} name='textField' type='text' placeholder='Add item' ref={theUserInput}></input>
        <input type='submit' value='Add item'></input>
      </form>
    </div>
  );
};
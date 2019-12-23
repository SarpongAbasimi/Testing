import React from 'react';
import { useState } from 'react';
import { Input } from './Components/InputField'; 
import { Card } from './Components/Card';

function App() {

  const [initialUserInput, setInitialUserInput] = useState("");
  const [toDoList, setToDoList] = useState([])

  const handleUserInput = (userInput) => {
    setToDoList(toDoList.concat(userInput))
  };

  const handleIntialInputChange = (inputChange) => {
    setInitialUserInput(inputChange)
  };

  const handleClearInputField = () => {
    setInitialUserInput(" ")
  };

  const handleDeleteFromToDos = (index) => {
    setToDoList(toDoList.filter((e, indexes ) => index !== indexes ))
  };

  const onHandleUserChange = (e) =>{
    setInitialUserInput(e.target.value)
  };

  const testSubmit = (e) => {
    e.preventDefault();
    setToDoList(toDoList.concat(e.target.textField.value));
    console.log(e.target.textField.value)
  };

  return (
    <div className="App">
     {/* < Input onClear={handleClearInputField} onUserInput={ handleUserInput } userInput={initialUserInput} onHandleChange={handleIntialInputChange}/>
     <Card userToDos={toDoList} onDelete={handleDeleteFromToDos}/> */}
     <form onSubmit={testSubmit}>
       <input type='text' name='textField' value={initialUserInput} onChange={onHandleUserChange}></input>
       <input type='submit' name='submitField'></input>
     </form>
    </div>
  );
}

export default App;

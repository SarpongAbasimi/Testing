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

  return (
    <div className="App">
     < Input onClear={handleClearInputField} onUserInput={ handleUserInput } userInput={initialUserInput} onHandleChange={handleIntialInputChange}/>
     <Card userToDos={toDoList} onDelete={handleDeleteFromToDos}/>
    </div>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import { Input } from './Components/InputField'; 

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

  return (
    <div className="App">
     < Input onClear={handleClearInputField} onUserInput={ handleUserInput } userInput={initialUserInput} onHandleChange={handleIntialInputChange}/>
    </div>
  );
}

export default App;

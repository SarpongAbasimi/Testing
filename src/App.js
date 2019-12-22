import React from 'react';
import { useState } from 'react';
import { Input } from './Components/InputField'; 
import { Card } from './Components/Card';
import { Delete } from './Components/Delete'
function App() {

  const [initialUserInput, setInitialUserInput] = useState("");
  const [toDoList, setToDoList] = useState([])

  const handleUserInput = (userInput) => {
    console.log(`The user typed ${userInput}`)
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
     <Card  render={() => (
       {
        userToDos: toDoList,
        DeleteButton:  Delete 
       }
     )} />
    </div>
  );
}

export default App;

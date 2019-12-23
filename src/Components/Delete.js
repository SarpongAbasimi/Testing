import React from 'react'

export const Delete = ({ currentIndex, onDeleteFunction }) => {
  const callIndex = () => {
    onDeleteFunction(currentIndex)
  };

  return(
    <div>
      <button onClick={callIndex}>Delete</button>
    </div>  
  );
};
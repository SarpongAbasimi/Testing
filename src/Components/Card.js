import React from 'react';

export const Card = ({ render }) => {
  const { userToDos, DeleteButton} = render();
  return(
    <div>
     {userToDos.length >= 1 && userToDos.map((elements, index) => 
       <ul key={index}>
         <li style={{ display : 'flex' }}>
          {elements} <span style={{ marginLeft: '5px'}}> <DeleteButton /></span>
         </li>
       </ul>
     )}
    </div>
  )
};
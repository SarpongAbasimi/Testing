import React from 'react';
import { Delete } from './Delete';

export const Card = ({ userToDos, onDelete }) => {
  return(
    <div>
     {userToDos.length >= 1 && userToDos.map((elements, index) => 
       <ul key={index}>
         <li style={{ display : 'flex' }}>
          {elements} 
          <span style={{ marginLeft: '5px'}}> < Delete currentIndex={index} onDeleteFunction={onDelete}/></span>
         </li>
       </ul>
     )}
    </div>
  )
};
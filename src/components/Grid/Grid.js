import React from 'react';
import './Grid.css';
import Field from '../Field/Field';

const Grid = (props) => {
  let fields = generateFieldsFromGameState(props.gameState,props.size);

  return (
    <div className="gridwrapper">
      <div className={"grid grid-"+props.size}>
        {fields}
      </div>
    </div>
  );
}


function generateFieldsFromGameState(gameState,size){
  let fields = [];

  for(let i=0;i<gameState.rows.length;i++){
    let row = [];
    for(let j=0;j<gameState.rows[i].length;j++){
      let key = +gameState.rows[i][j].id;
      let color = gameState.rows[i][j].color;
      row.push((<Field keyNum={key} color={color} size={size} />));
    }
    fields.push(row);
  }
  return fields;
}
export default Grid;
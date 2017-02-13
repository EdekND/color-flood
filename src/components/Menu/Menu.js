import React from 'react';
import './Menu.css';
import Picker from '../Picker/Picker';

const Menu = (props) => {
 	let pickers = props.colors.map((v)=>{
 		return (<Picker key={"picker-"+v} color={v} onClick={onPickerClick} />);
 	});
 	function onPickerClick(color){
 		props.onPickerClick(color);
 	}
  return (
    <div className="menu" >
      {pickers}
      <p>Moves: {props.moves}</p>
    </div>
  );
}



export default Menu;
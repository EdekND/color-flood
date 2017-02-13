import React from 'react';
import './Picker.css';

const Picker = (props) => {
	let cls = "picker "+props.color;
  	function onClick(){
  		props.onClick(props.color);
  	}
  	
  return (

    <div onClick={onClick} className={cls} >

    </div>
  );
}

export default Picker;
import React from 'react';
import './SizePicker.css';

const SizePicker = (props) => {
  	function onClick(){
  		props.onClick(props.size);
  	}
  return (
    <div className="sizePicker" onClick={onClick}><p>{props.size}</p></div>
  );
}

export default SizePicker;
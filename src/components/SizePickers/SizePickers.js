import React from 'react';
import './SizePickers.css';
import SizePicker from '../SizePicker/SizePicker';

const SizePickers = (props) => {
	function onClick(size){
		props.onClick(size);
	}
	let sizePickers = props.sizes.map((v,i)=>{
		return (<SizePicker className="sizePicker" size={v} onClick={onClick} />)
	});	
  return (
    <div className="sizePickers" >
    {sizePickers}
    </div>
  );
}

export default SizePickers;
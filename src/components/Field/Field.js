import React from 'react';
import './Field.css';

const Field = (props) => {

  return (
    <div key={"field-"+props.keyNum} className={"field "+props.color+" field-"+props.size}>
        </div>
  );
}

export default Field;
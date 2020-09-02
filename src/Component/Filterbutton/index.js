import React from 'react';
import "./style.css";

const FilterButton = (props) => {
    return (
    <button className={`basicButtonStyle ${props.className ? props.className: ''}`} onClick={props.click} type={props.type}>{props.btnText}</button>
    );
};

export default FilterButton;
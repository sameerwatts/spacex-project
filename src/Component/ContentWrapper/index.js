import React from 'react';
import "./style.css";

const ContentWrapper = (props) => {
    return (
        <div className={`contentWrapper ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
};

export default ContentWrapper;
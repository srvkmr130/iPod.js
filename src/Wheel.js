import React from 'react';


const Wheel = (props) => {

    return(
        <div id = "wheel-container">
            <button id = "inner-area" onClick = {props.handleOnItemSelection}></button>
            <button id = "menu-btn" onClick = {props.handleMenuButtonClick}><i className="fas fa-bars"></i></button>
            <button id = "left-btn" onClick = {props.handlePreviousButtonClick}><i className="fas fa-backward"></i></button>
            <button id= "right-btn"><i className="fas fa-forward"></i></button>
            <button id= "pause-btn"><i className="fas fa-pause"></i></button>
        </div>
    );
}

export default Wheel;


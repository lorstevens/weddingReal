import React from 'react'



export const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


export const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


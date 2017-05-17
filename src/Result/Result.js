import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {     MorphIcon,
    HoverMorphIcon,
    MorphingIcon,
    CloseButton,
    NavButton,
    PlusButton, } from 'react-svg-buttons';

class Result extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.end_message}</h3>
        <p>Your score was: {this.props.score}</p>
        <HoverMorphIcon baseType= {<MorphingIcon
    type="fwd"
    size={120}
    thickness={7}
    color="#dd6e78"
/>} hoverType= "crossSparks" onClick={()=> this.props.reset()} />
      </div>
    );
  }
}

Result.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired
}

Result.defaultProps = {
  end_message: 'CONGRATULATIONS!!'
}

export default Result;

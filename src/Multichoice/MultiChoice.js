import React, { Component } from 'react';
import './MultiChoice.css'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import {     MorphIcon,
    HoverMorphIcon,
    MorphingIcon,
    CloseButton,
    NavButton,
    PlusButton, } from 'react-svg-buttons';

class MultiChoice extends Component {
  render(){
    return (
      <div className="text-center">
        {this.props.answers.map((answer, i) =>
          <Button  className="margin-left" key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</Button>)
        }
        <br/>
        <br/>
        <p>You have selected: {this.props.selectedAnswer}</p>
          <HoverMorphIcon baseType="fwd" className = "white" hoverType="check" onClick={() =>this.props.handleSubmit()}/>
      </div>
    )
  }
}

MultiChoice.propTypes = {
  answers : PropTypes.array.isRequired,
  updateSelected : PropTypes.func,
  handleSubmit: PropTypes.func,
  selectedAnswer : PropTypes.string
}



export default MultiChoice;

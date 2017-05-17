import React, { Component } from 'react';
var PacmanProgress = require('react-pacman-progress');
import PropTypes from 'prop-types';

//stateless component

const ProgressBar = ({current_step, question_length}) => {
  return (
      <PacmanProgress items={question_length} currentIndex={current_step-2} onClick={() => {}} />
    )
}

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired
}

export default ProgressBar;

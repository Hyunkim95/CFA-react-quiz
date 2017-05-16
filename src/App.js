import React, { Component } from 'react';
import './App.css';
import Question from './Question';
import ProgressBar from './ProgressBar';
import MultiChoice from './MultiChoice';

class App extends Component {
  //initialize this app
  constructor(props){
    super(props);
    this.state = {
      progress:0,
      selected: 'None yet!',
      score: 0
    };
    this.updateSelected = this.updateSelected.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.quiz_data = [
      {
        question: 'What is the meaning of life?',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'Javascript', '42']
      },
      {
        question: 'What is the meaning of pie?',
        correct_answer: '52',
        possible_answers: ['glove', 'Honey', 'Lava', '52']
      }
    ]
  }

  updateSelected(answer){
    this.setState({
      selected: answer
    })
  }

  submitAnswer(){
    if(this.state.selected === this.quiz_data[this.state.progress].correct_answer){
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'Not yet!'
      })
    }
  }

  render() {
    return (
        <div >
          <h2>Quiz App</h2>
          <Question current_question={this.quiz_data[this.state.progress].question}/>
          <ProgressBar current_step={this.state.progress + 1}
            question_length ={this.quiz_data.length}/>
          <MultiChoice answers ={this.quiz_data[this.state.progress].possible_answers}
          updateSelected={this.updateSelected}
          handleSubmit = {this.submitAnswer}
          selectedAnswer = {this.state.selected}
        />
        </div>
    );
  }
}

export default App;

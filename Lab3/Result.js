import React, { Component } from 'react';

class Result extends Component {
  render() {
    const { score, total } = this.props;

    return (
      <div>
        <h2>Quiz Ended</h2>
        <p>Your Score: {score} / {total}</p>
      </div>
    );
  }
}

export default Result;
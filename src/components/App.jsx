import React from 'react';
/* import shortid from 'shortid'; */
import 'components/Feedback/feedback.css';
import Section from 'components/Feedback/Section';
import Statistics from 'components/Feedback/Statistics';
import Notification from 'components/Feedback/Notoficaion';

import FeedbackOptions from 'components/Feedback/FeedbackOptions';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // hendelGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };
  // hendelNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // hendelBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  handleClickButton = e => {
    const option = e.target.name;

    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };
  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  totalPositivFeedback = () => {
    return Math.round((this.state.good / this.totalFeedback()) * 100);
  };
  render() {
    const total = this.totalFeedback();
    const positiv = this.totalPositivFeedback();
    const options = Object.keys(this.state);

    return (
      <div className="Feedback">
        <Section title="Please leave feedback!">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>
        {/* <button type="button" onClick={this.hendelGood}>
          Good
        </button>
        <button type="button" onClick={this.hendelNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.hendelBad}>
          Bad
        </button> */}

        <Section title="Statistics">
          {total < 1 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiv={positiv}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;

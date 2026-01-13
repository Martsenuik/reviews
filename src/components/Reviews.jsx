import React from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";

export class Reviews extends React.Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  onNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }

    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const options = ["good", "neutral", "bad"];

    return (
      <>
        <FeedbackOptions
          onGood={this.onGood}
          onNeutral={this.onNeutral}
          onBad={this.onBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

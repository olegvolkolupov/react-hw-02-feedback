import React, { Component } from "react";

import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

import "./global.css";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // категории
  options = ["good", "neutral", "bad"];
  // общее количество собранных отзывов
  total = 0;

  componentDidMount = () => {
    document.title = "react_hw_02_feedback";
  };

  // сбор статистики
  handleStatistic = (event) => {
    this.total += 1;
    let item = event.target.name;
    this.setState({
      [item]: this.state[item] + 1,
    });
  };

  render() {
    let { good, neutral, bad } = this.state;
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.handleStatistic}
          />
        </Section>
        <Section title="Statistics">
          {this.total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total}
            />
          )}
        </Section>
      </div>
    );
  }
}

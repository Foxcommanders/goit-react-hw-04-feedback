import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import React, { useState } from 'react';

const App = () => {
  const [states, setStates] = useState({good: 0, neutral: 0, bad: 0});

  const onLeaveFeedback = option => {
    setStates(prevState => { return { ...prevState, [option]: prevState[option] + 1}})}
  

 const countTotalFeedback = () => {
    return states.good + states.neutral + states.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (100 / (states.good + states.neutral + states.bad)) *
        states.good
    );
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(states)}
        handlerFeedback={onLeaveFeedback}
      ></FeedbackOptions>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Statistics
          good={states.good}
          neutral={states.neutral}
          bad={states.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      )}
    </Section>
  )}

  export default App;
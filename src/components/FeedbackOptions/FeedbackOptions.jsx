import { StyledFeedbackOptions } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handlerFeedback }) => {
  return (
    <StyledFeedbackOptions>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            className={option}
            onClick={() => handlerFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </StyledFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlerFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

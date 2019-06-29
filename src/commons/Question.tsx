import * as React from 'react';
import Tooltip from 'rc-tooltip';

declare namespace Question {
  interface Props {
    tip: string;
    className?: string;
  }
}

const Question: React.FC<Question.Props> = ({ tip, className = '' }) => {
  return (
    <Tooltip placement="top" overlay={tip}>
      <i className={`icon Question ${className}`}>&#xe691;</i>
    </Tooltip>
  )
};

export default Question;

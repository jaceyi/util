import * as React from 'react';
import Tooltip from 'rc-tooltip';

declare namespace Question {
  interface Props {
    tip: string;
  }
}

const Question: React.FC<Question.Props> = ({ tip }) => {
  return (
    <Tooltip placement="top" overlay={tip}>
      <i className="icon Question">&#xe691;</i>
    </Tooltip>
  )
};

export default Question;

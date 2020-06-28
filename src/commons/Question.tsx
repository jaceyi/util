import * as React from 'react';
import Tooltip from 'rc-tooltip';
import Icon from '@/commons/Icon';

declare namespace Question {
  interface Props {
    tip: string;
    className?: string;
  }
}

const Question = ({ tip, className = '' }: Question.Props) => {
  return (
    <Tooltip placement="top" overlay={tip}>
      <Icon className={`question ${className}`} icon="&#xe691;" />
    </Tooltip>
  );
};

export default Question;

import * as React from 'react';
import { useRef, Fragment, useState } from 'react';
import Tooltip from 'rc-tooltip';
import Icon from '@/commons/Icon';

declare namespace Copy {
  interface Props {
    children: React.ReactNode;
  }
}

const Copy = ({ children }: Copy.Props) => {
  const contentRef = useRef();
  const [text, setText] = useState('Copy');

  const handleClick = () => {
    if (contentRef.current) {
      const sel = window.getSelection();
      sel.selectAllChildren(contentRef.current);
      document.execCommand('Copy');
      sel.removeAllRanges();
      setText('Copy success！');
    }
  };

  return (
    <Fragment>
      <span ref={contentRef}>{children}</span>
      <Tooltip
        placement="top"
        overlay={text}
        onVisibleChange={(visible) => !visible && setText('Copy')}
      >
        <Icon
          title="Copy"
          className="icon copy"
          icon="&#xe6e9;"
          onClick={handleClick}
        />
      </Tooltip>
    </Fragment>
  );
};

export default Copy;

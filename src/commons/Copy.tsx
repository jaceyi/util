import * as React from 'react';
import { useRef, Fragment, useState } from 'react';
import Tooltip from 'rc-tooltip';

declare namespace Copy {
  interface Props {
    children: React.ReactNode;
  }
}

const Copy: React.FC<Copy.Props> = ({ children }: Copy.Props) => {
  const contentRef = useRef();
  const [text, setText] = useState('Copy');

  function handleClick() {
    if (contentRef.current) {
      const sel = window.getSelection();
      sel.selectAllChildren(contentRef.current);
      document.execCommand('Copy');
      sel.removeAllRanges();
      setText('Copy success！');
    }
  }

  return (
    <Fragment>
      <span ref={contentRef}>{children}</span>
      <Tooltip
        placement="top"
        overlay={text}
        onVisibleChange={visible => !visible && setText('Copy')}
      >
        <i
          onClick={handleClick}
          title="Copy"
          className="icon Copy_icon"
        >&#xe6e9;</i>
      </Tooltip>
    </Fragment>
  );
};

export default Copy;

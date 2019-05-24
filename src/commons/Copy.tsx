import * as React from 'react';
import { useRef, Fragment, useState } from 'react';
import Tooltip from 'rc-tooltip';

interface Props {
  children: React.ReactNode;
}

const Copy: React.FC<Props> = ({ children }) => {
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
      <span>
        <span ref={contentRef}>{children}</span>
        <Tooltip
          placement="top"
          overlay={text}
          onVisibleChange={visible => !visible && setText('Copy')}
        >
          <i
            onClick={handleClick}
            title="Copy"
            className="icon copy_icon"
          >&#xe6e9;</i>
        </Tooltip>
      </span>
    </Fragment>
  );
};

export default Copy;

import * as React from 'react';
import { useRef, Fragment } from 'react';
import Tooltip from 'rc-tooltip';

interface Props {
  children: React.ReactNode;
  hideText?: boolean;
}

const Copy: React.FC<Props> = ({ children, hideText }) => {
  const contentRef = useRef();

  function handleClick() {
    if (contentRef.current) {
      const sel = window.getSelection();
      sel.selectAllChildren(contentRef.current);
      document.execCommand('Copy');
      sel.removeAllRanges();
    }
  }

  let style = {};
  if (hideText) {
    style = {
      position: 'fixed',
      left: -100,
      top: -100
    }
  }

  return (
    <Fragment>
      <span>
        <span style={style} ref={contentRef}>{children}</span>
        <Tooltip placement="top" overlay="Copy">
          <i
            onClick={handleClick}
            title="Copy"
            className="icon copy_icon"
          >&#xe6e9;</i>
        </Tooltip>
      </span>
    </Fragment>
  )
};

export default Copy;

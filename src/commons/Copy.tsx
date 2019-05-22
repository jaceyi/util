import * as React from 'react';
import { Fragment, useRef } from 'react';

interface Props {
  children: React.ReactNode;

}

const Copy: React.FC<Props> = ({ children }) => {
  const contentRef = useRef();

  function handleClick() {
    if (contentRef.current) {
      const sel = window.getSelection();
      sel.selectAllChildren(contentRef.current);
      document.execCommand('Copy');
      sel.removeAllRanges();
    }
  }

  return (
    <Fragment>
      <span ref={contentRef}>{children}</span>
      <i
        onClick={handleClick}
        title="Copy"
        className="icon copy_icon">&#xe6e9;</i>
    </Fragment>
  )
};

export default Copy;
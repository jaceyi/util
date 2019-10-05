import './Transform.scss';
import * as React from 'react';
import { useState, useEffect, Fragment } from 'react';
import Copy from '@/commons/Copy';
import Question from '@/commons/Question';

function Transform() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    document.addEventListener('paste', bindPaste);
    return () => {
      document.removeEventListener('paste', bindPaste);
    };
  }, []);

  function bindPaste(e) {
    const paste = e.clipboardData.getData('text');
    if (paste) {
      onChange(paste.trim());
    }
  }

  function onChange(value) {
    setValue(value);
    if (/^[A-Z|_]+$/.test(value)) {
      setResult(value
        .toLowerCase()
        .split('_')
        .map((item, index) => {
          if (index === 0) return item;
          return item.slice(0, 1).toUpperCase() + item.slice(1);
        })
        .join(''));
    } else if (/\s/.test(value.trim())) {
      setResult(value.trim().replace(/\s/g, '_').toUpperCase());
    } else {
      let str = '';
      for (let i = 0; i < value.length; i++) {
        let val = value[i];
        if (i !== 0 && /[A-Z]/.test(val)) str += '_';
        str += val;
      }
      setResult(str.toUpperCase());
    }
  }

  return (
    <div className="Transform">
      <div className="content">
        <div className="title">输入常量<Question tip="在页面内可快速粘贴常量 ~"/></div>
        <div className="Input">
          <input
            onPaste={e => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
            autoFocus
            value={value}
            onChange={({ target }) => onChange(target.value)}
            placeholder="请输入常量"
            type="text"/>
        </div>
        {
          result.trim() && (
            <p className="result">
              <Copy>
                <Fragment>{result}</Fragment>
              </Copy>
            </p>
          )
        }
      </div>
    </div>
  );
}

export default Transform;

import './PickTime.scss';
import * as React from 'react';
import { useEffect, useState } from 'react';
import * as day from 'dayjs';
import Copy from '@/commons/Copy';
import Question from '@/commons/Question';

let timer = null;

function PickTime() {
  const [title, setTitle] = useState(day());
  const [unix, setUnix] = useState(day().unix());
  const [time, setTime] = useState(day());

  let unixText: string = '-';

  switch (String(unix).length) {
    case 10:
      unixText = day.unix(unix).format('YYYY-MM-DD HH:mm:ss');
      break;
    case 13:
      unixText = day.unix(unix / 1000).format('YYYY-MM-DD HH:mm:ss:SSS');
  }

  useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      setTitle(day());
    }, 1000);

    document.addEventListener('paste', bindPaste);
    return () => {
      document.removeEventListener('paste', bindPaste);
      clearInterval(timer);
    };
  }, []);

  function bindPaste(e) {
    const paste = e.clipboardData.getData('text');
    if (+paste && day.unix(+paste).get('y')) {
      setUnix(+paste);
    }
  }

  return (
    <div className="PickTime">
      <div className="info">{title.format('YYYY-MM-DD HH:mm:ss')}</div>
      <div className="handle">
        <div className="item">
          <div className="title">时间戳<Question tip="在页面内可快速粘贴时间戳 ~"/></div>
          <div className="Input">
            <input
              autoFocus
              onPaste={e => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
              onChange={({ target }) => {
                if (/^\d*$/.test(target.value)) {
                  setUnix(+target.value);
                }
              }}
              type="text"
              value={unix || ''}/>
          </div>
          <div className="time">
            <Copy>
              <span>{unixText}</span>
            </Copy>
          </div>
        </div>
        <div className="item">
          <div className="title">选择时间</div>
          <div className="Input">
            <input
              value={time.format('YYYY-MM-DDTHH:mm')}
              onChange={({ target }) => {
                if (target.value) {
                  setTime(day(target.value, 'YYYY-MM-DDTHH:mm'));
                } else {
                  setTime(day());
                }
              }}
              type="datetime-local"/>
          </div>
          <div className="time">
            <p>
              <Copy>
                <span>{time.unix() * 1000}</span>
              </Copy>
            </p>
            <p>
              <Copy>
                <span>{time.unix()}</span>
              </Copy>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickTime;

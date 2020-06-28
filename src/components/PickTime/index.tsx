import './index.scss';
import * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as day from 'dayjs';
import Copy from '@/commons/Copy';
import Question from '@/commons/Question';

const PickTime = () => {
  let timer = useRef(null);

  const [title, setTitle] = useState(day());
  const [unix, setUnix] = useState(day().unix());
  const [time, setTime] = useState(day());

  let unixText = useMemo<string>(() => {
    switch (String(unix).length) {
      case 10:
        return day.unix(unix).format('YYYY-MM-DD HH:mm:ss');
      case 13:
        return day.unix(unix / 1000).format('YYYY-MM-DD HH:mm:ss:SSS');
      default:
        return '-';
    }
  }, [unix]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setTitle(day());
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="pick-time">
      <div className="info">{title.format('YYYY-MM-DD HH:mm:ss')}</div>
      <div className="handle">
        <div className="item">
          <div className="title">
            时间戳
            <Question tip="在页面内可快速粘贴时间戳 ~" />
          </div>
          <div className="input">
            <input
              onChange={({ target }) => {
                if (/^\d*$/.test(target.value)) {
                  setUnix(+target.value);
                }
              }}
              type="text"
              value={unix || ''}
            />
          </div>
          <div className="time">
            <Copy>
              <span>{unixText}</span>
            </Copy>
          </div>
        </div>
        <div className="item">
          <div className="title">选择时间</div>
          <div className="input">
            <input
              value={time.format('YYYY-MM-DDTHH:mm')}
              onChange={({ target }) => {
                if (target.value) {
                  setTime(day(target.value, 'YYYY-MM-DDTHH:mm'));
                } else {
                  setTime(day());
                }
              }}
              type="datetime-local"
            />
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
};

export default PickTime;

import './PickTime.scss';
import * as React from 'react';
import { useEffect, useState } from 'react';
import * as day from 'dayjs';
import Copy from '../../commons/Copy';

let timer = null;
const unixTransforms = {
	10: 'YYYY-MM-DD HH:mm:ss',
	13: 'YYYY-MM-DD HH:mm:ss:SSS'
};

function PickTime() {
	const [title, setTitle] = useState(day());
	const [unix, setUnix] = useState(day().unix());
  const [time, setTime] = useState(day());

	const unixTransform = unixTransforms[String(unix).length];

	useEffect(() => {
		clearInterval(timer);
		setInterval(() => {
			setTitle(day())
    }, 1000);

		document.addEventListener('paste', bindPaste);
		return () => document.removeEventListener('paste', bindPaste);
	}, []);

	function bindPaste(e) {
    const paste = e.clipboardData.getData('text');
		if (+paste && day.unix(+paste).get('y')) {
			setUnix(+paste)
		};
	}

	return (
		<div className="PickTime">
			<div className="info">{title.format('YYYY-MM-DD HH:mm:ss')}</div>
			<div className="handle">
				<div className="item">
					<div className="title">时间戳</div>
					<div className="input_box">
						<input
							className="input"
							onChange={({ target }) => {
								if (/^\d*$/.test(target.value)) {
									setUnix(+target.value)
								}
							}}
							type="text"
							value={unix || ''}/>
					</div>
					<div className="time">
						<Copy>
							<span>{unixTransform ? day.unix(unix).format(unixTransform) : '-'}</span>
						</Copy>
					</div>
				</div>
				<div className="item">
					<div className="title">选择时间</div>
					<div className="input_box">
						<input
              value={time.format('YYYY-MM-DDTHH:mm')}
              onChange={({ target }) => {
                if (target.value) {
                  setTime(day(target.value, 'YYYY-MM-DDTHH:mm'));
                } else {
                  setTime(day())
                }
              }}
							className="input"
							type="datetime-local"/>
					</div>
					<div className="time">
            <Copy>
							<span>{time.unix()}</span>
						</Copy>
					</div>
				</div>
			</div>
    </div>
	)
}

export default PickTime;

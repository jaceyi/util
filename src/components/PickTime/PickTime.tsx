import * as React from 'react';
import * as day from 'dayjs';

function PickTime() {
	console.log(day().format('YYYY-MM-DD'));
	return (
		<div>
			PickTime
    </div>
	)
}

export default PickTime;
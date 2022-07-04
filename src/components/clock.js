import React, {Fragment} from 'react';

const Clock = ({setDays, setHours, setMinutes, setSeconds}) => {
	return (
		<Fragment>
			<div className="clock-container">
				<div className="clock">
					<div className="days">
						<p>{setDays}</p>
						<h3>Days</h3>
					</div>

					<div className="hours">
						<p>{setHours}</p>
						<h3>Hours</h3>
					</div>

					<div className="minutes">
						<p>{setMinutes}</p>
						<h3>Minutes</h3>
					</div>

					<div className="seconds">
						<p>{setSeconds}</p>
						<h3>Seconds</h3>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Clock;
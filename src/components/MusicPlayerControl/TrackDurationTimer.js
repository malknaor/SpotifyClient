import React from 'react';

import './TrackDurationTimer.css';

const TrackDurationTimer = props => {
    const { currentValue } = props;

    return (
        <div className="track-duration">
            <p className="track-duration-label">{currentValue}</p>
        </div>
    );
};

export default TrackDurationTimer;
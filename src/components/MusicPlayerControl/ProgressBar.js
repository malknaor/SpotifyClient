import React from "react";

import './ProgressBar.css';

class ProgressBar extends React.Component {
    state = {
        value: 0,
        gardient: `-webkit-gradient(linear, left top, right top, color-stop(0, blue), color-stop(0, transparnet))`
    }

    onChange = e => {
        const val = (e.currentTarget.value - e.currentTarget.min) / (e.currentTarget.max - e.currentTarget.min);
        
        this.setState({
            ...this.state,
            value: e.currentTarget.value,
            gardient: `-webkit-gradient(linear, left top, right top, color-stop(${val}, #1DB954), color-stop(${val}, transparent))`
        })
    }

    render() {
        return (
            <div className="progress-container">
                <input
                    type="range"
                    className="progress-slider"
                    min={this.props.minVal || 0}
                    max={this.props.maxVal || 100}
                    step="1"
                    value={this.state.value}
                    onChange={this.onChange}
                    style={{ backgroundImage: `${this.state.gardient}` }}
                >
                </input>
            </div>
        );
    }
}

export default ProgressBar;
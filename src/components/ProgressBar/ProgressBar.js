import React from "react";

import './ProgressBar.css';

class ProgressBar extends React.Component {
    state = {
        value: 0,
        gardient: null
    }
    
    calcGradient = value => {
        let val = (value - this.props.minVal) / (this.props.maxVal - this.props.minVal);

        return `-webkit-gradient(linear, left top, right top, color-stop(${val}, #1DB954), color-stop(${val}, transparent))`
    }

    onChange = e => {
        let newGradient = this.calcGradient(e.currentTarget.value);

        this.setState({
            ...this.state,
            value: e.currentTarget.value,
            gardient: newGradient
        });

        if (this.props.onChange) {
            this.props.onChange(e.currentTarget.value);
        }
    }

    render() {
        const { currentValue, defaultValue } = this.props;
        
        return (
            <div className="progress-container">
                <input
                    className="progress-slider"
                    type="range"
                    min={this.props.minVal || 0}
                    max={this.props.maxVal || 100}
                    step="1"
                    value={currentValue || 0}
                    onChange={this.onChange}
                    style={{ backgroundImage: `${this.state.gardient || this.calcGradient(currentValue)}` }}
                >
                </input>
            </div>
        );
    }
}

export default ProgressBar;
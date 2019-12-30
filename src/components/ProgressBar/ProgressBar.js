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
            this.props.onChange(parseInt(e.currentTarget.value));
        }
    }

    render() {
        const { currentValue, minVal, maxVal } = this.props;
        
        return (
            <div className="progress-container">
                <input
                    className="progress-slider"
                    type="range"
                    min={minVal || 0}
                    max={maxVal || 100}
                    step="1"
                    value={currentValue}
                    onChange={this.onChange}
                    style={{ backgroundImage: `${this.calcGradient(currentValue)}` }}
                >
                </input>
            </div>
        );
    }
}

export default ProgressBar;
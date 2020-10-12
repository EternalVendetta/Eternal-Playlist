import React, { Component } from 'react';
import './Track.css';

class Track extends Component {

// Check if the Button is either + or -
renderAction() {
    // Props Destructuring
    const { isRemoval } = this.props;

        if (isRemoval) {
            return <button className='Track-action'>-</button>
        } else {
            return <button className='Track-action'>+</button>
        }
    }

    render() {

        const { track } = this.props;

        return (
            <div className='Track'>
                <div className='Track-information'>
                    <h3>{track.name}</h3>
                    <p>{track.artist} || {track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track
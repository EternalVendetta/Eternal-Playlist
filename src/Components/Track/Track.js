import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
    
// Check if the Button is either + or -
    renderAction() {
    // Props Destructuring
    const { isRemoval } = this.props;

        if (isRemoval) {
            return <button onClick={this.removeTrack} className='Track-action'>-</button>
        } else {
            return <button onClick={this.addTrack} className='Track-action'>+</button>
        }
    }
    // Add Track from searchResults to User's Playlist
    addTrack = () => {
        this.props.onAdd(this.props.track);
    }

    // Add Track from searchResults to User's Playlist
    removeTrack = () => {
        this.props.onRemove(this.props.track);
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
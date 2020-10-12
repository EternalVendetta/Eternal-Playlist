import React, { Component } from 'react';
import './TrackList.css';

// My Components
import Track from '../Track/Track';

class TrackList extends Component {
    render() {
        return (
            <div className='TrackList'>
                {/* I will add map method to Track */}
                <Track 
                    isRemoval={false}
                />
            </div>
        )
    }
}

export default TrackList
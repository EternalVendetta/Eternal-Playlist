import React, { Component } from 'react';
import './Playlist.css';

// My Components
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    render() {

        const { tracks } = this.props;

        return (
            <div className='Playlist'>
                <input 
                    defaultValue={'New Playlist'} 
                />
                <TrackList tracks={tracks} />
                <button className='Playlist-save' >SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist
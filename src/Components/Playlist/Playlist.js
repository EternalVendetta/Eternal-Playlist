import React, { Component } from 'react';
import './Playlist.css';

// My Components
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        const { onNameChange } = this.props;
        onNameChange(e.target.value);
    }
    
    render() {
        const { tracks } = this.props;

        return (
            <div className='Playlist'>
                <input 
                    defaultValue={'New Playlist'}
                    onChange={this.handleChange} 
                />
                <TrackList 
                    tracks={tracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true} 
                />
                <button className='Playlist-save' >SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist
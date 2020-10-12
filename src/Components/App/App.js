import React, { Component } from 'react';
import './App.css';

// My Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {name: 'name', artist: 'artist', album: 'album', id: 1 },
        {name: 'name', artist: 'artist', album: 'album', id: 2 },
        {name: 'name', artist: 'artist', album: 'album', id: 3 }
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {name: 'name', artist: 'artist', album: 'album', id: 4}
      ]
    }
  // Bind THIS to Methods
  this.addTrack = this.addTrack.bind(this);
  }

  // Add track to playlist State
  addTrack(track) {
    const { playlistTracks } = this.state;

    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  render() {
    return (
      <div>
        <h1>Et<span className='highlight'>ern</span>al <em>Play<span className='highlight'>list</span></em></h1>
        <div className='App'>
            <SearchBar />
          <div className='App-playlist'>
            <SearchResults 
                onAdd={this.addTrack}    
                searchResults={this.state.searchResults} 
            />
            <Playlist tracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
    )
  }
}

export default App;

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
      playlistName: '',
      playlistTracks: [
        {name: 'name', artist: 'artist', album: 'album', id: 4},
        {name: 'name', artist: 'artist', album: 'album', id: 5},
        {name: 'name', artist: 'artist', album: 'album', id: 6}
      ]
    }
  // Bind THIS to Methods
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
  }

  // Add track to User's Playlist
  addTrack(track) {
    const tracks = this.state.playlistTracks

    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks })
  }

  // Remove Track from User's Playlist
  removeTrack(track) {
    const tracks = this.state.playlistTracks;

    tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks })
  }

  // Change the Name of the User's Playlist
  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  // Save Tracks to the Playlist
  savePlaylist() {
    const { playlistTracks } = this.state;
    const trackURIs = playlistTracks.map(track => track.uri)
  }

  // Update the Searchresult' State with Search
  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Et<span className='highlight'>ern</span>al <em>Play<span className='highlight'>list</span></em></h1>
        <div className='App'>
            <SearchBar 
                onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults 
                onAdd={this.addTrack}    
                searchResults={this.state.searchResults}
            />
            <Playlist 
                name={this.state.playlistName} 
                tracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
            />
        </div>
      </div>
    </div>
    )
  }
}

export default App;

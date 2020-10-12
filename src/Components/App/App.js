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
        {name: 'name', artist: 'artist', album: 'album', id: 'id' },
        {name: 'name', artist: 'artist', album: 'album', id: 'id' },
        {name: 'name', artist: 'artist', album: 'album', id: 'id' }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Et<span className='highlight'>ern</span>al <em>Play<span className='highlight'>list</span></em></h1>
        <div className='App'>
            <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist/>
        </div>
      </div>
    </div>
    )
  }
}

export default App;

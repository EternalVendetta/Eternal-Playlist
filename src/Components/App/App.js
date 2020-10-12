import React, { Component } from 'react';
import './App.css';

// My Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Et<span className='highlight'>ern</span>al <em>Play<span className='highlight'>list</span></em></h1>
        <div className='App'>
            <SearchBar />
          <div className='App-playlist'>
            <SearchResults/>
            <Playlist/>
        </div>
      </div>
    </div>
    )
  }
}

export default App;

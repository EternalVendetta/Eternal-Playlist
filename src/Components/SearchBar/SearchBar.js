import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
    // Bind THIS to Methods
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value })
    }

    render() {
        return (
            <div className="SearchBar">
                <input
                    placeholder='Enter a Song, Album, or Artist'
                    onChange={this.handleTermChange}
                />
                <button onClick={this.search} className='SearchButton'>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar

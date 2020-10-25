import React, { Component } from 'react';

import './App.css';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';
import unsplashAxios from '../api/unsplash';

class App extends Component {
    state = {
        images: [],
    };

    onSearchSubmit = async (term) => {
        const response = await unsplashAxios.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container">
                <h1>Search Imgs App</h1>
                <br />
                <SearchBar onSubmit={this.onSearchSubmit} />
                <br />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

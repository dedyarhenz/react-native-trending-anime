import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import axios from 'axios';
import AnimeDetail from "./AnimeDetail";

class AnimeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            animes: []
        };
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.componentWillMount()
        this.setState({ refreshing: false })

    }

    componentWillMount = () => {
        axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
            .then(response => this.setState({ animes: response.data.top }));
    }

    renderAnime() {
        return this.state.animes.map(anime =>
            <AnimeDetail key={anime.mal_id} animedata={anime} />
        )
    }

    render() {
        // console.log(this.state);
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                {this.renderAnime()}
            </ScrollView>
        );
    }
}

export default AnimeList;
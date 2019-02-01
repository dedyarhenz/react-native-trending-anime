import React,{Component} from 'react';
import {ScrollView} from 'react-native';   
import axios from 'axios';
import AnimeDetail from "./AnimeDetail";

class AnimeList extends Component {
    state = { animes: [] };
    componentWillMount() {
        axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
        .then(response => this.setState({animes: response.data.top}));
    }

    renderAnime() {
        return this.state.animes.map(anime => 
            <AnimeDetail key={anime.mal_id} animedata={anime} />
        )
    }

    render() {
        // console.log(this.state);
        return (
            <ScrollView>
                {this.renderAnime()}
            </ScrollView>
        );
    }
}

export default AnimeList;
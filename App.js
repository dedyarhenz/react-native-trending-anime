import React, {Component} from 'react';
import {View} from 'react-native';
import Header from "./src/components/header";
import AnimeList from "./src/components/AnimeList";


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Trending Anime'} />
        <AnimeList />
      </View>
    );
  }
}

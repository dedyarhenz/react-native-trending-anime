import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AnimeDetail = (props) =>{
    return (
        <Card>
            <CardSection>
                <View>
                    <Text style={styles.headerTextStyle}>{props.animedata.title}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <View>
                    <Image 
                        style = {styles.imageStyle} 
                        source = {{ uri: props.animedata.image_url }} 
                        />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>Rank</Text>
                    <Text>Score</Text>
                    <Text>Release</Text>
                    <Text>Type</Text>
                    <Text>Episodes</Text>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>: {props.animedata.rank}</Text>
                    <Text>: {props.animedata.score}</Text>
                    <Text>: {props.animedata.start_date}</Text>
                    <Text>: {props.animedata.type}</Text>
                    <Text>: {props.animedata.episodes}</Text>
                </View>

            </CardSection>
        </Card>
    );
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 150,
        flex: 1,
        width: 110
    },
    
}

export default AnimeDetail;
import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

const AnimeDetail = (props) =>{
    return (
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{props.animedata.title}</Text>
                    <Text>Rank : {props.animedata.rank}     Score : {props.animedata.score}</Text>
                </View>
            </CardSection>
            
            <CardSection>
                <Image 
                    style = {styles.imageStyle} 
                    source = {{ uri: props.animedata.image_url }} 
                />
            </CardSection>
        </Card>
    );
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 350,
        flex: 1,
        width: null
    }
    
}

export default AnimeDetail;
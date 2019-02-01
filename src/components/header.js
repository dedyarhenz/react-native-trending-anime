import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) =>{
  const {textStyle,viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles={
  viewStyle:{
    backgroundColor: '#2A93D5',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    elevation:10,
    position:'relative',
  },
  textStyle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  }
}

export default Header;

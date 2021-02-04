import React from 'react';
import {Text, View , StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useState } from 'react/cjs/react.development';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const CurrentWeatherBox = (currentResult) => {
    

    return (
        <View style={styles.container}>
            <View style={styles.viewStyle}>
                <View style={styles.locationStyle}>
                    <Feather name="map-pin" style={{fontSize: 15, color: "#fff", marginRight: 5}}/>
                    <Text style={styles.textLocationStyle}>{currentResult.currentResult.location.name+" | "+currentResult.currentResult.location.country}</Text>
                </View>
                <View style={styles.weatherStyle}>
                    <Text style={styles.tempStyle}>{JSON.stringify(currentResult.currentResult.current.temperature)+"°C"}</Text>
                    <Image style={styles.weatherIconStyle} source={{uri: currentResult.currentResult.current.weather_icons[0]}}/> 
                </View>
                <Text style={styles.textStyle}>{currentResult.currentResult.current.weather_descriptions[0]}</Text> 
            </View>
         
                <View style={styles.infoViewStyle}>
                    <View style={styles.leftInfoStyle}>
                        <Text style={styles.infoTextStyle}>Feels Like: </Text> 
                        <Text style={styles.infoTextResultStyle}>{JSON.stringify(currentResult.currentResult.current.feelslike)+"°C"}</Text>
                        <Text style={styles.infoTextStyle}>Cloud cover: </Text> 
                        <Text style={styles.infoTextResultStyle}>{JSON.stringify(currentResult.currentResult.current.cloudcover)+"%"}</Text>
                        <Text style={styles.infoTextStyle}>Humidity: </Text> 
                        <Text style={styles.infoTextResultStyle}>{JSON.stringify(currentResult.currentResult.current.humidity)+"%"}</Text>
                        <Text style={styles.infoTextStyle}>Visibility: </Text> 
                        <Text style={styles.infoTextResultStyle}>{JSON.stringify(currentResult.currentResult.current.visibility)+"Km"}</Text>
                    </View>
                    <View>
                        <Text style={styles.infoTextStyle}>Pressure:</Text> 
                        <Text style={styles.infoTextResultStyle}>{JSON.stringify(currentResult.currentResult.current.pressure)+" MB"}</Text>
                        <Text style={styles.infoTextStyle}>Wind speed: </Text> 
                        <Text style={styles.infoTextResultStyle}>{JSON.stringify(currentResult.currentResult.current.wind_speed)+" Km/H"}</Text>
                        <Text style={styles.infoTextStyle}>Wind degree: </Text> 
                        <Text style={styles.infoTextResultStyle}>{JSON.stringify(currentResult.currentResult.current.wind_degree)+"°"}</Text>
                        <Text style={styles.infoTextStyle}>Wind direction: </Text> 
                        <Text style={styles.infoTextResultStyle}>{currentResult.currentResult.current.wind_dir}</Text>
                    </View>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight-25
    },
    viewStyle:{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    locationStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#37c979',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 50
    },
    weatherStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    infoViewStyle: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        shadowColor: "#12cae6",
        shadowOffset: {
            width: 0,
            height: -6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 20,
    },
    weatherIconStyle: { 
        height: 70,
        width: 70,
        borderRadius: 10,
        marginLeft: 20
    },
    textLocationStyle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    textStyle:{
        fontSize: 25,
        color: '#fff'
    },
    tempStyle: {
        alignSelf: 'center',
        fontSize: 100,
        color: '#fff',
    },
    infoTextResultStyle: {
        fontSize: 30,
        color: '#000',
        marginBottom: 10,
    },
    infoTextStyle: {
        fontSize: 15,
        color: '#000',
    },
    leftInfoStyle: {
        marginRight: 90
    }
});

export default CurrentWeatherBox;
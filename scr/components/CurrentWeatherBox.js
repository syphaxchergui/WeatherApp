import React from 'react';
import {Text, View , StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useState } from 'react/cjs/react.development';

const screenHeight = Math.round(Dimensions.get('window').height);

const CurrentWeatherBox = (currentResult) => {
    
    const [moreInfo, setMoreInfo] = useState(true);

    return (
        <View style={styles.viewStyle}>
            <View style={styles.locationStyle}>
                <Feather name="map-pin" style={{fontSize: 18, color: "#030303", marginRight: 5}}/>
                <Text style={styles.textLocationStyle}>{currentResult.currentResult.location.name+" | "+currentResult.currentResult.location.country}</Text>
            </View>
            <View style={styles.locationStyle}>
                <Text style={styles.tempStyle}>{JSON.stringify(currentResult.currentResult.current.temperature)+"°C"}</Text>
                <Image style={styles.weatherIconStyle} source={{uri: currentResult.currentResult.current.weather_icons[0]}}/> 
            </View>
            <Text style={styles.textStyle}>{currentResult.currentResult.current.weather_descriptions[0]}</Text> 
            {(moreInfo) ? <View>
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
                <TouchableOpacity onPress={() => setMoreInfo(false)}>
                <Text style={styles.textInfoHideStyle}>Hide info...</Text>
                </TouchableOpacity>
            </View>
            : <TouchableOpacity onPress={() => setMoreInfo(true)}>
                <Text style={styles.textInfoStyle}>Show more info...</Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        margin: 10,
        height: screenHeight-110,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoViewStyle: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 40,
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: '#43419e',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 20,
        elevation: 20,
    },
    weatherIconStyle: { 
        height: 60,
        width: 60,
        borderRadius: 5,
        marginLeft: 30
    },
    textLocationStyle:{
        fontSize: 16,
        color: '#030303'
    },
    textStyle:{
        fontSize: 25,
        color: '#030303'
    },
    tempStyle: {
        alignSelf: 'center',
        fontSize: 100,
        color: '#030303',
    },
    textInfoStyle: {
        fontSize: 16,
        color: '#fff',
        borderRadius: 10,
        marginTop: 30,
        paddingHorizontal: 15,
        alignSelf: 'center',
        paddingVertical: 10,
        backgroundColor: "#e44e28"
    },
    textInfoHideStyle: {
        fontSize: 16,
        color: '#fff',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 15,
        alignSelf: 'center',
        paddingVertical: 10,
        backgroundColor: "#e44e28",
    },
    infoTextResultStyle: {
        fontSize: 25,
        color: '#fff',
        marginBottom: 10,

    },
    locationStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    infoTextStyle: {
        fontSize: 13,
        color: '#e9e9e9',
    },
    leftInfoStyle: {
        marginRight: 90
    }
});

export default CurrentWeatherBox;
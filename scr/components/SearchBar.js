import React from 'react';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native'; 
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onChangeTerm, onEndEditing}) => {

    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
    <View style={styles.backgroundStyle}>
        <Feather name="map-pin" style={styles.iconStyle} />
        <TextInput 
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search Location..."
            placeholderTextColor="#030303"
            value={term}
            onChangeText={newTerm => onChangeTerm(newTerm)}
            onEndEditing={() => onEndEditing(term)}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#f4f3f9',
        height: 50,
        width: Math.round(Dimensions.get('window').width)-20, 
        borderRadius: 30,
        flexDirection: 'row',
        shadowColor: "#e44e28",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 20,
    },
    inputStyle: {
        flex: 1,
        fontSize: 20,
        color: '#030303'
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 10,
        color: "#030303"
    }
});

export default SearchBar;
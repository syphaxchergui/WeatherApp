import React, {useEffect, useState} from 'react';
import { Text, View , StyleSheet, Image, RefreshControl, ScrollView} from 'react-native';
import OpenWeatherApi from '../api/OpenWeatherApi';
import ipstack from '../api/ipstack';
import SearchBar from '../components/SearchBar';
import CurrentWeatherBox from '../components/CurrentWeatherBox';
import publicIP from 'react-native-public-ip';



const HomeScreen = () => {
    const [location, setLocation] = useState('');
    const [currentResult, setCurrentResult] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = ()=> {
        setRefreshing(true);
        searchApi(currentResult.location.name);
        isLoaded ? setRefreshing(false) : null;
    };


    const searchApi = async (city) => {
        try{
            setErrorMsg('');
            setIsLoaded(false);
            const response = await OpenWeatherApi.get(`./current?access_key=d25e55952240f85c50ff3ec8055669a0&query=${city}`);      
            setCurrentResult(response.data);
            console.log(response)
            setIsLoaded(true);
        } catch (err) {
            console.log('Error'); 
            setErrorMsg('Something went wrong !')
        }
    }

    const searchIPApi = async (ip) => {
        try{
            setErrorMsg('');
            setIsLoaded(false);
            const response = await ipstack.get(`./${ip}?access_key=926857638b18434de3cb0467273fb9ad`);      
            searchApi(response.data.city)
            setIsLoaded(true);
        } catch (err) {
            console.log('Error'); 
            setErrorMsg('Something went wrong !')
        }
    }


    useEffect(() => {
        publicIP()
            .then(ip =>  {
                searchIPApi(ip)
                console.log(ip)
            })
            .catch(error => console.log(error) );
        ;
    }, []);


    return (
        <View style={styles.viewStyle}>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
             >
                <View style={styles.searchStyle}> 
                    <SearchBar 
                        term={location}
                        onChangeTerm={(term) => setLocation(term)}
                        onEndEditing={(term) => searchApi(term)}
                    />
                </View>
                {errorMsg ? <Text>{errorMsg}</Text> : <React.Fragment /> }
                {(isLoaded && (currentResult.current !== undefined) ) ?
                <View>
                    <CurrentWeatherBox currentResult={currentResult}/>
                </View> 
                : <View style={styles.loadingStyle}>
                    <Image style={{width: 100, height: 100, marginTop: 220}} source={require('../../assets/loading.gif')}/>
                </View>}
            </ScrollView>
        </View>
        
    ) 
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1, 
        alignContent: 'center',
        backgroundColor: '#121856',
    },
    loadingStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchStyle: {
        flexDirection: 'row'
    },
    currentLocationStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    iconStyle: {
        color: '#030303',
        paddingVertical: 16,
    },
    textStyle: {
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#030303'
    }
})

export default HomeScreen;
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Api from '../../src/api';
import Slider from '../../src/components/Slider/Character/Slider';
import Carousel from '../../src/components/Slider/News/Carousel';

const Home = ({navigation})=> {
    const [characters, setCharacters] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        Api.hunterApi
        .getCharacter()
        .then((data) => {
        if (data.errors) {
            console.warn('get api order error', data);
            setError(data.errors);
        } else {
            setCharacters(data);
        }
        })
        .catch((e) => {
            console.warn('get api order catch', e);
            setError(e.errors);
        });
    }, []);

    useEffect(() => {
        Api.hunterApi
        .getEpisodes()
        .then((data) => {
        if (data.errors) {
            console.warn('get api order error', data);
            setError(data.errors);
        } else {
            setEpisodes(data);
        }
        })
        .catch((e) => {
            console.warn('get api order catch', e);
            setError(e.errors);
        });
    }, []);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>Lista de Episodios</Text>
                <Carousel data={episodes} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.title}>Personajes</Text>
                <Slider navigation={navigation} data={characters} />
                {error ? <Text style={styles.title}>{error}</Text> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
});

export default Home;
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Api from '../../src/api';
import Slider from '../../src/components/Slider/Character/Slider'

const Home = ({navigation})=> {
    const getDatos = () => {
        Api.hunterApi
        .getCharacter()
        .then((data) => {
            console.log(data);
            return data;
        })
    }
    return(
        <>
            <View style={{flex: 1}}>
                <Text style={styles.title}>Personajes</Text>
                <Slider navigation={navigation} data={getDatos} />
            </View>
        </>
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
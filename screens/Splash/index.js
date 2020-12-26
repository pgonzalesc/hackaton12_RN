import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight, ImageBackground} from 'react-native';

const image = { uri: "https://3.bp.blogspot.com/-zQKgCb0SkKg/XMbj0-egfWI/AAAAAAAALCE/SV-MZpntfSgmugQeQFHmnFBqnG5Cxer5gCLcBGAs/s1600/Hunter.jpg"};
const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.containerButton}>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Home')} >
                        <Text style={styles.text}>Get Started</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    containerButton: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-end',
        marginBottom: 25,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: '#FFF', 
        fontWeight: 'bold', 
        fontSize: 22,
    },
    button: {
        backgroundColor: '#CA3946',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
    }
});

export default Splash;
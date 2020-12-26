import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, ScrollView} from 'react-native';
const {height, width} = Dimensions.get('window');

const Detalle = ({navigation, route}) => {
    const {image, name, nen, profile} = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerName}>
                <Text style={styles.textName}>{name}</Text>
            </View>
            <View style={styles.containerImage}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={{flex: 1}}>
                <View style={styles.containerProfile}>
                    <Text style={styles.textProfile}>Perfil</Text>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 15}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Sexo</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 15}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{profile.sex}</Text>
                    </View>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Edad</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{profile.age}</Text>
                    </View>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Cumpleaños</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{profile.birthday}</Text>
                    </View>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Altura</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{profile.height}</Text>
                    </View>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Peso</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{profile.weight}</Text>
                    </View>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Tipo de Sangre</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{profile.blood}</Text>
                    </View>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Ocupación</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{profile.occupation}</Text>
                    </View>
                </View>
                <View style={styles.containerProfile}>
                    <Text style={styles.textProfile}>Nen</Text>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Tipo</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{nen.type}</Text>
                    </View>
                </View>
                <View style={styles.containerTextDataProfile}>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{fontWeight:'bold', textAlign: 'center'}}>Habilidades</Text>
                    </View>
                    <View style={{ width: width/2, paddingTop: 10}}>
                        <Text style={{textAlign: 'center', paddingRight: 20}}>{nen.skill}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#1C7534',
    },
    containerName: {
        backgroundColor: '#124A19',
        paddingVertical: 10,
    },
    containerImage: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    containerProfile: {
        backgroundColor: '#124A19',
        paddingVertical: 5,
        marginTop: 10,
    },
    containerTextDataProfile: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    textName: {
        //fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF',
        textAlign: 'center',
    },
    textProfile: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: width/2,
        height: height/1.5,
        //marginLeft: 15,
    },
});

export default Detalle;
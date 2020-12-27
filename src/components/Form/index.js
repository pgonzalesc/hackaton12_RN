import React, {useState, useEffect} from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Dimensions, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import Api from '../../api';

const Form = ({navigation})=> {
    const [valueSwitch, setValueSwitch] = useState(false);
    const [valueSex, setValueSex] = useState('Masculino');
    const [error, setError] = useState('');
    const [id, setID] = useState(null);

    let temp = {};

    useEffect(() => {
        Api.hunterApi
        .getCharacter()
        .then((data) => {
            if (data.errors) {
                console.warn('get api order error', data);
                setError(data.errors);
            } else {
                setID(data.length+1);
            }
        })
        .catch((e) => {
            console.warn('get api order catch', e);
            setError(e.errors);
        });
    }, []);

    const handleChangeForm = (e, name) => {
        temp[name] = e;
    }

    const toggleSwitchSex = (value, sex)=> {
        setValueSwitch(value);
        setValueSex(sex);
    }

    const submit = ()=> {
        temp['sex'] = valueSex;
        const parameters = {
            "id": id, 
            "image": temp.image,
            "name": temp.name, 
            "profile": {
               "sex": temp.sex,
               "age": temp.age,
               "birthday": temp.birthday,
               "height": temp.height,
               "weight": temp.height,
               "blood": temp.blood,
               "occupation": temp.occupation
            },
            "nen": {
               "type": temp.type,
               "skill": temp.skill
            }
        };
        Api.hunterApi.createCharacter(parameters)
        .then((data) => {
            if (data.errors) {
                console.warn('get api order error', data);
                setError(data.errors);
            } else {
                navigation.navigate('Home');
            }
        });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Nombre</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'name')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Imagen</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'image')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Sexo</Text>
              <View style={styles.cardSexContainer}>
                <Switch 
                onValueChange={(value)=>{toggleSwitchSex(!value, 'Masculino')}}
                value={!valueSwitch}/>
                <Text style={{marginRight: 40}}>Masculino</Text>
                <Switch 
                onValueChange={(value)=>{toggleSwitchSex(value, 'Femenino')}}
                value={valueSwitch}
                />
                <Text>Femenino</Text>
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Edad</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                keyboardType='numeric'
                onChangeText={(text) => handleChangeForm(text, 'age')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Cumpleaños</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'birthday')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Altura</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'height')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Peso</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'weight')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Tipo de Sangre</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'blood')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Ocupación</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'occupation')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Tipo de Nen</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'type')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <Text style={styles.labelCard}>Habilidad Nen</Text>
              <View style={styles.textContainer}>
                <TextInput 
                placeholder=""
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'skill')}
                />
              </View>
            </View>
            <View style={styles.containerField}>
              <TouchableOpacity style={styles.btnSave} onPress={submit}>
                <Text style={styles.btnTextSave}>Agregar</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#D4F0C7',
    },
    containerField:{
       padding: 10, 
    },
    labelCard: {
        color: '#124A19',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textContainer: {
        flexDirection: 'row',
        borderWidth: 0.8,
        borderColor:"#124A19",
        borderRadius: 25,
        paddingLeft: 5,
    },
    textCard: {
        marginLeft: 5,
    },
    cardSexContainer: {
        flexDirection: 'row',
    },
    btnSave: {
        backgroundColor: '#124A19',
        padding: 10,
        borderRadius: 25,
        marginTop: 10
    },
    btnTextSave: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Form;
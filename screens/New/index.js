import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Form from '../../src/components/Form'

const New = ({navigation}) => {
    return (
         <View>
            <Form navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({

});
export default New;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "../../../../screens/Home";
import Splash from "../../../../screens/Splash";
import Detalle from "../../../../screens/Detalle";
import New from "../../../../screens/New";

const Stack = createStackNavigator();
//const RootStack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#124A19",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    // <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="New" component={New}/>
      <Stack.Screen name="Detalle" component={Detalle} />
      <Stack.Screen name="Splash" component={Splash}/>
    </Stack.Navigator>
    // <NavigationContainer>
    //     <RootStack.Navigator mode="modal" headerMode="none">
    //     <RootStack.Screen name="Splash" component={Splash} />
    //     <RootStack.Screen name="Home" component={Home} />
    //     </RootStack.Navigator>
    // </NavigationContainer>
  );
}

const NewStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Agregar Personaje" component={New} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, NewStackNavigator };
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, NewStackNavigator } from "../StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          }
          else if(route.name === 'New'){
            iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
          }
          return (<Icon name={iconName} size={size} color={color}/>);
        },
      })}
      tabBarOptions={{
        activeTintColor: '#56B5C1',
        inactiveTintColor: 'gray',
      }} >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="New" component={NewStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
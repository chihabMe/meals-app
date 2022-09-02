import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from '../features/Restaurants/screens/HomeScreen';
import SettingsPage from '../features/Settings/screens/SettingsPage';
import styled from 'styled-components/native';
import  {HomeIcon,Cog6ToothIcon, MapIcon} from 'react-native-heroicons/solid'
import MapPage from '../features/Map/screens/MapPage';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#5bd68e"
            barStyle={{ backgroundColor: '#07b84a' }}
            screenOptions={({route})=>({
              tabBarIcon:(({color})=>{
                if(route.name=='Home')return <HomeIcon color={color} /> 
                if(route.name=='Settings')return <Cog6ToothIcon color={color} />
                if(route.name=='Map')return <MapIcon color={color} />
                return  <HomeIcon/>

              })
            })}
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Map" component={MapPage} />
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
};

// initialRouteName="Home"
// activeColor="#f0edf6"
// inactiveColor="#3e2465"
// barStyle={{ backgroundColor: '#694fad' }}
const TabNavigator = styled(Tab.Navigator)`
    background-color: ${(props) => props.theme.bgLight};
`;

export default BottomNavigator;

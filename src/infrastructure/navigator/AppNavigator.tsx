import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  {HomeIcon,Cog6ToothIcon, MapIcon} from 'react-native-heroicons/solid'
import HomePage from '../../features/Restaurants/screens/HomeScreen';
import MapPage from '../../features/Map/screens/MapPage';
import SettingsPage from '../../features/Settings/screens/SettingsPage';
import HomeNavigator from './HomeNavigator';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
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
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Map" component={MapPage} />
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
};

export default AppNavigator;

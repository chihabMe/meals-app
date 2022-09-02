import {
    createStackNavigator,
    TransitionPresets
} from '@react-navigation/stack';
import HomePage from '../../features/Restaurants/screens/HomeScreen';
import { Text } from 'react-native-paper';

const HomeStack = createStackNavigator();
const RestaurantsDetail = () => <Text>detail</Text>;
const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false ,...TransitionPresets.ModalPresentationIOS}}>
            <HomeStack.Screen name="Restaurants" component={HomePage} />
            <HomeStack.Screen
                name="RestaurantDetail"
                component={RestaurantsDetail}
            />
        </HomeStack.Navigator>
    );
};
export default HomeNavigator;

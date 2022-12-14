import {
    StyleSheet,
    Platform,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Header from './src/components/Layout/Header/Header';
import { ThemeProvider } from 'styled-components/native';
import { useState } from 'react';
import { lightTheme, darkTheme } from './src/infrastructure/theme';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    useFonts as useOswald,
    Oswald_400Regular
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurantsContext';
import AppNavigator from './src/infrastructure/navigator/AppNavigator';

export default function App() {
    const [theme, setTheme] = useState(lightTheme);
    const [OswaldLoaded] = useOswald({ Oswald_400Regular });
    const [LatoLoaded] = useLato({ Lato_400Regular });
    if (!OswaldLoaded || !LatoLoaded) return null;

    return (
        <NavigationContainer>
            <PaperProvider>
                <ThemeProvider theme={theme}>
                    <SafeAreaView style={styles.container}>
                        <RestaurantsContextProvider>
                            <AppNavigator/>
                        </RestaurantsContextProvider>
                    </SafeAreaView>
                </ThemeProvider>
            </PaperProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
});

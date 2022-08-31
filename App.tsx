import {
    StyleSheet,
    Text,
    View,
    Platform,
    SafeAreaView,
    StatusBar
} from 'react-native';
import Header from './src/components/Layout/Header/Header';
import HomePage from './src/screens/HomePage';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <HomePage />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    }
});

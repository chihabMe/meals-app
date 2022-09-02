import { FlatList, Pressable, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import Header from '../../../components/Layout/Header/Header';
import styled from 'styled-components/native';
import { RestaurantsContext } from '../../../services/restaurants/restaurantsContext';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';
import RestaurantItem from '../components/RestaurantItem';

const HomePage: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [query, setQuery] = useState<string>('');
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    console.log(restaurants);
    const onSearch = (text: string) => {
        console.log('searching', text);
        // if (text == '') {
        //     setRestaurants(dummy);
        //     return;
        // }
        // setRestaurants((prev) => //     dummy.filter((item) => item.name.includes(text.toLowerCase())) // ); };
    };
    const { loadRestaurants } = useContext(RestaurantsContext);
    return (
        <>
            <Header onSearch={onSearch} />
            <HomeContainer>
                {!isLoading && (
                    <Button onPress={loadRestaurants} text="reload">
                        reload
                    </Button>
                )}
                {!isLoading && restaurants && (
                    <RestaurantsListContainer
                        renderItem={(item, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.7} onPress={()=>{navigation.navigate("RestaurantDetail")}}>
                                    <RestaurantItem
                                        key={item.name}
                                        item={item}
                                        index={index}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                        data={restaurants}
                        keyExtractor={(item) => item.id}
                    />
                )}
                {isLoading && <Spinner />}
            </HomeContainer>
        </>
    );
};
export default HomePage;
const HomeContainer = styled.View`
    flex-direction: column;
    flex-grow: 1;
    background-color: ${(props) => props.theme.bg};
    padding: ${(props) => props.theme.spacing._md};
`;

const RestaurantsListContainer = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 10
    }
})`
    margin: 0 auto;
    display: flex;
    width: 100%;
    max-width: 800px;
`;

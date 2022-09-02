import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import RestaurantsList from '../components/RestaurantsList';
import Header from '../../../components/Layout/Header/Header';
import Restaurant from '../../../models/Restaurant';
import styled from 'styled-components/native';

const dummy: Restaurant[] = [
    {
        name: 'cool',
        rating: 5,
        id: '1',
        images: ['https://picsum.photos/400/400'],
        isOpenNow: true,
        openingHours: '7am -> 10pm'
    },
    {
        name: 'fast food',
        rating: 4.5,
        id: '2',
        images: ['https://picsum.photos/400/400'],
        isOpenNow: false,
        openingHours: '7am -> 7pm'
    },
    {
        name: 'arabic food ',
        rating: 4.2,
        id: '3',
        images: ['https://picsum.photos/400/400'],
        isOpenNow: false,
        openingHours: '7am -> 7pm'
        },
    {
        name: 'fast food 2 ',
        rating: 3.5,
        id: '4',
        images: ['https://picsum.photos/400/400'],
        isOpenNow: false,
        openingHours: '7am -> 7pm'
    }
];
const HomePage: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [restaurants, setRestaurants] = useState<Restaurant[]>(dummy);
    const onSearch = (text: string) => {
        console.log('searching', text);
        if (text == '') {
            setRestaurants(dummy);
            return;
        }
        setRestaurants((prev) =>
            dummy.filter((item) => item.name.includes(text.toLowerCase()))
        );
    };
    return (
        <>
            <Header onSearch={onSearch} />
          <HomeContainer>

            <RestaurantsList restaurants={restaurants} />
        </HomeContainer>
        </>
    );
};
export default HomePage;
const HomeContainer = styled.View`
        flex-direction: column;
        flex-grow:1;
        background-color:${props=>props.theme.bg};
        padding:${props=>props.theme.spacing._md };
`



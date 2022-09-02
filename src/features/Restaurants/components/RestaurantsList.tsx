import { StyleSheet,FlatList, ScrollView } from 'react-native';
import React from 'react';
import Restaurant from '../../../models/Restaurant';
import RestaurantItem from './RestaurantItem';
import styled from 'styled-components/native';
const RestaurantsList: React.FC<{ restaurants: Restaurant[] }> = ({
    restaurants
}) => {
    return (
        <RestaurantsListContainer renderItem={RestaurantItem}  data={restaurants} keyExtractor={item=>item.id}/>
    );
};

export default RestaurantsList;

const RestaurantsListContainer = styled(FlatList).attrs({
    contentContainerStyle:{
        padding:10
    }
})`
    margin: 0 auto;
    display: flex;
    width: 100%;
    max-width:800px;
`;

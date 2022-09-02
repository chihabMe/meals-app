import React from 'react';
import { Card, Button, Title, Paragraph } from 'react-native-paper';
import Restaurant from '../../../models/Restaurant';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { StarIcon } from 'react-native-heroicons/solid';


const RestaurantItem: React.FC<{ separators:any,index:number,item: Restaurant }> = ({
    item,index,separators

}) => {
    const { name, images, isOpenNow, openingHours, id, rating } = item;
    const numberOfIterations = Math.floor(rating);
    const stars = []
       for(let i =1;i<=numberOfIterations;i++){
        stars.push(<StarIcon color='yellow' size={15} />)
    }
    return (
        <ItemContainer>
            <ItemCard>
                <ItemCardImage source={{ uri: images[0] }} />
                <Card.Content>
                    <ItemCardTitle>{name} </ItemCardTitle>
                    <ItemStarsRating>
                        {stars}
                    </ItemStarsRating>
                    <ItemCardText>
                        {' '}
                        {openingHours}{' '}
                        {isOpenNow ? 'its open now' : 'its closed now'}{' '}
                    </ItemCardText>
                </Card.Content>
                <Card.Actions>
                    <Button>Order from it</Button>
                </Card.Actions>
            </ItemCard>
        </ItemContainer>
    );
};

export default RestaurantItem;
const ItemContainer = styled.View`
    margin-top: 10px;
`;
const ItemCard = styled(Card)``;
const ItemStarsRating = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${(props) => props.theme.spacing._xs};
`;
const ItemCardTitle = styled(Title)`
    font-family: ${(props) => props.theme.fonts.body};
`;
const ItemCardText = styled(Paragraph)`
    font-family: ${(props) => props.theme.fonts.body};
`;
const ItemCardImage = styled(Card.Cover)``;

// infrastructure infrastructure

import { createContext, ReactNode, useEffect, useState } from 'react';
import Restaurant from '../../models/Restaurant';
import { getRestaurant } from './restaurantsServices';
type RestaurantsType = {
    restaurants: Restaurant[];
    loadRestaurants:()=>void;
    count: number;
    isLoading: boolean;
    error: string;
};
const initialState: RestaurantsType = {
    restaurants: [],
    loadRestaurants:()=>{},
    count: 0,
    isLoading: true,
    error: ''
};

export const RestaurantsContext = createContext(initialState);

export const RestaurantsContextProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    const loadRestaurants =  () => {
        setIsLoading(true);
        return setTimeout(async()=>{
        try {
            const response = await getRestaurant();
            if (response) setRestaurants(response);
            else setError(response);
        } catch (err) {
            setError(err);
            console.log(err);
        }
        setIsLoading(false);
        },1500)
    };
    useEffect(() => {
            const timeout =  loadRestaurants();
            return ()=>{clearTimeout(timeout)}
    }, []);

    const value = {
        isLoading,
        error,
        restaurants,
        loadRestaurants,
        count:restaurants.length
    };
    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    );
};

import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './style';
import restaurante from '../../assets/restaurante-fake.png';


const RestaurantCard = ({restaurant}) => (
        <Restaurant>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars 
                    count={5} 
                    isHalf 
                    value={restaurant.rating}
                    edit={false}
                    activeColor= "#ffd700" 
                />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
            alt="Foto do Restaurante" />
        </Restaurant>
    );

export default RestaurantCard;

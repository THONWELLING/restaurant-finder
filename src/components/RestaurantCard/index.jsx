import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './style';
import restaurante from '../../assets/restaurante-fake.png';


const RestaurantCard = () => (
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do Restaurante</Title>
                <ReactStars 
                    count={5} 
                    isHalf 
                    value={5}
                    edit={false}
                    activeColor= "#ffd700" 
                />
                <Address>Avenida José Brumatti,2538</Address>
            </RestaurantInfo>
            <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
        </Restaurant>
    );

export default RestaurantCard;

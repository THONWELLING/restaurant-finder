import React, { useState } from 'react';
import Slider from "react-slick";
import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './style';
import  TextField, { Input }  from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import restaurante from '../../assets/restaurante-fake.png';
import logo from '../../assets/logo.svg';
import { Card, RestaurantCard, Modal } from '../../components';




const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="logo do restaurante" />
                < TextField 
                    label = 'Pesquisar Por Restaurantes' 
                    outLined
                    //onTrailingIconSelect = {() =>this.setState({value:''})} 
                    trailingIcon = {<MaterialIcon role="button" icon="search" />} 
                    > 
                    < Input 
                        value = {inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                    /> 
                </TextField>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...settings}>
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                    <Card photo={restaurante} title="unknow name" />
                </Carousel>
                <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
            </Search>
            <RestaurantCard />
        </Container>
        <Map />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
    );
};

export default Home;
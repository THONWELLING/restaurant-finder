import React, { useState } from 'react';
import Slider from "react-slick";
import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './style';
import  TextField, { Input }  from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import restaurante from '../../assets/restaurante-fake.png';
import logo from '../../assets/logo.svg';
import { Card, RestaurantCard, Modal, Map } from '../../components';




const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [modalOpened, setModalOpened] = useState(true);
    const settings = {
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
    };

    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="logo do restaurante" />
                < TextField 
                    label = 'Pesquisar Por Restaurantes' 
                    outlined
                    //onTrailingIconSelect = {() =>this.setState({value:''})} 
                    trailingIcon = {<MaterialIcon role="button" icon="search" />} 
                    > 
                    < Input 
                        value = {inputValue}
                        onKeyPress = {handleKeyPress}
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
            </Search>
            <RestaurantCard />
        </Container>
        <Map query={query} />
        {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
    );
};

export default Home;
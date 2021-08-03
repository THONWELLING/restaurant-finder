import React, { useState } from 'react';
import { Container, Search } from './style';
import  TextField, { Input }  from '@material/react-text-field';
import logo from '../../assets/logo.svg';
import { useState } from 'react';



const Home = () => {
    const [inputValue, setInputValue] =useState('');
    return (
    <Container>
        <Search>
            <img src={logo} alt="logo do restaurante" />
            < TextField 
                label = 'Pesquisar' 
                outLined
                onTrailingIconSelect = {() => this.setState({value:''})} 
                //trailingIcon = {<PapeldeMaterialIcon ="botão"icon="delete" />} 
                > < Input 
                value = { this . estado . valor } 
                onChange= {(e) => setInputValue(e.target.value)} /> 
            </TextField>
        </Search>
    </Container>
    );
}

export default Home;
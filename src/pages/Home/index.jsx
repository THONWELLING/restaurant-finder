import React, { useState } from 'react';
import { Container, Search, Logo, Wrapper,Map } from './style';
import  TextField, { Input }  from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';




const Home = () => {
    const [inputValue, setInputValue] = useState('');
    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="logo do restaurante" />
                < TextField 
                    label = 'Pesquisar Restaurantes' 
                    outLined
                    //onTrailingIconSelect = {() =>this.setState({value:''})} 
                    trailingIcon = {<MaterialIcon role="button" icon="search" />} 
                    > 
                    < Input 
                        value = {inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                    /> 
                </TextField>
            </Search>
        </Container>
        <Map />
    </Wrapper>
    );
}

export default Home;
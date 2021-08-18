import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
display: flex;
justify-content: center;
padding: 4px;
width: 90px;
height: 90px;
border-radius: 6px;
background-image: url(${(props) => props.photo});
background-size: cover;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #ffff;
    font-size: 16px;
`;

const ImageCard = ({photo, title}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(()=>{
        const imageLoader = new Image(); // 'esse new image()' cria como se fosse uma tag image do html
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true); //aqui 'onload'não é camelcase porque não é um elemento react e sim um elemento nativo html
    }, [photo]);
    return (
        <>
        {imageLoaded ? (              //aqui foi criada uma condicional para a exibição da imagem
            <Card photo={photo}>
                <Title>{title}</Title>
            </Card>
        ) : <Skeleton width="90px" height="90px" />}
        </>

    );
};


export default ImageCard;
import React from 'react';
import { Container } from "./StyledHomeElements";
import ImgSlider from '../ImgSlider';
import Recommends from '../Recommends';
import Viewers from '../Viewers';

const HOME = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
        </Container>
    )
}

export default HOME;

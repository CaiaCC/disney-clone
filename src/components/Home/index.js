import React from 'react';
import ImgSlider from '../ImgSlider';
import Viewers from '../Viewers';
import { Container } from "./StyledHomeElements";

const HOME = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

export default HOME;

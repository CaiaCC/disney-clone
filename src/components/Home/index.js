import React from 'react';
import ImgSlider from './ImgSlider';
import { HomeContainer } from "./StyledHomeElements";
import Viewers from './Viewers';

const HOME = () => {
    return (
        <HomeContainer>
            <ImgSlider />
            <Viewers />
        </HomeContainer>
    )
}

export default HOME;

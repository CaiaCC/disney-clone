import React from 'react';
import { Container } from "./StyledHomeElements";
import ImgSlider from '../ImgSlider';
import Recommends from '../Recommends';
import Viewers from '../Viewers';
import NewDisney from '../Originals';
import Originals from '../NewDisney';
import Trending from '../Trending';

const HOME = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

export default HOME;

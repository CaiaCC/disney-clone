import React from 'react';
import { Background, Container, ContentMeta, Controls, ImageTitle, Player } from './StyledDetailElements';

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src='' alt="" />
            </Background>
            <ImageTitle>
                <img src='' alt="" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src='/images/play-icon-black.png' alt="" />
                        <span>Play</span>
                    </Player>
                </Controls>
            </ContentMeta>
        </Container>
    )
}

export default Detail;
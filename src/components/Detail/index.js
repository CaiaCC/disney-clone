import React from 'react';
import { AddList, Background, Container, ContentMeta, Controls, Description, GroupWatch, ImageTitle, Player, SubTitle, Trailer } from './StyledDetailElements';

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
                    <Trailer>
                        <img src='/images/play-icon-white.png' alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src='/images/group-icon.png' alt='' />
                        </div>
                    </GroupWatch>
                    <SubTitle>

                    </SubTitle>
                    <Description>
                        
                    </Description>
                </Controls>
            </ContentMeta>
        </Container>
    )
}

export default Detail;
import React from 'react'
import { ViewersContainer, ViewersWrap } from './StyledHomeElements';

const Viewers = () => {
    return (
        <ViewersContainer>
            <ViewersWrap>
                <img src="/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/videos/1564674844-disney.mp4"
                        type="video/mp4"
                    />
                </video>
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/videos/1564676714-pixar.mp4"
                        type="video/mp4"
                    />
                </video>
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/videos/1564676115-marvel.mp4"
                        type="video/mp4"
                    />
                </video>
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/videos/1608229455-star-wars.mp4"
                        type="video/mp4"
                    />
                </video>
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source
                        src="/videos/1564676296-national-geographic.mp4"
                        type="video/mp4"
                    />
                </video>
            </ViewersWrap>
        </ViewersContainer>
    );
}

export default Viewers;

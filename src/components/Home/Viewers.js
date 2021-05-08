import React from 'react'
import { ViewersContainer, ViewersWrap } from './StyledHomeElements';

const Viewers = () => {
    return (
        <ViewersContainer>
            <ViewersWrap>
                <img src="/images/viewers-disney.png" alt='' />
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-marvel.png" alt='' />
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-national.png" alt='' />
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-pixar.png" alt='' />
            </ViewersWrap>
            <ViewersWrap>
                <img src="/images/viewers-starwars.png" alt='' />
            </ViewersWrap>
        </ViewersContainer>
    );
}

export default Viewers;

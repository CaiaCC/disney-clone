import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Carousel, ImgSliderWrap } from './StyledHomeElements';

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <ImgSliderWrap>
                <a>
                    <img src="/images/slider-badging.jpeg" alt="" />
                </a>
            </ImgSliderWrap>
            <ImgSliderWrap>
                <a>
                    <img src="/images/slider-scale.jpeg" alt="" />
                </a>
            </ImgSliderWrap>
            <ImgSliderWrap>
                <a>
                    <img src="/images/slider-badag.jpeg" alt="" />
                </a>
            </ImgSliderWrap>
            <ImgSliderWrap>
                <a>
                    <img src="/images/slider-scales.jpeg" alt="" />
                </a>
            </ImgSliderWrap>
        </Carousel>
    );
}

export default ImgSlider;

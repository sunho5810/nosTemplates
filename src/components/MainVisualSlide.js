import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonStyle from '../styles/CommonStyle';
import styled, {css} from 'styled-components';
import prevArrow from '../res/images/main/mainSliderArrow--prev.svg'
import nextArrow from '../res/images/main/mainSliderArrow--next.svg'
import { useCallback } from 'react';
import { useRef } from 'react';

const {Inner} = CommonStyle;

const MainVisualWrap = styled.div`
    ${({theme}) => {
        return css`
            position: relative;
            width: 100%;
            height 100vh;
            background: url(${(props) => props.imgSrc}) center/cover no-repeat;

            &:after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%; 
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
            }

            .mainVisualTxtWrap {
                position: absolute;
                top: 50%;
                left: 0;
                z-index: 5;
                transform: translateY(-50%);
                color: ${theme.fontColor.white};
            }

            .mainVisualTxtWrap__tit{
                font-size: 3.75rem;
            }
            .mainVisualTxtWrap__txt{
                margin-top: 30px;
                font-size: 1.375rem;
                white-space: pre-wrap;
                line-height: ${theme.lineHeight.m};
            }
        `
    }}
`
const MainSlider = styled(Slider)`
    ${({theme}) => {
        return css`
            .dots_custom{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
                position: absolute;
                bottom: 60px;
                left: 50%;
                transform: translateX(-50%);
            }

            .dotsList{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
            }

            .dotsList li button{
                width: 1rem;
                height: 1rem;
                border: 2px solid #fff;
                border-radius: 100%;
                text-indent: -9999px;
            }

            .dotsList li.slick-active button{
                background-color: #fff;
            }

            .slick-prev::before,
            .slick-next::before {
              opacity: 0;
              display: none;
            }
            .slick-slide div {
              cursor: pointer;
            }
        `
    }}
`

const CustomNextArrow = styled.div`
    width: 9px;
    height: 18px;
    background: url(${nextArrow}) center/contain no-repeat;
    cursor: pointer;
`

const CustomPrevArrow = styled.div`
    width: 9px;
    height: 18px;
    background: url(${prevArrow}) center/contain no-repeat;
    cursor: pointer;
`


const MainVisualSlide = ({slideSrcList}) => {

    const slickRef = useRef(null);

    var settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <CustomNextArrow/>
        ),
        prevArrow: (
            <CustomPrevArrow/>
        ),
        appendDots: (dots) => (
            <div>
                <ul className='dotsList'> {dots} </ul>
            </div>
          ),
        dotsClass: 'dots_custom',
        
    };

    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <MainSlider ref={slickRef} {...settings}>
        {
            slideSrcList.map((item, index) => (
                <MainVisualWrap key={index} imgSrc={item.img}>
                    <Inner>
                        <div className='mainVisualTxtWrap'>
                            <h2 className='mainVisualTxtWrap__tit'>
                                <b>{item.boldedTit}</b><br/>
                                {item.normalTit}
                            </h2>
                            <p className='mainVisualTxtWrap__txt'>
                                {item.text}
                            </p>
                        </div>
                    </Inner>
                </MainVisualWrap>
            ))
        }
        
    </MainSlider>
  )
}

export default MainVisualSlide
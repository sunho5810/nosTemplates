import React from 'react'
import styled, {css} from 'styled-components'
import CommonStyle from '../../styles/CommonStyle'


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

const MainVisual = ({mainVisualImg, mainVisualTitBold, mainVisualTitNormal, mainVisualTxt}) => {
  return (
    <MainVisualWrap imgSrc={mainVisualImg}>
        <Inner>
            <div className='mainVisualTxtWrap'>
                <h2 className='mainVisualTxtWrap__tit'>
                    <b>{mainVisualTitBold}</b><br/>
                    {mainVisualTitNormal}
                </h2>
                <p className='mainVisualTxtWrap__txt'>
                    {mainVisualTxt}
                </p>
            </div>
        </Inner>
    </MainVisualWrap>
  )
}

export default MainVisual
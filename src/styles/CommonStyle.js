import styled, { css } from "styled-components";

const Wrap = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      padding-top: ${theme.commonTheme.wrapPaddingTop.desktop};

      ${theme.deviceType.desktop} {
        padding-top: ${theme.commonTheme.wrapPaddingTop.tablet};
      }
    `;
  }}
`;

const Inner = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      width: ${theme.commonTheme.innerWidth};
      height: 100%;
      margin: 0 auto;

      ${theme.deviceType.desktop}{
        width: calc(100% - ${theme.commonTheme.sideSpace.desktop});
      }
    `;
  }}
`;

const HeaderInner = styled(Inner)`
  ${({theme}) => {
    return css`
        display: flex; justify-content: space-between; align-items: flex-start; height: 100%;
        ${theme.deviceType.desktop}{
            align-items: center;
        }
    `
  }}

`

const CommonStyle = { Wrap, Inner, HeaderInner};

export default CommonStyle;

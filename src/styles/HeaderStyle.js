import styled, { css } from "styled-components";


const HeaderWrap = styled.header`
  ${({ theme }) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      box-sizing: border-box;
      transition-property: height;
      height: ${theme.headerTheme.headerHeight.desktop};
      background-color: ${theme.bgColor.transparent};

      .headerLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${theme.headerTheme.headerHeight.desktop};
      }

      &:hover {
        height: ${({isWeb, maxMenuLength}) => (isWeb) && `calc(
          ${theme.headerTheme.headerHeight.desktop} + (
            ${theme.headerTheme.menuDepth2Height.desktop} * ${maxMenuLength + 1}
          )
        )`};
        transition-duration: ${({isWeb}) => (isWeb ? "0.4s" : "0.2s")};
        background-color: ${({isWeb}) => (isWeb ? `${theme.bgColor.white}` : `${theme.bgColor.transparent}`)};

        .navDepth01__li__link{
          color: ${({isWeb}) => (isWeb) && `${theme.fontColor.black}`};
        }

        .navDepth02 {
          opacity: 1;
          transition: opacity 0.2s;
          transition-delay: 0.1s;
          pointer-events: auto;
        }
      }

      ${theme.deviceType.desktop} {
        height: ${theme.headerTheme.headerHeight.tablet};
        .headerLogo {
          height: ${theme.headerTheme.headerHeight.tablet};
        }
      }
    `;
  }}
`;

const Header = styled.div`
  ${({ theme }) => {
    return css`
      border-bottom: 1px solid ${theme.borderColor.lightGray};
      box-sizing: border-box;
      height: ${theme.headerTheme.headerHeight.desktop};

      .navDepth01 {
        display: flex;
        height: 100%;
      }

      ${theme.deviceType.desktop} {
        height: ${theme.headerTheme.headerHeight.tablet};
        .navDepth01 {
          position: absolute;
          top: calc(100% - ${theme.headerTheme.headerHeight.tablet});
          left: ${({menuOpen}) => (menuOpen ? "0" : "100%")};
          z-index: -1;
          width: 100%;
          height: calc(100vh);
          padding-top: ${theme.headerTheme.headerHeight.tablet};
          flex-direction: column;
          background: ${theme.bgColor.white};
          transition-property: left;
          transition-duration: ${({menuOpen}) => (menuOpen ? "0.4s" : "0.2s")};
        }
      }
    `;
  }}
`;

const NavDepth01Li = styled.li`
  ${({ theme }) => {
    return css`
      position: relative;
      .navDepth01__li__link {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: calc(720px / 4);
        height: ${theme.headerTheme.menuDepth1Height.desktop};
        font-size: 1.25rem;
        font-weight: 500;
        color: ${theme.fontColor.white};
        cursor: pointer;
      }
      &:hover .navDepth01__li__link:after,
      &.active .navDepth01__li__link:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 75%;
        height: 4px;
        background: ${theme.bgColor.main};
      }

      &:hover .navDepth01__li__link {
        font-weight: bold;
        color: ${theme.fontColor.main};
      }

      .navDepth02 {
        display: block;
        width: 100%;
        padding-top: 20px;
        opacity: 0;
        transition: opacity 0.05;
        pointer-events: none;
      }

      ${theme.deviceType.desktop} {
        overflow: hidden;
        height: ${({active, depth2Length}) => active ? `calc(${theme.headerTheme.menuDepth1Height.tablet} + (${theme.headerTheme.menuDepth2Height.tablet} * ${depth2Length}))` : `${theme.headerTheme.menuDepth2Height.tablet}`};
        transition-property: height;
        transition-duration: .4s;

        .navDepth01__li__link {
          display: block;
          width: 100%;
          height: ${theme.headerTheme.menuDepth2Height.tablet};
          padding: 12px 20px;
          box-sizing: border-box;
          font-size: 16px;
          text-align: left;
          border-bottom: 1px solid #ddd;
          color: ${({active}) => active ? `${theme.fontColor.main}` : `${theme.fontColor.black}`};
          font-weight: bold;
        }
        .navDepth01__li__link::after {
          display: none;
        }
        .navDepth01__li__link::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 20px;
          width: 16px;
          height: 8px;
          background: url(${theme.headerTheme.menuArrowImg}) center/contain no-repeat;
          transform: ${({active}) => active ? "rotateZ(180deg)" : "rotateZ(0deg)"};
          transition: 0.2s;
        }
        .navDepth02 {
          display: block;
          position: static;
          opacity: 1;
          padding-top: 0;
        }
      }
    `;
  }}
`;

const NavDepth02Li = styled.li`
  ${({ theme }) => {
    return css`
      .navDepth02__li__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        font-size: 1.125rem;
        font-weight: 500;
      }
      .navDepth02__li__link:hover,
      .navDepth02__li__link.active {
        font-weight: bold;
        color: ${theme.fontColor.main};
      }

      ${theme.deviceType.desktop} {
        .navDepth02__li__link {
          display: block;
          width: 100%;
          height: 44px;
          padding: 13px 20px 13px 40px;
          font-weight: normal;
          font-size: 14px;
          border-bottom: 1px solid ${theme.borderColor.lightGray};
          box-sizing: border-box;
          pointer-events: auto;
          color: ${theme.fontColor.black};
        }
        .navDepth02__li__link.active,
        .navDepth02__li__link:hover {
          background-color: ${theme.bgColor.lightGray};
          font-weight: bold;
        }
      }
    `;
  }}
`;

const MenuBtn = styled.div`
  ${({ theme }) => {
    return css`
      display: none;
      flex-direction: column;
      gap: 4px;
      width: 24px;
      height: 14px;
      cursor: pointer;

      & span{
        width: 100%;
        height: 2px;
        background-color: ${theme.color.black};
      }
      ${theme.deviceType.desktop} {
        display: flex;
        position: relative;

        & span {
          position: relative;
          transition: 0.2s;
        }
        & span {
          width: ${({menuOpen}) => menuOpen && "calc(100% + 1px)"};
        }
        & span:nth-child(1) {
          transform: ${({menuOpen}) => menuOpen && "rotateZ(45deg) translate(4.5px, 4.5px)"};
        }
        & span:nth-child(2) {
          opacity: ${({menuOpen}) => (menuOpen ? "0" : "1")};
        }
        & span:nth-child(3) {
          transform: ${({menuOpen}) => (menuOpen ? "rotateZ(-45deg) translate(4.5px, -4.5px)" : "")};
        }
      }
    `;
  }}
`;

const HeaderStyle = { HeaderWrap, Header, NavDepth01Li, NavDepth02Li, MenuBtn };

export default HeaderStyle;

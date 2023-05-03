import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import customReset from "../customReset.css";

const GloablStyle = createGlobalStyle`
    ${({ theme }) => {
      return css`
        ${reset};
        ${customReset};

        ${theme.deviceType.desktop} {
          html,
          body {
            font-size: 14px;
          }
          body.scrollDisabled{overflow: hidden;} 
        }

        ${theme.deviceType.tablet} {
          html,
          body {
            font-size: 12px;
          }
        }
      `;
    }}
    
`;

export default GloablStyle;

import React from "react";
import CommonStyle from "../styles/CommonStyle";
import styled, { css } from "styled-components";

const { Inner } = CommonStyle;

const FooterWrap = styled.footer`
    ${({ theme }) => {
      return css`
        background: ${theme.bgColor.black};
        padding: 37px 0 33px;
        color: ${theme.fontColor.white};
        .footer__info {
          display: flex; align-items: center; flex-wrap: wrap; gap: 20px;
        }
        .companyInfo{
          line-height: ${theme.lineHeight.m};
        }
      `;
    }}
  `;

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer">
        <Inner>
          <div className="footer__info">
            <span className="companyInfo companyInfo--ceo">대표 : 홍길동</span>
            <span className="companyInfo companyInfo--regNum">사업자등록번호 : 000-00-0000</span>
            <span className="companyInfo companyInfo--addr">주소 : 경기도 고양시 일산동구 중앙로 1261번길59 로얄프라자3 707호</span>
          </div>
          <div className="footer__info">
            <span className="companyInfo companyInfo--email">E-MAIL : 0000@0000.com</span>
            <span className="companyInfo companyInfo--contact">연락처 : 02-1234-5678</span>
            <span className="companyInfo companyInfo--fax">FAX : 02-1234-5678</span>
          </div>
        </Inner>
      </div>
    </FooterWrap>
  );
};

export default Footer;

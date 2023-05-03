import React from 'react'

const Footer = () => {
  return (
    <div className='footerWrap'>
        <div className="footer">
            <div className="inner inner--footer">
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
            </div>
        </div>
    </div>
  )
}

export default Footer
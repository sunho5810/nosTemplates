import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonStyle from "../../../res/styles/CommonStyle";
import HeaderStyle from "../../../res/styles/HeaderStyle";

/* 
    styled 라이브러리 사용해보기
    rudecer에서 메인컬러, 폰트컬러 등등 미리 지정해놓고 변수로 바꿔보기
    효율적일까?
*/

const {HeaderInner} = CommonStyle;
const {HeaderWrap, Header, MenuBtn} = HeaderStyle;

/* active 다른게 열리면 다른건 닫히게 작업하기 (나중에) */

const Navigation = ({isWeb}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuList = [
    {
        depth01: {menuName: "menu01", link: ""},
        depth02: [
            {menuName: "menu01_01", link: ""},
            {menuName: "menu01_02", link: ""},
            {menuName: "menu01_03", link: ""},
            {menuName: "menu01_04", link: ""},
        ]
    },
    {
        depth01: {menuName: "menu02", link: ""},
        depth02: [
            {menuName: "menu02_01", link: ""},
            {menuName: "menu02_02", link: ""},
            {menuName: "menu02_03", link: ""},
        ]
    },
    {
        depth01: {menuName: "menu03", link: ""},
        depth02: [
            {menuName: "menu03_01", link: ""},
        ]
    },
    {
        depth01: {menuName: "menu04", link: ""},
        depth02: []
    }
  ]

  const maxMenuLengthFunc = () => {
    let maxLength = 0;
    for(var i = 0; i < menuList.length; i++){
        if(menuList[i].depth02.length > maxLength){
            maxLength = menuList[i].depth02.length;
        }
      }

    return maxLength;
  }

  return (
    <HeaderWrap maxMenuLength={maxMenuLengthFunc()} isWeb={isWeb}>
      <Header menuOpen={menuOpen}>
        <HeaderInner>
          <h1 className="headerLogo">
            <Link to="/" className="headerLogo__a">
              <img src="" alt="로고" />
            </Link>
          </h1>
          <MenuBtn
            className={`menuBtn`}
            menuOpen={menuOpen}
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
          >
            <span/>
            <span/>
            <span/>
          </MenuBtn>
          <ul className="navDepth01">
            {
                menuList.map((item, index) => (
                    <MenuDepth01 key={index} index={index} item={item}/>
                ))
            }
          </ul>
        </HeaderInner>
      </Header>
    </HeaderWrap>
  );
};

export default Navigation;

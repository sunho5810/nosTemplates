import React from 'react'
import MainVisual from '../components/visual/MainVisual'
import mainVisualImg from '/res/images/main/main_visual.png'
import mainVisualImg01 from '../res/images/main/main_visual.png'
import mainVisualImg02 from '../res/images/main/main_visual.png'
import mainVisualImg03 from '../res/images/main/main_visual.png'
import MainVisualSlide from '../components/slider/type-A/MainVisualSlide'

const Main = () => {
  const str = "귀사를 소개하는 홍보문구를 넣는 영역입니다.\n 홍보문구를 작성하여 회사를 소개하세요.";
  
  const slideSrcList = [
    {
      img: mainVisualImg01,
      boldedTit: "Stationery area01",
      normalTit: "on the main page01.",
      text: "귀사를 소개하는 홍보문구를 넣는 영역입니다.\n 홍보문구를 작성하여 회사를 소개하세요.01",
    },{
      img: mainVisualImg02,
      boldedTit: "Stationery area02",
      normalTit: "on the main page02.",
      text: "귀사를 소개하는 홍보문구를 넣는 영역입니다.\n 홍보문구를 작성하여 회사를 소개하세요.02",
    },{
      img: mainVisualImg03,
      boldedTit: "Stationery area03",
      normalTit: "on the main page03.",
      text: "귀사를 소개하는 홍보문구를 넣는 영역입니다.\n 홍보문구를 작성하여 회사를 소개하세요.03",
    },
  ]

  return (
    <div>
      {/* < MainVisual mainVisualImg = {
        mainVisualImg
      }
      mainVisualTitBold = {
        `Stationery area`
      }
      mainVisualTitNormal = {
        `on the main page.`
      }
      mainVisualTxt = {str}
      /> */}
      <MainVisualSlide slideSrcList = {slideSrcList}/>
    </div>
  )
}

export default Main
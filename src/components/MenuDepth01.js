import React, { useEffect, useState } from 'react'
import HeaderStyle from '../styles/HeaderStyle'
import MenuDepth02 from './MenuDepth02';

const {NavDepth01Li} = HeaderStyle;

const MenuDepth01 = ({item, index}) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log("active??", active);
  }, [active]);

  console.log("item.depth02.length?", item.depth02.length);

  return (
    <NavDepth01Li active={active} depth2Length={item.depth02.length}>
      <div className="navDepth01__li__link" onClick={() => active ? setActive(false) : setActive(true)}>{item.depth01.menuName}</div>
      <ul className="navDepth02">
        {
          item.depth02.map((item, index) => (
            <MenuDepth02 key={index} item={item}/>
          ))
        }
      </ul>
    </NavDepth01Li>
  )
}

export default MenuDepth01
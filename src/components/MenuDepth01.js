import React, { useState } from 'react'
import HeaderStyle from '../styles/HeaderStyle'
import MenuDepth02 from './MenuDepth02';

const {NavDepth01Li} = HeaderStyle;

const MenuDepth01 = ({item}) => {

  const [depth2Open, setDepth2Open] = useState(false);

  return (
    <NavDepth01Li>
      <div className="navDepth01__li__link" /* depth2Open={depth2Open} onClick={() => depth2Open ? setDepth2Open(false) : setDepth2Open(true)} */>{item.depth01.menuName}</div>
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
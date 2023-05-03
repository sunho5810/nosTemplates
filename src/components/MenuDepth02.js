import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStyle from '../styles/HeaderStyle';

const {NavDepth02Li} = HeaderStyle;

const MenuDepth02 = ({item}) => {
  return (
    <NavDepth02Li>
      <Link to={item.link} className="navDepth02__li__link">{item.menuName}</Link>
    </NavDepth02Li>
  )
}

export default MenuDepth02
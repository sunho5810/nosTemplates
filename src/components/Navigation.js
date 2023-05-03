import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='headerWrap'>
        <div className="header">
            <div className="inner inner--header">
                <h1 className="headerLogo"><Link to="/" className="headerLogo__a"><img src="" alt="로고"/></Link></h1>
                <div className={`menuBtn ` + menuOpen ? "open" : ""} onClick={() => menuOpen ? setMenuOpen(false) : setMenuOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="navDepth01">
                    <li className="navDepth01__li">
                        <a href="javascript:void(0);" onclick="navDepth02Open(this);" className="navDepth01__li__link">menu01</a>
                        <ul className="navDepth02">
                            <li className="navDepth02__li"><a href="javascript:void(0);" className="navDepth02__li__link">menu01-01</a></li>
                        </ul>
                    </li>
                    <li className="navDepth01__li">
                        <a href="javascript:void(0);" onclick="navDepth02Open(this);" className="navDepth01__li__link">menu02</a>
                    </li>
                    <li className="navDepth01__li">
                        <a href="javascript:void(0);" onclick="navDepth02Open(this);" className="navDepth01__li__link">menu03</a>
                    </li>
                    <li className="navDepth01__li">
                        <a href="javascript:void(0);" onclick="navDepth02Open(this);" className="navDepth01__li__link">menu04</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navigation
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to='/blog'>ブログ</Link>
          </li>
          <li>
            {/* <LInk>SNS</LInk> */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
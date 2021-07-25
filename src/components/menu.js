import React from 'react'
import { Link } from 'react-router-dom';

import './styleMenu.css';



function Menu() {
  return (
    <div className="menuContainer">
      <Link to="/" ><button className="buttonMenu">Home</button></Link>
      <Link to="/clients" rel="noreferrer"><button className="buttonMenu">Clientes</button></Link>
      {/* <a href="#"><button className="buttonMenu" rel="noreferrer">Produtos</button></a> */}
    </div>

  );
}

export default Menu;

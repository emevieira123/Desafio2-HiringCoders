import React from 'react'

import './styleMenu.css';



function Menu() {
  return (
    <div className="menuContainer">
      <a href="http://localhost:3000/" rel="noreferrer"><button className="buttonMenu">Home</button></a>
      <a href="http://localhost:3000/clients" rel="noreferrer"><button className="buttonMenu">Clientes</button></a>
      {/* <a href="#"><button className="buttonMenu" rel="noreferrer">Produtos</button></a> */}
    </div>

  );
}

export default Menu;

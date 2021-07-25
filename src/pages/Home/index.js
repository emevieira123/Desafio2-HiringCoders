import React, { useState, useEffect } from 'react';

import { Container } from './style';
import { Body } from '../../components/styleComponents';

import api from '../../services/api';
import Menu from '../../components/menu';
import Fotter from '../../components/Fotter/footer';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, []);

  const handleCart = (index) => {
    const productStorage = JSON.stringify(data[index])
    localStorage.setItem(`@Produto-${index}`, productStorage)
  }

  return (
    <Body>
      <Menu />
      <img src="https://lojasdonadolar.vteximg.com.br/arquivos/ids/158833/CELULARES.jpg?v=637405341598070000" alt="" width="100%" height="auto" />
      <Container>
        <section>
          {data.map((prod, index) => (
            <div className="product-content" key={prod.id}>
              <img src={prod.photo} alt="iphone" width="200" height="200" />
              <h3>{prod.name}</h3>
              <span>{prod.description}</span>
              <h5>{prod.price}</h5>
              <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
            </div>
          ))}
        </section>
      </Container>
      <Fotter />
    </Body>
  );
}

export default Home;

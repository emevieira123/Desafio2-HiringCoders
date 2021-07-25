import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  section {
    height: auto;
    width: 100%;
    background: #e2e2e2;
    display: flex;
    justify-content: space-between;

    .product-content
    {
      display: grid;
      text-align: center;
      height: 330px;
      background: #fff;
      border-radius: 10px;
      padding: 12px;
      margin: 20px;

    }

    button
    {
      background: #4876FF;
      color: #fff;
      border-radius: 5px;
      border: 0;
      cursor: pointer;

    }

    button:hover
    {
      background: #3A5FCD;
    }

    .footer
    {
      position:absolute;
      bottom:0;
      width:100%;
      text-align: center;
      border: 1px solid blue;
      background: yellow;
    }
  }
`

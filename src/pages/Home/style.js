import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  section {
    height: auto;
    width: 100%;
    background: #fff;
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
      border: 1px solid #ccc;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    button
    {
      background: #4876FF;
      color: #fff;
      border-radius: 5px;
      border: 0;
      cursor: pointer;

    }

    span, h3, h5, img
    {
      background: #fff;
    }

    button:hover
    {
      background: #3A5FCD;
    }
  }
  @media(max-width: 720px)
{
  section
  {
    flex-direction: column;
  }
}
`

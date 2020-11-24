import styled from 'styled-components';

export const DetailsContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #a64230;
  color: #ffffff;

  h1 {
    font-size: 2rem;
    width: 205px;
  }

  @keyframes moveOne {
    0% {
      transform: translateX(-200px);
    }

    100% {
      transform: translateX(0);
    }
  }
`;


export const Info = styled.div`
      margin-top: 10px;
      padding: 40px;
      background-color: #222;
      color: #222;
      text-align: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      background: #fff;
      border-radius: 50px;

      img{
        width: 100%;
        height: 100%;

        }
      h2{
        text-transform: capitalize;
        margin-bottom: 0px;
        font-size: 32px;
        font-weight: bold;

        }
      p{
        margin-top: 5px;
        color: #000;
        font-size: 18px;

        }
`;

export const Employee = styled.div`
 text-align: left;
 background-color: '#000'
  p {
    font-size: 1rem;
    padding: 0.4rem;
  }

  section > p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  section > p > svg {
    margin-left: 0.4rem;
    color: #25d366;
  }
`;

export const PrevPage = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  @media (max-width: 700px) {
    top: 2.6rem;
    left: 0.8rem;
  }
`;

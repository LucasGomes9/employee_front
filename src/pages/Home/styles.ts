import styled from 'styled-components';

export const LandingContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  padding: 1rem;
  font-size: 1rem;
  background: #a64230;

  section:nth-child(1n) {
    border-radius: 0.8rem;
  }

  section + section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header {
    text-align: center;
    h1,
    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #ffffff;
      padding: 0.2rem 0.4rem;
      border-radius: 0.4rem;
    }

    h2 {
      margin-top: 1rem;
    }

    @media (max-width: 1000px) {
      h1,
      h2 {
        margin: 1rem 0;
      }
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    margin-top: 6rem;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  margin-top: 0.8rem;
  box-shadow: 1px 1px 2px #000000;

  a {
    font-size: 1.2rem;
    color: #000000;
    font-weight: bold;
  }

  svg {
    margin-left: 0.6rem;
    color: white;
  }

  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`;

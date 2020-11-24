import styled from 'styled-components';

export const View = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #a64230;
  color: #ffffff;

  form,
  h1 {
    width: 60%;
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    margin: 0.2rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;

    button {
      font-weight: bold;
      background: #ffffff;
      color: #000000;
      border-radius: 0.4rem;
      padding: 0.4rem 0.8rem;
    }

    input {
      padding: 0.4rem;
      border-radius: 0.4rem;
      font-size: 0.8rem;
      font-weight: bold;
      outline: none;
    }
  }

  @media (max-width: 700px) {
    padding: 1rem;
    h1 {
      margin-bottom: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: 0 auto;

      button {
        font-weight: bold;
        padding: 0.4rem 0.8rem;
      }
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem 0;

  @media (max-width: 700px) {
    width: 100%;

    p {
      font-size: 1.2rem;
    }

    input {
      width: 100%;
      padding: 0.4rem;
      border-radius: 0.2rem;
    }
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  @media (max-width: 700px) {
    top: 2.6rem;
    left: 0.8rem;
  }
`;

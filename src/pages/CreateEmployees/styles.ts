import styled from 'styled-components';

export const CreateContainer = styled.main`
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

export const Field = styled.div`
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

export const Modal = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  top: 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 90vh;
  background: #ffffff;
  color: #000000;
  padding: 0.4rem;

  span {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    svg {
      color: black;
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 1rem;
    }

    article h2 {
      padding: 0.8rem;
    }

    img {
      width: 80%;
      height: 20rem;
      border-radius: 0.4rem;
    }
  }

  div + div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    img {
      width: 200px;
      padding: 1rem;
    }
  }
`;

export const Actions = styled.div`
  padding: 0.4rem;
  background: #011627;
  border-radius: 0.4rem;
  margin: 1rem 0;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    position: initial;
    color: #ffffff;
    font-weight: bold;

    strong {
      margin: 0 0.2rem;
    }

    svg {
      color: white;
    }
  }

  span + span {
    margin-left: 0.4rem;
  }

  span:nth-child(4n) {
    padding: 0.4rem;
    background: #ffffff;
    border-radius: 0.2rem;
    text-decoration: none;

    a {
      color: #000000;
    }
  }

  @media (max-width: 700px) {
    width: 60vw;
    padding: 0.8rem;
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

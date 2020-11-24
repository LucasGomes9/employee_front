import styled from 'styled-components';

export const HomeContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;

  background: #a64230;
  color: #000000;

  font-size: 1rem;

  h1 {
    margin: 1rem 0;
    color: #ffffff;
  }

  h5 {
    color: #ffffff;
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

export const Employee = styled.div`
   margin: 20px;
   list-style: none;
   padding: 40px;
   border-radius: 50px;
   background-color: #f4f4f4;
   color: #222;
   text-align: center;

                img{
                width: 50%;
                height: 50%;
                padding-bottom: 10px;
                padding-top: 10px;
                }
                h2{
                    text-transform: capitalize;
                    margin-bottom: 0px;
                    font-size: 32px;
                    font-weight: normal;
                }
                p{
                    margin-top: 5px;
                    color: #000;
                    font-size: 32px;

                    font-weight: lighter;
   }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    strong {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 2rem;
      font-size: 1rem;
      margin: 0 0.4rem;
    }
    svg {
      margin-left: 0.2rem;
    }
  }

`;


export const EmployeeBar = styled.div`
  justify-content: e;
  align-items: center;
  height: 300px;
  width: 30%;
  background: #ffffff;
  border-radius: 0.4rem;
  margin: 0.6rem 0;
  padding: 0.6rem;


  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    strong {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 2rem;
      font-size: 1rem;
      margin: 0 0.4rem;
    }
    svg {
      margin-left: 0.2rem;
    }
  }


`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    height: 100%;
  }

  a + a {
    margin-left: 0.4rem;
  }

  a:nth-child(2n) {
    color: red;
  }
`;

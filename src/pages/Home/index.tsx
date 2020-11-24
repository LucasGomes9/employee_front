import React from 'react';

import { Link } from 'react-router-dom';
import { BsPersonPlus, BsFillPeopleFill } from 'react-icons/bs';

import { LandingContainer, Buttons, Button } from './styles';

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <section
        style={{
          background:
            'url(https://s.aficionados.com.br/imagens/pop-luke.jpg) no-repeat  center ',
        }}
      />
      <section>
        <header>
          <h1>Titio Pop Entreprise</h1>
          <h2>choose an option</h2>
        </header>

        <Buttons>
          <Button>
            <Link to="/list">List All Users</Link>
          </Button>
          <Button>
            <Link to="/create">Add New User</Link>
          </Button>
        </Buttons>
      </section>
    </LandingContainer>
  );
};

export default Landing;

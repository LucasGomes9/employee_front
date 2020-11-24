/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { Link, RouteComponentProps } from 'react-router-dom';

import { FcDownLeft } from 'react-icons/fc';
import { SiWhatsapp } from 'react-icons/si';
import { MdClose } from 'react-icons/md';


import { DetailsContainer, Employee, PrevPage, Info } from './styles';

import api from '../../services/api';

interface Employee {
  id: string;
  name: string;
  role: string;
  avatar: string;
  department: string;
  phone: string;
  email: string;
  likes: number;
  dislikes: number;
  created_at: Date;
  updated_at: Date;
}

interface MatchParams {
  id: string;
}

const Details: React.FC<RouteComponentProps<MatchParams>> = props => {
  const { match } = props;
  const { id } = match.params;

  const [employee, setEmployee] = useState<Employee>({} as Employee);

  async function loadEmployeeData() {
    const data = await api
      .get(`/employee/${id}`)
      .then(response => response.data);

    setEmployee(data);
  }

  useEffect(() => {
    loadEmployeeData();
  }, [id]);

  return (
    <DetailsContainer>
      <PrevPage>
        <Link to="/">
          <MdClose size={24} />
        </Link>
      </PrevPage>

      <h1>Funcionário</h1>
      {employee !== undefined ? (
        <Info>
          <div>
            <img alt=' ' src={`http://localhost:3333/files/${employee.avatar}`} />
            <h1>{employee.name}</h1>
            <p>
              Departamento:
              {` ${employee.department}`}
            </p>
            <p>
              Email:
              {` ${employee.email}`}
            </p>
            <a target="_blank" rel="noreferrer" href={`https://wa.me/${employee.phone}`}>
              <p>
                Telefone:
                {` ${employee.phone}`}
              </p>
            </a>

          </div>
        </Info>
) : (
        'Carregando'
      )}
    </DetailsContainer>
  );
};

export default Details;

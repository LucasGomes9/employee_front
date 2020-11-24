import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdInfoOutline, MdDelete,MdClose, MdCreate } from 'react-icons/md';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FcLike, FcDislike, FcDownLeft } from 'react-icons/fc';


import api from '../../services/api';

import { HomeContainer, Employee, Actions, PrevPage } from './styles';

interface EmployeeApiData {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  avatar: string;
  likes: number;
  dislikes: number;
  created_at: Date;
  updated_at: Date;
}

const Home: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeApiData[]>([]);
  const [reload, setReload] = useState(false);

  async function loadEmployees() {
    const data = await api.get('/employee').then(response => response.data);
    console.log(data);
    setEmployees([...data]);
  }

  async function handleDeleteEmployee(id: string) {
    await api.delete(`/employee/${id}`);
    setReload(true);
  }

  async function handleLike(id: string) {
    await api.patch(`/employee/like/${id}`);
    setReload(true);
  }

  async function handleDislike(id: string) {
    await api.patch(`/employee/dislike/${id}`);
    setReload(true);
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    loadEmployees();
    setReload(false);
  }, [reload]);

  return (
    <HomeContainer>
      <h1>Employees</h1>

      <PrevPage>
        <Link to="/">
          <MdClose size={24} />
        </Link>
      </PrevPage>

      {employees.length > 0 ? (
        employees.map(employee => (

          <Employee key={employee.id}>

            <p>{`${employee.name}`}</p>
            <a href={`/details/${employee.id}`}>
              <img alt="" src={`http://localhost:3333/files/${employee.avatar}`} />
            </a>

            <span>
              <AiFillDislike
                onClick={() => handleDislike(employee.id)}
                size={18}
              />
              <strong>
                {employee.dislikes}
              </strong>
              <strong>
                {employee.likes}
              </strong>
              <AiFillLike onClick={() => handleLike(employee.id)} size={18} />
            </span>
            <Actions>
              <Link
                to="/home"
                onClick={() => handleDeleteEmployee(employee.id)}
              >
                <MdDelete size={20} />
              </Link>
            </Actions>

          </Employee>

        ))
      ) : (
        <h5>Nenhum funcionario cadastrado</h5>
      )}
    </HomeContainer>
  );
};

export default Home;

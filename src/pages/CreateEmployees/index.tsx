import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import { MdDelete, MdClose } from 'react-icons/md';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FcLike, FcDislike, FcDownLeft } from 'react-icons/fc';

import { FiX } from 'react-icons/fi';
import api from '../../services/api';

import {View, Input, BackButton} from './styles';

interface Employee {
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  avatar: string;
  id: string;
  created_at: Date;
  updated_at: Date;
}

const CreateEmployees: React.FC = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState<File[]>();

  const [emitError, setEmitError] = useState(false);

  const [closeModal, setCloseModal] = useState(true);
  const [employee, setEmployee] = useState<Employee>();
  const [likeAndDislike, setLikeAndDislike] = useState({
    like: 0,
    dislikes: 0,
  });

  function handleAddImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files === null) {
      return;
    }
    const images = Array.from(event.target.files);
    setFile(images);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let error = false;

    if (file === null || file === undefined) {
      return;
    }

    const employeeData = new FormData();

    employeeData.append('name', name);
    employeeData.append('role', role);
    employeeData.append('department', department);
    employeeData.append('email', email);
    employeeData.append('phone', phone);

    employeeData.append('avatar', file[0]);

    employeeData.forEach(field => {
      if (field === '' || field === undefined) {
        setEmitError(true);
        error = true;
      }
    });

    if (error) {
      return;
    }

    const data = await api
      .post('/employee', employeeData)
      .then(response => response.data);

    if (data) {
      setEmployee({ ...data });
      setCloseModal(false);
    }

    handleCloseModal();

  }
  function handleCloseModal() {
    window.location.href = '/';
  }

  return (
    <View>
      <h1>Entre com os dados do funcionário</h1>

      {emitError === true ? (
        <strong style={{ color: 'red', fontSize: '1rem' }}>
          Erro ao enviar o formulário. Preencha todos os campos
        </strong>
      ) : (
        ''
      )}

      <BackButton>
        <Link to="/">
          <MdClose size={24} />
        </Link>
      </BackButton>

      <form onSubmit={handleSubmit}>
        <Input>
          <p>Nome:</p>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Input>

        <Input>
          <p>Função:</p>
          <input
            type="text"
            placeholder="Digite sua função"
            value={role}
            onChange={event => setRole(event.target.value)}
          />
        </Input>

        <Input>
          <p>Departamento:</p>
          <input
            type="text"
            placeholder="Digite seu departamento"
            value={department}
            onChange={event => setDepartment(event.target.value)}
          />
        </Input>

        <Input>
          <p>Email:</p>
          <input
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Input>

        <Input>
          <p>Telefone:</p>
          <input
            type="text"
            placeholder="Digite seu telefone"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
        </Input>

        <Input>
          <p>Foto:</p>
          <input type="file" id="avatar" onChange={handleAddImage} />
        </Input>

        <button type="submit">Cadastrar</button>
      </form>
    </View>
  );
};

export default CreateEmployees;

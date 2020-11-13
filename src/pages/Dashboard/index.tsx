import React from 'react'

import logoImg from '../../assets/logo.svg'

import { Title, Form } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o node do repositório" />
        <button type="submit">Perquisar</button>
      </Form>
    </>
  )
}

export default Dashboard

import React from 'react';
import bee from '../../assets/bee.png';
import beespelling from '../../assets/beespelling.jpg';

import {
  Container,
  Content,
  Header,
  Image,
  ImageBee,
  Form,
  Title,
  Input,
  ButtonSignUp,
  Div,
} from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <Header>
        Spelling Bee
        <Image src={bee} alt="bee" />
      </Header>
      <Div>
        <ImageBee src={beespelling} alt="beespelling" />
        <Form>

          <Title>Cadastro</Title>

          <Input type="name" placeholder="Nome e sobrenome" />
          <Input type="username" placeholder="Nome de Usuário" />
          <Input type="password" placeholder="Senha" />

          <ButtonSignUp>Cadastrar</ButtonSignUp>
        </Form>
      </Div>
    </Content>
  </Container>
);

export default SignUp;

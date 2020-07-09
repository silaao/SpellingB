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
  ButtonSignIn,
  Div,
  ButtonSignUp,
} from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <Header>
        Spelling Bee
        <Image src={bee} alt="bee" />
      </Header>
      <Div>
        <ImageBee src={beespelling} alt="beespelling" />
        <Form>

          <Title>Login</Title>

          <Input type="username" placeholder="Nome de Usuário" />
          <Input type="password" placeholder="Senha" />

          <ButtonSignIn to="/LevelScreen">Entrar</ButtonSignIn>
          <ButtonSignUp to="/SignUp">
            Não tenho cadastro
          </ButtonSignUp>
        </Form>
      </Div>
    </Content>
  </Container>
);

export default SignIn;

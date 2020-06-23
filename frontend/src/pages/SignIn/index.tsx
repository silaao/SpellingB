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

          <Title>Sign In</Title>

          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />

          <ButtonSignIn>Entrar</ButtonSignIn>
          <ButtonSignUp>
            {/* <FiLogOut size={28} color="#fff" /> */}
            Não tenho cadastro
          </ButtonSignUp>
        </Form>
      </Div>
    </Content>
  </Container>
);

export default SignIn;

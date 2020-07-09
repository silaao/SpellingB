import React from 'react';
import ImageBlue from '../../assets/ImageBlue.png';

import {
  Container,
  Content,
  Header,
  Image,
  Informations,
  Title,
  Buttons,
  ButtonOpenGameRoom,
  ButtonLevelWordPreview,

  // ButtonSignIn,
  Div,
  // ButtonSignUp,
} from './styles';

const PrepareGame: React.FC = () => (
  <Container>
    <Content>
      <Header>
        Welcome to level Blue
      </Header>
      <Title>Instructions</Title>
      <Div>

        <Informations>
          1. When opening the students game room, be sure to move this window to projectors screen.
          2. Wait for all students to enter to start the game.
          3. If any student is unable to enter the room, register them.
        </Informations>
        <Image src={ImageBlue} alt="ImageBlue" />
      </Div>
      <Buttons>
        <ButtonOpenGameRoom> Open Game Room </ButtonOpenGameRoom>
        <ButtonLevelWordPreview> LevelWordPreview </ButtonLevelWordPreview>
      </Buttons>
    </Content>
  </Container>
);

export default PrepareGame;

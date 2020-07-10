import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
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
  ButtonBack,
  Div,
  Text,
} from './styles';

const PrepareGame: React.FC = () => (
  <Container>
    <Content>
      <Header>
        <ButtonBack to="">
          <MdKeyboardBackspace size={35} color="#333333" />
        </ButtonBack>
        Welcome to level Blue
      </Header>
      <Title>Instructions</Title>
      <Div>

        <Informations>
          <Text>
            <Text>1. When opening the students game room, be sure to move </Text>
            <Text>this window to projectors screen.</Text>
            <Text>2. Wait for all students to enter to start the game.</Text>
            <Text>3. If any student is unable to enter the room, register them.</Text>
          </Text>
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

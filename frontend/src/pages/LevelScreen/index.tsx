import React from 'react';
import {
  MdVideogameAsset, MdHistory, MdPerson, MdExitToApp,
} from 'react-icons/md';
import bee1 from '../../assets/bee1.png';
import bee2 from '../../assets/bee2.png';
import bee3 from '../../assets/bee3.png';
import bee4 from '../../assets/bee4.png';

import {
  Container,
  Header,
  Titulo,
  Logotipo1,
  TituloInfo,
  ContainerInformacoes,
  Informacoes,
  TituloInformacoes,
  TextoInformacoes,
  ImageBee1,
  // Negrito2,
  // List,
  ButtonHeader,
  // ListItem,

} from './styles';

const LevelScreen: React.FC = () => (
  <Container>
    <Header>
      <Logotipo1>
        Logotipo
      </Logotipo1>

      {/* <List>
        <ListItem> */}
      <ButtonHeader to="">
        <MdVideogameAsset size={35} color="#666666" />
      </ButtonHeader>
      {/* </ListItem> */}

      {/* <ListItem> */}
      <ButtonHeader to="">
        <MdHistory size={35} color="#666666" />
      </ButtonHeader>
      {/* </ListItem> */}

      {/* <ListItem> */}
      <ButtonHeader to="">
        <MdPerson size={35} color="#666666" />
      </ButtonHeader>
      {/* </ListItem> */}

      {/* <ListItem> */}
      <ButtonHeader to="">
        <MdExitToApp size={35} color="#666666" />
      </ButtonHeader>
      {/* </ListItem> */}
      {/* </List> */}

      <Titulo />

    </Header>

    <TituloInfo> Selecione o grupo de palavras para criação de Jogo </TituloInfo>
    <ContainerInformacoes>

      <Informacoes>
        <ImageBee1 src={bee1} alt="bee1" />
        <TituloInformacoes> Blue Group </TituloInformacoes>

        <TextoInformacoes>
          For beginners, just kidding.
        </TextoInformacoes>
      </Informacoes>

      <Informacoes>
        <ImageBee1 src={bee2} alt="bee2" />

        <TituloInformacoes> Red Group </TituloInformacoes>

        <TextoInformacoes>
          Time to grow and start challenges.
          {/* <Negrito2>AAAAA</Negrito2> */}

        </TextoInformacoes>
      </Informacoes>

      <Informacoes>
        <ImageBee1 src={bee3} alt="bee3" />

        <TituloInformacoes> Yellow Group </TituloInformacoes>

        <TextoInformacoes>
          Now that we see who the kids are and who the players are.
        </TextoInformacoes>

      </Informacoes>

      <Informacoes>
        <ImageBee1 src={bee4} alt="bee4" />

        <TituloInformacoes> Yellow Green </TituloInformacoes>

        <TextoInformacoes>
          For those who want a real challenge
        </TextoInformacoes>

      </Informacoes>
    </ContainerInformacoes>

  </Container>
);

export default LevelScreen;

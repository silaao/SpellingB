import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;

  align-items: center;

  overflow: hidden;

  background-color: #fcfcfc;

`;

export const Header = styled.div`
  width: 90vw;
  height: 10vh;
  margin-top: 30px;

  border: 1px solid red;
display: flex;
  /* display: flex; */
`;

export const Logotipo1 = styled.h1`
  color: #383838;
  font-size: 30px;
  /* font-weight:  bold; */
  margin-top: 50px;

`;

export const List = styled.ul`
  width: 550px;
  height: 100px;


/*
  border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

`;

export const ListItem = styled.li`
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 60px;
  margin-left: 50px;
`;

export const Titulo = styled.h3`
  color: #383838;
  font-size: 38px;
  font-weight: 300;

`;

export const TituloInfo = styled.h2`
  /* border: 1px solid red; */
  color: #383838;
  font-size: 38px;
  font-weight: 300;
  margin-top: 70px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ItemLista = styled.li`
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 60px;
  margin-left: 50px;
`;

export const ButtonHeader = styled(Link)`
  width: 100%;
  height: 100%;

  border-radius: 6px;
  border: none;

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fcfcfc;
`;

export const ContainerInformacoes = styled.div`
  width:90vw;
  height:30vh;

  border: 1px solid red;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;

`;

export const Informacoes = styled.section`
  width: 300px;

  border: 1px solid red;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 0 50px;
flex-wrap: wrap;
`;

export const ImageBee1 = styled.img`
/* border-style: solid; */
width: 292px;
height: 252px;
align-self: center;`;

export const TituloInformacoes = styled.h1`
  color: #383838;
  font-size: 28px;
  font-weight: 500;
  position: absolute;
  margin: 30px 0;
`;

export const TextoInformacoes = styled.h2`
  color: #383838;
  font-size: 18px;
  font-weight: lighter;
  text-align: justify;
  line-height: 30px;
  letter-spacing: 5%;
  position: absolute;
`;

export const Negrito2 = styled.span`
  color: #383838;
  font-size: 18px;
  font-weight:  bold;
`;

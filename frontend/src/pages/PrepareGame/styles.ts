import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  padding: 80px;
  /* align-items: center; */
`;

export const Content = styled.div`
  width: 1000vw;
  height: 90vh;
  display: flex;
  flex-direction:column;
  background-color: #ffffff;
  /* border-radius: 50px; */
  /* box-shadow: 5px 5px 15px #333; */
  border-style: solid;
  `;

export const Header = styled.h1`
    font-size: 30px;
    width: 100%;
    height: 110px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    border-style: solid;
    /* border-radius: 50px; */
    font-style: normal;
font-weight: normal;
  `;

export const Div = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  /* flex-direction:row; */
  background-color: #ffffff;
  border-style:solid;
  /* border-radius: 50px; */
/* margin-top: 50px; */
`;
export const Title = styled.h1`
  color: #304EC7;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 60px;
font-style: normal;
font-weight: bold;

`;

export const Informations = styled.h3`
  color: black;
  font-size: 20px;
font-style: normal;
font-weight: normal;
  /* font-weight: bold; */
  /* margin-bottom: 60px; */
  word-wrap: break-word;


`;

export const Image = styled.img`
  /* border-style: solid; */
  margin-left: 150px;
  width: 300px;
  height:300px;
`;
// export const ImageBee = styled.img`
// /* border-style: solid; */
// margin-left:40px;
// width: 520px;
// height: 520px;
// align-self: center;
// margin-left: 16%;`;

// export const Form = styled.form`
//   width: 100%;
//   max-width: 350px;
//   margin: 0 5%;
//   background-color: #8acbfa;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* border-style: solid; */
//   height: 65%;
//   border-radius: 50px;
//   align-self: center;
//   box-shadow: 5px 5px 15px #333;
//   margin-left: 10%;

// `;

// export const Input = styled.input`
//   width: 80%;
//   max-width: 280px;
//   height: 46px;
//   border-radius: 8px;
//   border: none;
//   background-color: #fff;
//   margin-bottom: 14px;
//   padding: 10px;

//   font-size: 16px;

// `;

export const Buttons = styled.div`
width: 100%;
height: 200px;
display:flex;
  justify-content: center;
  border-style: solid;
  border-color: red;
flex-flow: column;

`;
export const ButtonOpenGameRoom = styled.button`
  width: 80%;
  max-width: 280px;
  height: 46px;
  border-radius: 6px;
  border: none;
  background-color: #304EC7;
  color: #ffffff;
  display: compact;
`;
export const ButtonLevelWordPreview = styled.button`
  width: 80%;
  max-width: 280px;
  height: 46px;
  border-radius: 6px;
  border: none;
  background-color: #304EC7;
  color: #ffffff;
`;

// export const ButtonSignUp = styled(Link)`
//   width: 80%;
//   max-width: 280px;

//   font-size: 18px;
//   font-weight: 500;
//   color: #fff;

//   margin-top: 18px;
//   cursor: pointer;

//   display: flex;
//   align-items: center;

//   & > svg {
//     margin-right: 8px;
//   }
// `;

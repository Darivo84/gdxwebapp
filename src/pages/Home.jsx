import React from 'react';
import styled from 'styled-components';

// Components
import LoginButton from '../components/buttons/LoginButton';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; 

const Title = styled.h1`
  color: #5c5858;
  font-family: 'Nunito';
  padding-bottom: 15px;
`;

const InfoBox = styled.div`
  width: 50vw;
  height: 60vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
`;

const SubTitle = styled.p`
  color: #fff;
  font-family: 'Nunito';
  font-size: 18px;
  text-align: center;
  padding-bottom: 15px;
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Global Data Exchange | GDX</Title>
      <InfoBox>
        <SubTitle> Please login to access our site</SubTitle>
        <LoginButton />
      </InfoBox>
    </Container>
  )
}

export default Home

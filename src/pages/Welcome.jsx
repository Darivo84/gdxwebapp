import React from 'react'
import styled from 'styled-components';

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

const Welcome = () => {
  return (
    <Container>
      <Title>Thanks for logging in.</Title>
    </Container>
  )
}

export default Welcome

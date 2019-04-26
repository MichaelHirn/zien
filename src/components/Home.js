import React from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Wrapper = styled.div`
  margin-top: 50%;
  text-align: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 5em;
`;

const Border = styled.div`
  display: inline-block;
  width: 33px;
  height: 1px;
  background-color: #B2B2B2;
  margin-top: 2em;
`;

const Button = styled.button`
  background-color: ${props => props.transparent ? 'transparent' : '#ffffff'};
  border: 1px solid ${props => props.transparent ? 'transparent' : '#202020'};
  border-radius: 2px;
  font-size: inherit;
  padding: 1.3em 4.3em;
  display: block;
`;

const ActionWrapper = styled.div`
  margin-top: 4em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-bottom: 1em;
  }

`;

function Home() {
  return (
    <Flex justifyContent="center">
      <Box width="40em">
        <Wrapper>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <p>Collect Scarce Editions by <br/> Contemporary Artists</p>
          <Border/>
          <ActionWrapper>
            <Button>Create an account</Button>
            <Button transparent>Sign in</Button>
          </ActionWrapper>
        </Wrapper>
      </Box>
    </Flex>
  );
}

export default Home;

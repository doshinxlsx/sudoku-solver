import React from 'react';
import { useLandingPage } from './hooks';
import {
  Description,
  DescriptionContainer,
  EmailForm,
  EmailFormContainer,
  EmailInput,
  EmailSubmitButton,
  EmailTitle,
  LandingPageContainer,
  PlayButton,
  PlayButtonContainer,
  Title,
  TitleContainer,
} from './styles';

const LandingPage = () => {
  const { handleFakeApiCall, handleNavigate } = useLandingPage();

  return (
    <LandingPageContainer>
      <TitleContainer>
        <Title>Sudoku solver</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Description>
      </DescriptionContainer>

      <EmailFormContainer>
        <EmailTitle>Subscribe to our email list!</EmailTitle>

        <EmailForm>
          <EmailInput type='email' name='email' placeholder='Type your email here..' />
          <EmailSubmitButton type='submit' onClick={handleFakeApiCall}>
            Subscribe
          </EmailSubmitButton>
        </EmailForm>
      </EmailFormContainer>

      <PlayButtonContainer>
        <PlayButton onClick={handleNavigate}>Play a Game</PlayButton>
      </PlayButtonContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;

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
  ErrorMessage,
  LandingPageContainer,
  PlayButton,
  PlayButtonContainer,
  SuccessMessage,
  Title,
  TitleContainer,
} from './styles';

const LandingPage = () => {
  const { handleFakeApiCall, handleNavigate, errorMsg, successMsg, formValue, onChangeInput } =
    useLandingPage();

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

        <EmailForm onSubmit={handleFakeApiCall}>
          <EmailInput
            type='email'
            name='email'
            value={formValue.email}
            onChange={onChangeInput}
            placeholder='Type your email here..'
          />
          <EmailSubmitButton type='submit'>Subscribe</EmailSubmitButton>
        </EmailForm>
      </EmailFormContainer>
      {successMsg && <SuccessMessage>{successMsg}</SuccessMessage>}
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}

      <PlayButtonContainer>
        <PlayButton onClick={handleNavigate}>Play a Game</PlayButton>
      </PlayButtonContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;

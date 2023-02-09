import React from 'react';
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
  const handleFakeApiCall = (event) => {
    event.preventDefault();
    const timer = setTimeout(() => {
      alert('You have successfully subscribed to our email list!');
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <LandingPageContainer>
      <TitleContainer>
        <Title>Sudoku solver</Title>
      </TitleContainer>
      <DescriptionContainer>
        <Description>
          Here, you can enter a sudoku puzzle and have it solved for you. If the puzzle is
          unsolvable, we will let you know.
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
        <PlayButton>Play game</PlayButton>
      </PlayButtonContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;

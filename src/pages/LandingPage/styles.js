import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  border-radius: 6px;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  flex-direction: column;
  padding: 15px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;

export const Title = styled.h2`
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin: 0 15px;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const EmailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  padding: 5px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const EmailTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 15px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }
`;

export const EmailForm = styled.form`
  position: relative;
  width: 100%;
  height: 35px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 35px;
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 6px;
  margin: 0 0 10px 0;
  padding: 0 0 0 15px;
  position: relative;
  font-weight: 600;

  &::placeholder {
    color: black;
    font-weight: 600;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const EmailSubmitButton = styled.button`
  width: 100px;
  height: 35px;
  background: transparent;
  border: none;
  font-weight: 600;
  position: absolute;
  top: 1.5px;
  right: -5px;

  &:hover {
    cursor: pointer;
  }
`;

export const PlayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

export const PlayButton = styled.button`
  width: 50%;
  padding: 15px;
  background: #7cf7de;
  border: none;
  border-radius: 6px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -15px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

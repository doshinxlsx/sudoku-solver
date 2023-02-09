import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  border-radius: 6px;
  background: #edf7f6;
  width: 100%;
  flex-direction: column;

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
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin: 0 15px;
`;

export const Description = styled.p`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const EmailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const EmailTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 15px 0;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const EmailInput = styled.input`
  display: flex;
  width: 100%;
  background: transparent;
  border: 1px solid #a28089;
  border-radius: 6px;
  padding: 5px;
  margin: 0 0 10px 0;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const EmailSubmitButton = styled.button`
  width: 100px;
  padding: 5px;
  background: #7cf7de;
  border: none;
  border-radius: 6px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

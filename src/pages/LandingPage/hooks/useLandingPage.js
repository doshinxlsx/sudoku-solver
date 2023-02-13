import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLandingPage = () => {
  const [formValue, setFormValue] = useState({
    email: '',
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const newsLetterData = new FormData();
  const navigate = useNavigate();

  newsLetterData.append('email', formValue.email);

  const handleFakeApiCall = async (event) => {
    event.preventDefault();

    try {
      await axios({
        method: 'get',
        url: 'https://mocki.io/v1/1dd46c28-2e44-4f39-a34d-8cf957c87aa8',
        headers: { 'Content-Type': 'application/json' },
      });
      setSuccessMsg('Successfully signed up to the newsletter!');
    } catch (error) {
      setErrorMsg('Failed to sign up to the newsletter!');
    }
  };

  const onChangeInput = (event) => {
    setFormValue({ email: event.target.value });
  };

  const handleNavigate = () => {
    navigate('/playground');
  };

  return {
    handleFakeApiCall,
    handleNavigate,
    errorMsg,
    formValue,
    onChangeInput,
    successMsg,
  };
};

export default useLandingPage;

import { useNavigate } from 'react-router-dom';

const useLandingPage = () => {
  const navigate = useNavigate();

  const handleFakeApiCall = (event) => {
    event.preventDefault();
    const timer = setTimeout(() => {
      alert('You have successfully subscribed to our email list!');
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleNavigate = () => {
    navigate('/playground');
  };

  return {
    handleFakeApiCall,
    handleNavigate,
  };
};

export default useLandingPage;

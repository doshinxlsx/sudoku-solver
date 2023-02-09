import { AppContainer } from './assets/styles';
import GlobalStyle from './globalStyle';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <LandingPage />
    </AppContainer>
  );
}

export default App;

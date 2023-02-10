import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppContainer } from './assets/styles';
import { LandingPage, PlayGround } from './pages';
import GlobalStyle from './globalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/playground',
    element: <PlayGround />,
  },
]);

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <RouterProvider router={router} />
    </AppContainer>
  );
};

export default App;

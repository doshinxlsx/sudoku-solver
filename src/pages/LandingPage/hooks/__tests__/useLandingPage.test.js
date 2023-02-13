import { useNavigate } from 'react-router-dom';
import useLandingPage from '../useLandingPage';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

describe('useLandingPage hook', () => {
  let mockedNavigate;

  beforeEach(() => {
    mockedNavigate = jest.fn();
    useNavigate.mockReturnValue(mockedNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('exports an object with two functions, handleFakeApiCall and handleNavigate', () => {
    const hook = useLandingPage();

    expect(typeof hook.handleFakeApiCall).toBe('function');
    expect(typeof hook.handleNavigate).toBe('function');
  });

  it('handleFakeApiCall function displays an alert after 3 seconds', async () => {
    const hook = useLandingPage();

    window.alert = jest.fn();
    jest.useFakeTimers();
    hook.handleFakeApiCall({ preventDefault: jest.fn() });
    jest.runAllTimers();

    expect(window.alert).toHaveBeenCalledWith(
      'You have successfully subscribed to our email list!',
    );
  });

  it('handleNavigate function calls the useNavigate hook with "/playground"', () => {
    const hook = useLandingPage();

    hook.handleNavigate();

    expect(navigate).toHaveBeenCalledWith('/playground');
  });
});

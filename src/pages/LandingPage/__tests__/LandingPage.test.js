import { render, screen, fireEvent } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('displays title and description', () => {
    render(<LandingPage />);

    expect(screen.getByTestId('title')).toHaveTextContent('Sudoku solver');
    expect(screen.getByTestId('description')).toHaveTextContent(
      'Here, you can enter a sudoku puzzle and have it solved for you. If the puzzle is unsolvable, we will let you know.',
    );
  });

  it('subscribes to email list', async () => {
    const fakeApiCall = jest.fn();
    jest.mock('./hooks', () => {
      return () => ({
        handleFakeApiCall: fakeApiCall,
        handleNavigate: jest.fn(),
      });
    });

    render(<LandingPage />);

    const emailInput = screen.getByTestId('email-input');
    const emailSubmitButton = screen.getByTestId('email-submit-button');
    const email = 'test@example.com';

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(emailSubmitButton);

    expect(fakeApiCall).toHaveBeenCalled();
  });

  it('navigates to game page', () => {
    const handleNavigate = jest.fn();
    jest.mock('./hooks', () => {
      return () => ({
        handleFakeApiCall: jest.fn(),
        handleNavigate,
      });
    });

    render(<LandingPage />);

    const playButton = screen.getByTestId('play-button');
    fireEvent.click(playButton);

    expect(handleNavigate).toHaveBeenCalled();
  });
});

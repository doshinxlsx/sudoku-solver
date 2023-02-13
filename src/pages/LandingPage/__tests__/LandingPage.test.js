import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LandingPage from '../LandingPage';
import { useLandingPage } from '../hooks';

jest.mock('../hooks', () => ({
  mockHandleFakeApiCall: jest.fn(),
  mockHandleNavigate: jest.fn(),
}));

describe('LandingPage', () => {});

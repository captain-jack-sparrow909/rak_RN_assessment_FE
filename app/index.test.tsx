import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import RegisterScreen from './index';
import { Alert } from 'react-native';
import { sendRequest } from '@/utils/sendRequest';
import { BACKEND_URL, POST } from '@/constants/constants';

jest.mock('@/utils/sendRequest');
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('RegisterScreen', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<RegisterScreen />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should update form fields correctly', async () => {
    const { getByTestId, toJSON } = render(<RegisterScreen />);
    const nameInput = getByTestId('fullName');
    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');

    fireEvent.changeText(nameInput, 'John Doe');
    fireEvent.changeText(emailInput, 'john@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    
    expect(toJSON()).toMatchSnapshot();
  });

  it('should show an alert when the form is incomplete', () => {
    const alertSpy = jest.spyOn(Alert, 'alert');
    const { getByText } = render(<RegisterScreen />);
    const signUpButton = getByText('SIGN UP');

    fireEvent.press(signUpButton);

    expect(alertSpy).toHaveBeenCalledWith(
      'Incomplete Form',
      'Please fill in all fields',
      [{ text: 'OK' }]
    );
  });

  it('should send a request when the form is complete', async () => {
    const { getByTestId, getByText } = render(<RegisterScreen />);
    const nameInput = getByTestId('fullName');
    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const signUpButton = getByTestId('signUp');
    const checkbox = getByTestId('checkbox');


        fireEvent.changeText(nameInput, 'John Doe');
        fireEvent.changeText(emailInput, 'john@example.com');
        fireEvent.changeText(passwordInput, 'password123');
        fireEvent.press(checkbox);
        fireEvent.press(signUpButton);
  
    await waitFor(() => {
      expect(sendRequest).toHaveBeenCalledWith(
        `${BACKEND_URL}`,
        POST,
        {
          name: 'John Doe',
          email: 'john@example.com',
          password: 'password123',
        }
      );
    });
  });
});
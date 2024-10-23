import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

describe('ButtonComponent', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<ButtonComponent title="Test Button" onPress={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<ButtonComponent title="Test Button" onPress={onPressMock} />);
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalled();
  });

});
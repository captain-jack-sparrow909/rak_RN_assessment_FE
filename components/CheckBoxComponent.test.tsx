import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CheckboxComponent from './CheckBoxComponent';

describe('CheckboxComponent', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<CheckboxComponent value={false} onValueChange={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call onValueChange when checkbox is pressed', () => {
    const onValueChangeMock = jest.fn();
    const { getByTestId } = render(<CheckboxComponent value={false} onValueChange={onValueChangeMock} />);
    fireEvent.press(getByTestId('checkbox'));
    expect(onValueChangeMock).toHaveBeenCalledWith(true);
  });

  it('should render correctly based on the value prop', () => {
    const { getByTestId, rerender } = render(<CheckboxComponent value={false} onValueChange={() => {}} />);
    expect(getByTestId('checkbox').props.style).toEqual({"alignItems": "center", "flexDirection": "row", "opacity": 1});

    rerender(<CheckboxComponent value={true} onValueChange={() => {}} />);
    expect(getByTestId('checkbox').props.style).toEqual({"alignItems": "center", "flexDirection": "row", "opacity": 1});
  });

  it('should apply custom style correctly', () => {
    const customStyle = {"alignItems": "center", "backgroundColor": "red", "flexDirection": "row", "opacity": 1};
    const { getByTestId } = render(<CheckboxComponent value={false} onValueChange={() => {}} style={customStyle} />);
    expect(getByTestId('checkbox').props.style).toEqual(customStyle);
  });
});
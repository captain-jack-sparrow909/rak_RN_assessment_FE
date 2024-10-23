import React from 'react';
import { render } from '@testing-library/react-native';
import ConfirmationIconComponent from './ConfirmationIconComponent';

describe('ConfirmationIconComponent', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<ConfirmationIconComponent />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the Image component with correct source and style', () => {
    const { getByTestId } = render(<ConfirmationIconComponent />);
    const image = getByTestId('confirmation-icon');
    expect(image.props.source).toEqual(require('../assets/success.png'));
    expect(image.props.style).toEqual({ width: 220, height: 220 });
  });
});
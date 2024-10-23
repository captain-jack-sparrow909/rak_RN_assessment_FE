import React from 'react';
import { render } from '@testing-library/react-native';
import SubmissionSuccess from './submission-success';
import RAKLogoComponent from '@/components/RAKLogoComponent';
import ConfirmationIconComponent from '@/components/ConfirmationIconComponent';

describe('SubmissionSuccess', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<SubmissionSuccess />);
    expect(toJSON()).toMatchSnapshot();
  });


  it('should render the success message and additional message', () => {
    const { getByText } = render(<SubmissionSuccess />);
    expect(getByText('Successfully Submitted!')).toBeTruthy();
    expect(getByText('Our representative will get in touch with you shortly')).toBeTruthy();
  });
});
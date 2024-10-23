import axios from 'axios';
import { sendRequest } from './sendRequest';

describe('sendRequest', () => {

  it('should throw an error with the correct message when an Axios error occurs', async () => {
    const mockError = {
      response: {
        data: {
          errors: {
            field1: 'error1',
            field2: 'error2',
          },
        },
      },
    };
    jest.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

    await expect(sendRequest('https://example.com', 'POST', { key: 'value' })).rejects.toThrow('An error occurred');
  });

  it('should throw an error with the correct message when a non-Axios error occurs', async () => {
    const mockError = new Error('Non-Axios error');
    jest.spyOn(axios, 'post').mockRejectedValueOnce(mockError);

    await expect(sendRequest('https://example.com', 'POST', { key: 'value' })).rejects.toThrow('An error occurred');
  });
});
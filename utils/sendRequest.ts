import axios from "axios";

export const sendRequest = async (url: string, method: string, data: any) => {
  try {
    const response = await axios({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

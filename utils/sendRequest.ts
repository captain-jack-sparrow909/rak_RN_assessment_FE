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
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.errors && Object.values(error.response.data.errors).join('\n')  || error.response.data.message || "An error occurred";
      throw new Error(errorMessage);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};
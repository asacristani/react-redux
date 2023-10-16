import axios from 'axios';

const preqinApiUrl = import.meta.env.VITE_PREQIN_API_URL;

export const getTokenFromAPI = async () => {
  const userName = import.meta.env.VITE_PREQIN_API_USERNAME;
  const apiKey = import.meta.env.VITE_APP_PREQIN_API_PASSWORD;

  const data = new URLSearchParams();
  data.append('username', userName);
  data.append('apikey', apiKey);

  try {
    const response = await axios.post(preqinApiUrl + '/connect/token', data, {
      headers: {
        accept: 'application/json',
      },
    });

    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};
export const getInvestorsFromAPI = async (token) => {
  try {
    const response = await axios.get(preqinApiUrl + '/api/Investor', {
      params: {
        FirmID: '2670,2792,332,3611',
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

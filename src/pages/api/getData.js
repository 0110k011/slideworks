import axios from 'axios';

async function GetData(state, url) {
  try {
    const response = await axios.get(url);
    state(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

export default GetData;
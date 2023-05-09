import state from "./state.js";

const fetchDataMovie = async (endpoint) => {
    const API_KEY = state.api.key;
    const API_URL = state.api.baseUrl;
  
    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}`);
  
    const data = await response.json();
    return data;
  };
  export default fetchDataMovie;
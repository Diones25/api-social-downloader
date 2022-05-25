import axios from "axios";

const api = axios.create({
  
  headers: {
    "X-RapidAPI-Host": "socialdownloader.p.rapidapi.com",
    "X-RapidAPI-Key": "657511860bmshc64d95031b8d75cp1a1e0bjsn725a1c9d6249",
  },
});

export default api;

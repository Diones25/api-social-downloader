import axios from "axios";

const apiYoutube = axios.create({
  headers: {
    "X-RapidAPI-Host": "yt-downloader1.p.rapidapi.com",
    "X-RapidAPI-Key": "657511860bmshc64d95031b8d75cp1a1e0bjsn725a1c9d6249",
  },
  params: {
    key: "5145f7563cd789876e861e2dba4d15763501c84256ae3ac182116233173acaf0",
  },
});

export default apiYoutube;

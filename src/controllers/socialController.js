import api from "../service/api.js";
import apiYoutube from '../service/apiYoutube.js'

const getDownloadYoutube = async (req, res) => {
    const url = req.query["url"];    

    await apiYoutube.get(`https://yt-downloader1.p.rapidapi.com/api?url=${url}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(response.status).json(response.data);

    }).catch(() => {
        return res.status(400).json({ message: " Link não encontrado!" });
    });
}

const getDownloaTikTok = async (req, res) => {
    const video_link = req.query["video_link"];

    await api.get(`https://socialdownloader.p.rapidapi.com/api/tik-tok/video?video_link=${video_link}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(response.status).json(response.data);

    }).catch(() => {
        return res.status(400).json({ message: " Link não encontrado!" });
    });    
}

const getDownloaFacebook = async (req, res) => {
    const video_link = req.query["video_link"];

    await api.get(`https://socialdownloader.p.rapidapi.com/api/facebook/video?video_link=${video_link}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(response.status).json(response.data);

    }).catch(() => {
        return res.status(400).json({ message: " Link não encontrado!" });
    });    
}

const getDownloaTwitter = async (req, res) => {
    const video_link = req.query["video_link"];

    await api.get(`https://socialdownloader.p.rapidapi.com/api/twitter/video?video_link=${video_link}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(response.status).json(response.data);

    }).catch(() => {
        return res.status(400).json({ message: " Link não encontrado!" });
    });    
}

const getDownloaSnapchat = async (req, res) => {
    const username = req.query["username"];

    await api.get(`https://socialdownloader.p.rapidapi.com/api/snapchat/any?username=${username}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(response.status).json(response.data);

    }).catch(() => {
        return res.status(400).json({ message: " Link não encontrado!" });
    });    
}

export default {
    getDownloadYoutube,
    getDownloaTikTok,
    getDownloaFacebook,
    getDownloaTwitter,
    getDownloaSnapchat
};
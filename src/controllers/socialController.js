import api from "../service/api.js";

const getDownloadYoutube = async (req, res) => {
    const video_link = req.query["video_link"];    

    await api.get(`https://socialdownloader.p.rapidapi.com/api/youtube/video?video_link=${video_link}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);

    }).catch(() => {
        return res.status(400).json({ message: " Link não encontrado!" });
    });
}

const getDownloaTikTok = async (req, res) => {
    const video_link = req.query["video_link"];

    await api.get(`https://socialdownloader.p.rapidapi.com/api/tik-tok/video?video_link=${video_link}`).then((response) => {
        console.log(JSON.stringify(response.data));
        return res.status(200).json(response.data);

    }).catch(() => {
        return res.status(400).json({ message: " Link não encontrado!" });
    });    
}

export default {
    getDownloadYoutube,
    getDownloaTikTok
};
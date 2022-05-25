import { Router } from "express";
import youtubeController from '../controllers/socialController.js'
const router = Router();

router.get('/download/youtube',  youtubeController.getDownloadYoutube);
router.get('/download/tiktok',  youtubeController.getDownloaTikTok);

export default router;
/*
/api/tik-tok/audio
/api/tik-tok/video
/api/facebook/video

/api/twitter/video
/api/vkontakte/video
/api/snapchat/any
/api/instagram/stories
/api/instagram/highlights
/api/instagram/highlight/{id}
*/
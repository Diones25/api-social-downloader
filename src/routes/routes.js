import { Router } from "express";
import youtubeController from '../controllers/socialController.js'
const router = Router();

router.get('/download/youtube',  youtubeController.getDownloadYoutube);
router.get('/download/tiktok',  youtubeController.getDownloaTikTok);
router.get('/download/facebook',  youtubeController.getDownloaFacebook);
router.get('/download/twitter',  youtubeController.getDownloaTwitter);
router.get('/download/snapchat',  youtubeController.getDownloaSnapchat);

export default router;
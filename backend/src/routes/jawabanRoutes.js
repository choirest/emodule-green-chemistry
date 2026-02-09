import express from 'express';
import { submitJawaban, getMyJawaban, deleteFile } from '../controllers/jawabanController.js';
import { authenticateToken } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.post('/', authenticateToken, upload.single('file'), submitJawaban);
router.get('/:jenisSoal', authenticateToken, getMyJawaban);
router.delete('/file/:jawabanId', authenticateToken, deleteFile);

export default router;
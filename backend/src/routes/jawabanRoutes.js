import express from 'express';
import { submitJawaban, getMyJawaban } from '../controllers/jawabanController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticateToken, submitJawaban);
router.get('/:jenisSoal', authenticateToken, getMyJawaban);

export default router;
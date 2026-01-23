import express from 'express';
import { getSoalByJenis, createSoal } from '../controllers/soalController.js';
import { authenticateToken } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/roleCheck.js';

const router = express.Router();

router.get('/:jenisSoal', authenticateToken, getSoalByJenis);
router.post('/', authenticateToken, requireAdmin, createSoal);

export default router;
import express from 'express';
import { getAllStudents, getStudentDetail, getStatistics } from '../controllers/adminController.js';
import { authenticateToken } from '../middleware/auth.js';
import { requireAdmin } from '../middleware/roleCheck.js';

const router = express.Router();

router.use(authenticateToken, requireAdmin);

router.get('/students', getAllStudents);
router.get('/students/:studentId', getStudentDetail);
router.get('/statistics', getStatistics);

export default router;
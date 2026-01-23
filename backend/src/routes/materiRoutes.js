import express from 'express';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Endpoint untuk materi statis
router.get('/beranda', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Beranda content',
    // Bisa return static content atau path ke materi
  });
});

export default router;
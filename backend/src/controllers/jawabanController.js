import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

export const submitJawaban = async (req, res) => {
  try {
    const { soalId, jawaban } = req.body;
    const userId = req.user.userId;

    // Cek apakah ada file yang diupload
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const fileName = req.file ? req.file.originalname : null;

    // Ambil jawaban lama jika ada (untuk hapus file lama)
    const existingJawaban = await prisma.jawaban.findUnique({
      where: {
        userId_soalId: {
          userId,
          soalId: parseInt(soalId)
        }
      }
    });

    // Jika ada file baru dan ada file lama, hapus file lama
    if (req.file && existingJawaban && existingJawaban.fileUrl) {
      const oldFilePath = path.join(__dirname, '../../', existingJawaban.fileUrl);
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }
    }

    const jawabanData = await prisma.jawaban.upsert({
      where: {
        userId_soalId: {
          userId,
          soalId: parseInt(soalId)
        }
      },
      update: {
        jawaban: jawaban || '',
        ...(fileUrl && { fileUrl, fileName })
      },
      create: {
        userId,
        soalId: parseInt(soalId),
        jawaban: jawaban || '',
        ...(fileUrl && { fileUrl, fileName })
      }
    });

    res.json({
      message: 'Jawaban berhasil disimpan',
      data: jawabanData
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

export const getMyJawaban = async (req, res) => {
  try {
    const { jenisSoal } = req.params;
    const userId = req.user.userId;

    const jawaban = await prisma.jawaban.findMany({
      where: {
        userId,
        soal: {
          jenisSoal: jenisSoal.toUpperCase()
        }
      },
      include: {
        soal: true
      }
    });

    res.json(jawaban);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const { jawabanId } = req.params;
    const userId = req.user.userId;

    const jawaban = await prisma.jawaban.findFirst({
      where: {
        id: parseInt(jawabanId),
        userId
      }
    });

    if (!jawaban) {
      return res.status(404).json({ message: 'Jawaban tidak ditemukan' });
    }

    if (jawaban.fileUrl) {
      const filePath = path.join(__dirname, '../../', jawaban.fileUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      await prisma.jawaban.update({
        where: { id: parseInt(jawabanId) },
        data: {
          fileUrl: null,
          fileName: null
        }
      });
    }

    res.json({ message: 'File berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
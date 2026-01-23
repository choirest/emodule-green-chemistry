import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const submitJawaban = async (req, res) => {
  try {
    const { soalId, jawaban } = req.body;
    const userId = req.user.userId;

    const jawabanData = await prisma.jawaban.upsert({
      where: {
        userId_soalId: {
          userId,
          soalId
        }
      },
      update: {
        jawaban
      },
      create: {
        userId,
        soalId,
        jawaban
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
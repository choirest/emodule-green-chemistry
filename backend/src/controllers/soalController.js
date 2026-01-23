import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSoalByJenis = async (req, res) => {
  try {
    const { jenisSoal } = req.params;

    const soal = await prisma.soal.findMany({
      where: { jenisSoal: jenisSoal.toUpperCase() },
      orderBy: { nomorSoal: 'asc' }
    });

    res.json(soal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

export const createSoal = async (req, res) => {
  try {
    const { jenisSoal, nomorSoal, pertanyaan } = req.body;

    const soal = await prisma.soal.create({
      data: {
        jenisSoal: jenisSoal.toUpperCase(),
        nomorSoal,
        pertanyaan
      }
    });

    res.status(201).json({
      message: 'Soal berhasil dibuat',
      soal
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
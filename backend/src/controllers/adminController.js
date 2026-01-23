import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.user.findMany({
      where: { role: 'SISWA' },
      select: {
        id: true,
        nama: true,
        email: true,
        kelas: true,
        createdAt: true,
        _count: {
          select: { jawaban: true }
        }
      },
      orderBy: { nama: 'asc' }
    });

    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

export const getStudentDetail = async (req, res) => {
  try {
    const { studentId } = req.params;

    const student = await prisma.user.findUnique({
      where: { id: parseInt(studentId) },
      include: {
        jawaban: {
          include: {
            soal: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!student) {
      return res.status(404).json({ message: 'Siswa tidak ditemukan' });
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

export const getStatistics = async (req, res) => {
  try {
    const totalSiswa = await prisma.user.count({
      where: { role: 'SISWA' }
    });

    const totalSoal = await prisma.soal.count();

    const totalJawaban = await prisma.jawaban.count();

    const jawabanPerJenis = await prisma.soal.groupBy({
      by: ['jenisSoal'],
      _count: {
        id: true
      }
    });

    res.json({
      totalSiswa,
      totalSoal,
      totalJawaban,
      jawabanPerJenis
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
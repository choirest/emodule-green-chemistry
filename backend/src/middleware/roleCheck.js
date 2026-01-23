export const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Akses ditolak. Hanya admin yang diizinkan.' });
  }
  next();
};

export const requireSiswa = (req, res, next) => {
  if (req.user.role !== 'SISWA') {
    return res.status(403).json({ message: 'Akses ditolak. Hanya siswa yang diizinkan.' });
  }
  next();
};
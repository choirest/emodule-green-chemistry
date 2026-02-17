import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api, { apiURL } from '../../services/api';

export default function ResultAnalysis() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentDetail();
  }, [studentId]);

  const fetchStudentDetail = async () => {
    try {
      const response = await api.get(`/api/admin/students/${studentId}`);
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student detail:', error);
    } finally {
      setLoading(false);
    }
  };

  const groupJawabanByJenis = (jawaban) => {
    const grouped = {
      PRETEST: [],
      MATERI: [],
      KEGIATAN1: [],
      KEGIATAN2: [],
      KEGIATAN3: [],
      POSTTEST: []
    };

    jawaban.forEach(item => {
      if (grouped[item.soal.jenisSoal]) {
        grouped[item.soal.jenisSoal].push(item);
      }
    });

    return grouped;
  };

  const renderJawaban = (jawaban, fileUrl, fileName) => {
    // Jika ada file upload
    if (fileUrl) {
      return (
        <div className="mt-2">
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border">
            <img
              src={`${apiURL}${fileUrl}`}
              alt={fileName || 'Uploaded file'}
              className="w-48 h-48 object-contain rounded border"
              onError={(e) => {
                console.error('❌ Failed to load image:', fileUrl);
                console.error('Full URL:', `${apiURL}${fileUrl}`);
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="hidden p-4 bg-red-50 border border-red-200 rounded">
              <p className="text-sm text-red-600">⚠️ Gambar gagal dimuat</p>
              <p className="text-xs text-gray-600 mt-1">Path: {fileUrl}</p>
            </div>
            <div className="flex flex-col my-auto">
              {/* <p className="text-sm font-medium text-gray-700 mb-1">File yang diupload:</p> */}
              <a
                href={`${apiURL}${fileUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-green-600 hover:text-green-800 hover:underline"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Buka gambar di tab baru
              </a>
            </div>
          </div>
        </div>
      );
    }

    // Cek apakah ini data tabel (JSON)
    try {
      const parsed = JSON.parse(jawaban);
      if (parsed.day1 && parsed.day2) {
        // Ini adalah tabel pengamatan organoleptik
        return (
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left">Pengamatan</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Day 1</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Day 2</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Day 3</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Day 4</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Day 5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Bau</td>
                  {['day1', 'day2', 'day3', 'day4', 'day5'].map(day => (
                    <td key={`bau-${day}`} className="border border-gray-300 px-3 py-2 text-center">
                      {parsed[day]?.bau || '-'}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Warna</td>
                  {['day1', 'day2', 'day3', 'day4', 'day5'].map(day => (
                    <td key={`warna-${day}`} className="border border-gray-300 px-3 py-2 text-center">
                      {parsed[day]?.warna || '-'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
    } catch (e) {
      // Bukan JSON, render sebagai text biasa
    }
    
    return <p className="text-gray-700 whitespace-pre-wrap">{jawaban}</p>;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Memuat data siswa...</p>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Siswa tidak ditemukan</p>
          <Link
            to="/admin/students"
            className="mt-4 inline-block text-green-600 hover:underline"
          >
            ← Kembali ke Daftar Siswa
          </Link>
        </div>
      </div>
    );
  }

  const groupedJawaban = groupJawabanByJenis(student.jawaban);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <Link 
          to="/admin/students" 
          className="text-green-600 hover:underline mb-4 inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Daftar Siswa
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Detail Hasil Siswa</h1>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600 mb-1">Nama Siswa</p>
              <p className="text-lg font-semibold text-gray-800">{student.nama}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="text-lg font-semibold text-gray-800">{student.email}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-600 mb-1">Kelas</p>
              <p className="text-lg font-semibold text-gray-800">{student.kelas || '-'}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-600 mb-1">Total Jawaban</p>
              <p className="text-lg font-semibold text-gray-800">{student.jawaban.length} jawaban</p>
            </div>
          </div>

          {/* Pretest Section */}
          {/* <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Pretest</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {groupedJawaban.PRETEST.length} jawaban
              </span>
            </div>
            
            {groupedJawaban.PRETEST.length > 0 ? (
              <div className="space-y-4">
                {groupedJawaban.PRETEST
                  .sort((a, b) => a.soal.nomorSoal - b.soal.nomorSoal)
                  .map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-800">
                          Soal {item.soal.nomorSoal}: {item.soal.pertanyaan}
                        </h3>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Jawaban Siswa:</p>
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                          {renderJawaban(item.jawaban, item.fileUrl, item.fileName) || <span className="text-gray-400 italic">Belum dijawab</span>}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Terakhir diupdate: {new Date(item.updatedAt).toLocaleString('id-ID', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 italic">Belum ada jawaban untuk Pretest</p>
              </div>
            )}
          </div> */}

          {/* Kegiatan 1 Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Kegiatan 1</h2>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                {groupedJawaban.MATERI.length} jawaban
              </span>
            </div>
            
            {groupedJawaban.MATERI.length > 0 ? (
              <div className="space-y-4">
                {groupedJawaban.MATERI
                  .sort((a, b) => a.soal.nomorSoal - b.soal.nomorSoal)
                  .map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-800">
                          {item.soal.pertanyaan}
                        </h3>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Jawaban Siswa:</p>
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                          {renderJawaban(item.jawaban, item.fileUrl, item.fileName) || <span className="text-gray-400 italic">Belum dijawab</span>}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Terakhir diupdate: {new Date(item.updatedAt).toLocaleString('id-ID', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 italic">Belum ada jawaban untuk Kegiatan 1</p>
              </div>
            )}
          </div>

          {/* Kegiatan 2 Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Kegiatan 2</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {groupedJawaban.KEGIATAN1.length} jawaban
              </span>
            </div>
            
            {groupedJawaban.KEGIATAN1.length > 0 ? (
              <div className="space-y-4">
                {groupedJawaban.KEGIATAN1
                  .sort((a, b) => a.soal.nomorSoal - b.soal.nomorSoal)
                  .map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-800">
                          {item.soal.pertanyaan}
                        </h3>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Jawaban Siswa:</p>
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                          {renderJawaban(item.jawaban, item.fileUrl, item.fileName) || <span className="text-gray-400 italic">Belum dijawab</span>}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Terakhir diupdate: {new Date(item.updatedAt).toLocaleString('id-ID', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 italic">Belum ada jawaban untuk Kegiatan 2</p>
              </div>
            )}
          </div>

          {/* Kegiatan 3 Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Kegiatan 3</h2>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {groupedJawaban.KEGIATAN2.length} jawaban
              </span>
            </div>
            
            {groupedJawaban.KEGIATAN2.length > 0 ? (
              <div className="space-y-4">
                {groupedJawaban.KEGIATAN2
                  .sort((a, b) => a.soal.nomorSoal - b.soal.nomorSoal)
                  .map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-800">
                          {item.soal.pertanyaan}
                        </h3>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Jawaban Siswa:</p>
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                          {renderJawaban(item.jawaban, item.fileUrl, item.fileName) || <span className="text-gray-400 italic">Belum dijawab</span>}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Terakhir diupdate: {new Date(item.updatedAt).toLocaleString('id-ID', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 italic">Belum ada jawaban untuk Kegiatan 3</p>
              </div>
            )}
          </div>

          {/* Kegiatan 4 Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Kegiatan 4</h2>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                {groupedJawaban.KEGIATAN3.length} jawaban
              </span>
            </div>
            
            {groupedJawaban.KEGIATAN3.length > 0 ? (
              <div className="space-y-4">
                {groupedJawaban.KEGIATAN3
                  .sort((a, b) => a.soal.nomorSoal - b.soal.nomorSoal)
                  .map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-800">
                          {item.soal.pertanyaan}
                        </h3>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Jawaban Siswa:</p>
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                          {renderJawaban(item.jawaban, item.fileUrl, item.fileName) || <span className="text-gray-400 italic">Belum dijawab</span>}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Terakhir diupdate: {new Date(item.updatedAt).toLocaleString('id-ID', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 italic">Belum ada jawaban untuk Kegiatan 4</p>
              </div>
            )}
          </div>

          {/* Evaluasi Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Evaluasi</h2>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {groupedJawaban.POSTTEST.length} jawaban
              </span>
            </div>
            
            {groupedJawaban.POSTTEST.length > 0 ? (
              <div className="space-y-4">
                {groupedJawaban.POSTTEST
                  .sort((a, b) => a.soal.nomorSoal - b.soal.nomorSoal)
                  .map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-gray-800">
                          Soal {item.soal.nomorSoal}: {item.soal.pertanyaan}
                        </h3>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Jawaban Siswa:</p>
                        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                          {renderJawaban(item.jawaban, item.fileUrl, item.fileName) || <span className="text-gray-400 italic">Belum dijawab</span>}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        Terakhir diupdate: {new Date(item.updatedAt).toLocaleString('id-ID', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500 italic">Belum ada jawaban untuk Evaluasi</p>
              </div>
            )}
          </div>

          {/* Summary Statistics */}
          <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Progres</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* <div className="text-center">
                <p className="text-2xl font-semibold text-green-600">{groupedJawaban.PRETEST.length}/15</p>
                <p className="text-sm text-gray-600">Pretest</p>
              </div> */}
              <div className="text-center">
                <p className="text-2xl font-semibold text-orange-600">{groupedJawaban.MATERI.length}/1</p>
                <p className="text-sm text-gray-600">Kegiatan 1</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-blue-600">{groupedJawaban.KEGIATAN1.length}/8</p>
                <p className="text-sm text-gray-600">Kegiatan 2</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-purple-600">{groupedJawaban.KEGIATAN2.length}/8</p>
                <p className="text-sm text-gray-600">Kegiatan 3</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-red-600">{groupedJawaban.KEGIATAN3.length}/10</p>
                <p className="text-sm text-gray-600">Kegiatan 4</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-yellow-600">{groupedJawaban.POSTTEST.length}/15</p>
                <p className="text-sm text-gray-600">Evaluasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
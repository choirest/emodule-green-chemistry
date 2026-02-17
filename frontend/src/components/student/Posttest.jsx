import { useState, useEffect } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import api, { apiURL } from '@/services/api';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

const Posttest = () => {
  const [soal, setSoal] = useState([]);
  const [jawaban, setJawaban] = useState({});
  const [files, setFiles] = useState({});   
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSoal();
    fetchMyJawaban();
  }, []);

  const fetchSoal = async () => {
    try {
      const response = await api.get('/api/soal/posttest');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/api/jawaban/posttest');
      const jawabanMap = {};
      const filesMap = {};
      
      response.data.forEach(item => {
        jawabanMap[item.soalId] = item.jawaban;
        
        if (item.fileUrl) {
          filesMap[item.soalId] = {
            url: item.fileUrl,
            name: item.fileName,
            id: item.id
          };
        }
      });

      setJawaban(jawabanMap);
      setFiles(filesMap);
    } catch (error) {
      console.error('Error fetching jawaban:', error);
    }
  };

  const handleJawabanChange = (soalId, value) => {
    setJawaban({
      ...jawaban,
      [soalId]: value
    });
  };

  const handleFileChange = (soalId, file) => {
    setFiles({
      ...files,
      [soalId]: file
    });
  };

  const handleSubmit = async (soalId, isFileUpload = false) => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('soalId', soalId);
      
      if (isFileUpload && files[soalId] instanceof File) {
        formData.append('file', files[soalId]);
        formData.append('jawaban', ''); // Kosongkan text jawaban untuk file upload
      } else {
        formData.append('jawaban', jawaban[soalId] || '');
      }

      await api.post('/api/jawaban', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage('Jawaban berhasil disimpan!');
      setTimeout(() => setMessage(''), 3000);
      
      if (isFileUpload) {
        await fetchMyJawaban();
      }
    } catch (error) {
      console.error('Error saving jawaban:', error);
      setMessage(error.response?.data?.message || 'Gagal menyimpan jawaban');
    } finally {
      setSaving(false);
    }
  };
  
  const handleDeleteFile = async (soalId, jawabanId) => {
    if (!confirm('Apakah Anda yakin ingin menghapus file ini?')) return;

    try {
      await api.delete(`/api/jawaban/file/${jawabanId}`);
      setMessage('File berhasil dihapus!');
      setTimeout(() => setMessage(''), 3000);
      
      const newFiles = { ...files };
      delete newFiles[soalId];
      setFiles(newFiles);
    } catch (error) {
      console.error('Error deleting file:', error);
      setMessage('Gagal menghapus file');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Posttest</CardTitle>
            <Separator />
          </CardHeader>
          <div className="pt-6 grid gap-16">
            <CardHeader>
              <CardDescription className="text-black">
                {soal.map((item, index) => {
                  // ← TAMBAHAN: Deteksi soal nomor 4 untuk file upload
                  const isFileUpload = index === 3; // Index 3 = Soal nomor 4

                  return (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {index + 1}. {item.pertanyaan}
                      </h3>

                      {isFileUpload ? (
                        // ========================================
                        // FILE UPLOAD INPUT (SOAL NOMOR 4)
                        // ========================================
                        <div className="ml-4">
                          <div className="mb-3">
                            <label className="block text-xs italic mb-2">
                              Upload gambar konsep mapping (Format: JPG, PNG, max 5MB)
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(item.id, e.target.files[0])}
                              className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded file:border-0
                                file:text-sm file:font-semibold
                                file:bg-green-50 file:text-green-700
                                hover:file:bg-green-100
                                cursor-pointer"
                            />
                          </div>

                          {/* Preview file yang sudah diupload */}
                          {files[item.id] && typeof files[item.id] === 'object' && files[item.id].url && (
                            <div className="mt-3 p-4 bg-gray-50 rounded-lg border">
                              <p className="text-sm font-medium text-gray-700 mb-2">File yang sudah diupload:</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <img
                                    src={`${apiURL}${files[item.id].url}`}
                                    alt={`${apiURL}${files[item.id].name}`}
                                    className="h-20 w-20 object-cover rounded border"
                                  />
                                  <div>
                                    {/* <p className="text-sm text-gray-700">{files[item.id].name}</p> */}
                                    <a
                                      href={`${apiURL}${files[item.id].url}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-green-600 hover:underline"
                                    >
                                      Lihat gambar
                                    </a>
                                  </div>
                                </div>
                                <button
                                  onClick={() => handleDeleteFile(item.id, files[item.id].id)}
                                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                                >
                                  Hapus
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Preview file baru yang dipilih */}
                          {files[item.id] instanceof File && (
                            <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                              <p className="text-sm text-blue-700">
                                File dipilih: {files[item.id].name}
                              </p>
                            </div>
                          )}

                          <button
                            onClick={() => handleSubmit(item.id, true)}
                            disabled={saving || !(files[item.id] instanceof File)}
                            className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors disabled:bg-gray-400"
                          >
                            {saving ? 'Mengupload...' : 'Upload File'}
                          </button>
                        </div>
                      ) : (
                        <div className="ml-4">
                          <textarea
                            value={jawaban[item.id] || ''}
                            onChange={(e) => handleJawabanChange(item.id, e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-32"
                            placeholder="Tulis jawaban Anda di sini..."
                          />
                          <button
                            onClick={() => handleSubmit(item.id, false)}
                            disabled={saving}
                            className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors disabled:bg-gray-400"
                          >
                            {saving ? 'Menyimpan...' : 'Simpan Jawaban'}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  );
}

export default Posttest
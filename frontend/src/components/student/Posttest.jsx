import { useState, useEffect } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import api from '@/services/api';
import { ScrollArea } from '../ui/scroll-area';

const Posttest = () => {
  const [soal, setSoal] = useState([]);
  const [jawaban, setJawaban] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSoal();
    fetchMyJawaban();
  }, []);

  const fetchSoal = async () => {
    try {
      const response = await api.get('/soal/posttest');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/jawaban/posttest');
      const jawabanMap = {};
      response.data.forEach(item => {
        jawabanMap[item.soalId] = item.jawaban;
      });
      setJawaban(jawabanMap);
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

  const handleSubmit = async (soalId) => {
    setSaving(true);
    try {
      await api.post('/jawaban', {
        soalId,
        jawaban: jawaban[soalId] || ''
      });
      setMessage('Jawaban berhasil disimpan!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving jawaban:', error);
      setMessage('Gagal menyimpan jawaban');
    } finally {
      setSaving(false);
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
          <div className="grid gap-16">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription className="text-black">
                {soal.map((item, index) => (
                  <div key={item.id} className="pb-6">
                    <h3 className="mb-3">
                      {index + 1}. {item.pertanyaan}
                    </h3>
                    <textarea
                      value={jawaban[item.id] || ''}
                      onChange={(e) => handleJawabanChange(item.id, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-32"
                      placeholder="Tulis jawaban Anda di sini..."
                    />
                    <button
                      onClick={() => handleSubmit(item.id)}
                      disabled={saving}
                      className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors disabled:bg-gray-400"
                    >
                      {saving ? 'Menyimpan...' : 'Simpan Jawaban'}
                    </button>
                  </div>
                ))}
              </CardDescription>
            </CardHeader>

          </div>
        </ScrollArea>
      </Card>
    </section>
  );
}

export default Posttest
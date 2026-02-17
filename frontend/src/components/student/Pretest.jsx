import { useState, useEffect } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import api from '@/services/api';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

const Pretest = () => {
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
      const response = await api.get('/api/soal/pretest');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/api/jawaban/pretest');
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
      await api.post('/api/jawaban', {
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
    <>
      <section className="p-4">
        <Card>
          <ScrollArea className="h-144">
            <CardHeader>
              <CardTitle className="text-xl mb-4">Pretest</CardTitle>
              <Separator />
            </CardHeader>
            <div className="pt-6 grid gap-16">
              <CardHeader>
                <CardTitle>BACAAN UNTUK MENJAWAB SOAL NOMOR 1-8 </CardTitle>
                <CardDescription className="pt-2 grid gap-2 text-justify text-black">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pemanfaatan limbah organik sebagai pupuk merupakan salah satu contoh nyata penerapan prinsip kimia 
    hijau dalam kehidupan sehari-hari. Banyak jenis sampah rumah tangga yang biasanya dianggap tidak 
    berguna seperti kulit buah, ampas sayuran, daun kering, dan sisa makanan nabati sebenarnya mengandung 
    unsur hara yang dibutuhkan tanaman. Dengan mengolahnya kembali, kita tidak hanya mengurangi jumlah 
    sampah yang berakhir di tempat pembuangan akhir, tetapi juga menghasilkan pupuk organik yang ramah 
    lingkungan. 
                  </p>
                  <img src="/pretest.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                  <p className="italic text-center text-xs mb-2">Sumber : blogger.googleusercontent</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dalam proses pembuatan pupuk organik, terdapat dua kelompok bahan utama yang perlu disiapkan. 
    Pertama adalah bahan kaya karbon (C), misalnya daun kering, serbuk gergaji, kertas tak terpakai, atau kulit 
    buah. Bahan ini berfungsi sebagai “energi” bagi mikroorganisme yang bekerja menguraikan limbah. Kedua 
    adalah bahan kaya nitrogen (N), seperti sisa sayuran, rumput segar, sisa teh atau kopi, serta ampas buah. 
    Bahan kaya nitrogen membantu mempercepat proses pembusukan dan menyediakan unsur hara penting 
    bagi tanaman.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kedua jenis bahan tersebut harus dicampur dengan perbandingan yang seimbang agar proses 
    pengomposan berjalan optimal. Setelah itu, campuran diberi sedikit air sehingga tetap lembap dan 
    dibiarkan terurai secara alami oleh bakteri dan jamur. Dalam beberapa minggu, bahan-bahan tersebut akan 
    berubah menjadi pupuk organik berwarna coklat gelap dengan tekstur remah, siap digunakan untuk 
    menyuburkan tanah di pekarangan atau kebun sekolah.
                  </p>
                </CardDescription>
              </CardHeader>

              <CardHeader>
                <CardTitle>Soal</CardTitle>
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
    </>
  );
}

export default Pretest;
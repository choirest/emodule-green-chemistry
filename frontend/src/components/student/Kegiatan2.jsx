import { useState, useEffect } from 'react';
import Footer from '../shared/Footer';
import api from '@/services/api';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

const Kegiatan2 = () => {
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
      const response = await api.get('/api/soal/kegiatan1');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/api/jawaban/kegiatan1');
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
            <CardTitle className="text-xl text-center">Kegiatan 2</CardTitle>
            <CardDescription className="my-4 grid gap-2 text-justify text-black">
              <p className="font-semibold text-center text-lg mb-4">"<i>Food Waste</i> dalam Kacamata Kimia Hijau"</p>
              <Separator />
              <p className="mt-4"><span className="font-semibold">Tujuan:</span> Menganalisis Prinsip Kimia Hijau dalam kehidupan sehari-hari</p>
            </CardDescription>
            <Separator />
          </CardHeader>
            <div id="a" className="pt-6 grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Identifikasi Masalah
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p>Perhatikan video dibawah ini</p>
                  <iframe
                    className="md:w-100 md:h-72 mx-auto"
                    src="https://www.youtube.com/embed/wgLuXvtaLyQ?si=2AiqBb9Hu0h0-MUo" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                  <p className="italic text-center text-xs mb-2">Sumber: OzHarvest</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Video tersebut membahas isu <i>food waste </i>(pemborosan makanan) sebagai salah 
satu permasalahan lingkungan yang sering terjadi dalam kehidupan sehari-hari, khususnya 
di tingkat rumah tangga. Video ini menekankan bahwa banyak makanan yang sebenarnya 
masih layak konsumsi justru dibuang karena perencanaan yang kurang tepat, penyimpanan 
yang tidak optimal, atau kesalahpahaman terhadap tanggal kedaluwarsa. Pemborosan 
makanan ini tidak hanya berdampak pada kerugian ekonomi, tetapi juga berkontribusi 
besar terhadap peningkatan volume sampah dan pencemaran lingkungan.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Makanan yang terbuang sebenarnya merepresentasikan sumber daya yang ikut 
terbuang, seperti air, energi, tenaga kerja, dan bahan bakar yang digunakan selama proses 
produksi, pengolahan, dan distribusi makanan. Ketika makanan dibuang ke tempat 
pembuangan akhir, proses pembusukannya menghasilkan gas rumah kaca, terutama 
metana, yang berkontribusi terhadap pemanasan global dan perubahan iklim. Oleh karena 
itu, <i>food waste </i>dipandang sebagai masalah lingkungan yang serius dan berkaitan langsung 
dengan keberlanjutan.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Secara keseluruhan, video tersebut bertujuan untuk menumbuhkan kesadaran 
bahwa <i>food waste </i>bukan sekadar masalah individu, melainkan permasalahan bersama 
yang berdampak pada lingkungan dan masa depan keberlanjutan. Pesan utama yang 
disampaikan adalah bahwa melalui langkah kecil dan konsisten dalam mengelola makanan, 
setiap orang dapat berkontribusi dalam menjaga lingkungan, mengurangi pencemaran, 
serta mendukung prinsip-prinsip keberlanjutan yang sejalan dengan konsep kimia hijau. 
                  </p>
                  {soal.slice(0, 2).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
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

            <div id="b" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Merumuskan Hipotesis
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menurut data <i>World Bank </i>2019 sampah organik menjadi salah salah satu 
penyumbang terbesar sampah di Indonesia. Apa benar ya? Yuk kita simak vidio berikut 
                  </p>
                  <iframe
                    className="w-100 h-72 mx-auto"
                    src="https://www.youtube.com/embed/JqNjPnsYXDY?si=49UimW9Sv4t0LkmN" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>                  
                  <p className="italic text-center text-xs mb-2">Sumber: Siapdarling</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dari vidio tersebut dinyatakan bahwa sampah organik bisa dirubah menjadi sediaan 
pupuk lho! Sebuah studi ilmiah dari <i>SPECTA Journal of Technology </i>tahun 2025 membahas 
pemanfaatan produk biokonversi dari limbah organik termasuk limbah rumah tangga 
sebagai pupuk organik cair yang diuji pada pertumbuhan tanaman <i>miana</i>.
                  </p>
                  {soal.slice(2, 3).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
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

            <div id="c" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Mengumpulkan Data dan Menguji Hipotesis
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(3, 4).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
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

            <div id="d" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">Hasil Pengamatan</CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(4, 5).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
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

            <div id="e" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Analisis Data
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(5, 6).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
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

            <div id="f" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Kesimpulan
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                  </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(6, 7).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
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
            
            <div id="tugas" className="grid gap-16 pb-6">
              <CardHeader>
                <CardTitle>Tugas</CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-black">
                  <p>Yuk cek pemahamanmu megenai isu <i>Food Waste</i> serta kaitannya dengan <i>Green Chemistry</i> melalui <a href="https://bit.ly/FoodWasteinGC" className="hover:underline text-green-500 hover:text-green-600">link berikut</a>!</p>
                </CardDescription>
              </CardHeader>
            </div>

            <div id="g" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">Evaluasi Proses Belajar</CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(7, 8).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
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

export default Kegiatan2
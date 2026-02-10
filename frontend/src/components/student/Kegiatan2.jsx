import { useState, useEffect } from 'react';
import Footer from '../shared/Footer';
import api from '@/services/api';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';

const Kegiatan2 = () => {
  const [soal, setSoal] = useState([]);
  const [jawaban, setJawaban] = useState({});
  const [tabelPengamatan, setTabelPengamatan] = useState({
    day1: { bau: '', warna: '' },
    day2: { bau: '', warna: '' },
    day3: { bau: '', warna: '' },
    day4: { bau: '', warna: '' },
    day5: { bau: '', warna: '' }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savingTable, setSavingTable] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSoal();
    fetchMyJawaban();
  }, []);

  const fetchSoal = async () => {
    try {
      const response = await api.get('/api/soal/kegiatan2');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/api/jawaban/kegiatan2');
      const jawabanMap = {};
      let tabelFound = false;
      
      response.data.forEach(item => {
        // Jika ini data tabel pengamatan
        if (item.soal.pertanyaan.includes('Tulislah hasil perolehan informasi pada kolom berikut!')) {
          try {
            const parsedData = JSON.parse(item.jawaban);
            // Pastikan data memiliki struktur day1, day2, dst
            if (parsedData && typeof parsedData === 'object' && parsedData.day1) {
              setTabelPengamatan(parsedData);
              tabelFound = true;
            }
          } catch (e) {
            // Jika bukan JSON, tetap simpan sebagai string
            console.log('Data tabel bukan JSON:', e);
            jawabanMap[item.soalId] = item.jawaban;
          }
        } else {
          jawabanMap[item.soalId] = item.jawaban;
        }
      });
      
      setJawaban(jawabanMap);
      
      // Log untuk debugging
      if (tabelFound) {
        console.log('Tabel pengamatan berhasil dimuat dari database');
      }
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

  const handleTabelChange = (day, field, value) => {
    setTabelPengamatan({
      ...tabelPengamatan,
      [day]: {
        ...tabelPengamatan[day],
        [field]: value
      }
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
  
  const handleSaveTable = async (soalId) => {
    setSavingTable(true);
    try {
      await api.post('/api/jawaban', {
        soalId,
        jawaban: JSON.stringify(tabelPengamatan)
      });
      setMessage('Tabel pengamatan berhasil disimpan!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving table:', error);
      setMessage('Gagal menyimpan tabel pengamatan');
    } finally {
      setSavingTable(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  const soalPengamatan = soal.find(s => 
    s.pertanyaan.includes('Tulislah hasil perolehan informasi pada kolom berikut!')
  );
  const soalLainnya = soal.filter(s => 
    !s.pertanyaan.includes('Hasil Pengamatan') && 
    !s.pertanyaan.includes('Organoleptik')
  );

  return (
    <>
      <section className="p-4">
        <Card>
          <ScrollArea className="h-144">
            <div id="h" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Identifikasi Masalah
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 pb-8 grid gap-4 text-justify text-black">
                  <p>Perhatikan Video dibawah ini</p>
                  <iframe
                    className="md:w-100 md:h-72 mx-auto"
                    src="https://www.youtube.com/embed/pnuiEGuThsI?si=Ja2dZWd64GCtrKDN" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                  <p className="italic text-center text-xs mb-2">Sumber: Kok Bisa?</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selain <i>handphone </i>di tangan, ada satu benda yang susah lepas dari hidup kita. 
Dialah, plastik! Benda ringan yang karena kuat dan praktisnya bikin disukai sama banyak 
orang. Tapi, masalah terus muncul, karena gara-gara ulah kita juga, sampah plastik kini jadi 
ada di tanah, di sungai, dan sampai bikin benua sendiri di samudera sana. Sekarang, kita 
mungkin ngeri mikirin seberapa banyak sih sebenernya sampah plastik di dunia? Dan 
sebahaya apakah mereka?
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Video tersebut membahas seberapa berbahaya sampah plastik bagi kehidupan kita. 
Secara keseluruhan, uraian mengenai sampah plastik dan bahayanya bisa kita gambarkan 
dalam konsep <i>mapping </i>berikut!
                  </p>
                  <img src="/mapping.png" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                  <p className="italic text-center text-xs mb-2">Konsep Mapping</p>
                  <img src="/keg2a.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                  <p className="italic text-center text-xs mb-2">(Sumber: rejekiabadi)</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seperti yang kita tahu saat kita pergi ke restoran atau cafe banyak sekali sampah 
plastik yang kita temukan, salah satunya sedotan. Begitupun saat kita makan mie instan, 
bumbu mie instan pun dikemas menggunakan plastik. Bahaya sedotan plastik bisa kalian 
simak dalam video berikut!
                  </p>
                  <iframe
                    className="md:w-100 md:h-72 mx-auto"
                    src="https://www.youtube.com/embed/TX6QbdSi3sY?si=R9lyVUn76e8uBM6c" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                  <p className="italic text-center text-xs mb-2">Sumber: CNN Indonesia</p>
                  <img src="/keg2b.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                  <p className="italic text-center text-xs mb-2">(Sumber: kontakpackaging)</p>
                  <p>
                    Wah jadi kita bisa menggunakan sedotan kertas karena kertas lebih cepat terurai 
dong! Namun tahukah kamu sedotan kertas berbahaya bagi kesehatan? Yuk simak 
beritanya!
                  </p>
                  <iframe
                    className="md:w-100 md:h-72 mx-auto"
                    src="https://www.youtube.com/embed/Z3m7qkOYPOs?si=4p7erA-iTQRjVyr_" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                  <p className="italic text-center text-xs mb-2">Sumber: CNN Indonesia</p>
                  </CardDescription>
              </CardHeader>

              <CardHeader>
                <CardTitle className="flex gap-4">
                  Kuis Berhadiah
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(0, 1).map((item, index) => (
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

              <CardHeader>
                <CardTitle className="flex gap-4">
                  Mari Berpikir
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 pb-8 grid gap-4 text-justify text-black">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lalu penanggulangan apa yang bisa kita lakukan untuk mencegah munculnya 
sampah plastik tersebut? Berbagai upaya penanggulangan sampah telah dilakukan melalui 
pendekatan pencegahan, seperti membawa <i>tumbler </i>dan wadah makan dari rumah, 
menggunakan produk daur ulang, serta melakukan pemilahan sampah. Namun, langkah
langkah tersebut masih bergantung pada perilaku individu dan belum sepenuhnya mampu 
menekan timbulan sampah, khususnya sampah kemasan sekali pakai.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oleh karena itu, diperlukan strategi pencegahan yang lebih fundamental, yaitu 
menanggulangi sampah sebelum sampah itu terbentuk. Andai saja sampah plastik dapat 
kita telan dan tidak berbahaya bagi kesehtan kita, pasti akan mengurangi jumlah sampah 
plastik di Indonesia dan menjadi solusi dari permasalahan diatas!
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eitt tapi memang bisa loh dimakan, namun harus melewati tahapan dan bahan yang 
tepat. Bagaimana ya caranya menghasilkan sedotan dan plastik <i>packaging </i>yang sekaligus 
bisa dimakan beserta makanannya?
                  </p>
                </CardDescription>
              </CardHeader>
            </div>

            <div id="i" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Merumuskan Hipotesis
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Berbagai upaya penanggulangan sampah telah dilakukan melalui pendekatan 
pencegahan, seperti membawa <i>tumbler </i>dan wadah makan dari rumah serta melakukan 
pemilahan sampah. Namun, langkah-langkah tersebut masih bergantung pada perilaku 
individu dan belum sepenuhnya mampu menekan timbulan sampah, khususnya sampah 
kemasan sekali pakai. Oleh karena itu, diperlukan strategi pencegahan yang lebih 
fundamental, yaitu menanggulangi sampah sebelum sampah itu terbentuk. Salah satu 
solusi inovatif yang dapat diterapkan adalah pengembangan produk <i>edible packaging </i>atau 
kemasan yang dapat dimakan. Kemasan ini tidak hanya berfungsi sebagai pelindung 
makanan, tetapi juga dapat dikonsumsi bersama produk yang dikemas, sehingga secara 
langsung menghilangkan potensi sampah.
                  </p>
                  {soal.slice(1, 2).map((item, index) => (
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

            <div id="j" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Mengumpulkan Data dan Menguji Hipotesis
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p>
                    Carilah informasi dari berbagai sumber untuk menguji hipotesis yang telah kalian buat!
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

            <div id="k" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">Hasil Pengamatan</CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(3, 4).map((item, index) => (
                    <div key={item.id} className="pb-6">
                      <h3 className="mb-3">
                        {item.pertanyaan}
                      </h3>
                      {soalPengamatan && (
                        <section className="mb-8">
                          <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-green-100 text-green-500">
                                  <th className="border border-gray-300 px-4 py-3 text-left">Pengamatan</th>
                                  <th className="border border-gray-300 px-4 py-3 text-center">Day 1</th>
                                  <th className="border border-gray-300 px-4 py-3 text-center">Day 2</th>
                                  <th className="border border-gray-300 px-4 py-3 text-center">Day 3</th>
                                  <th className="border border-gray-300 px-4 py-3 text-center">Day 4</th>
                                  <th className="border border-gray-300 px-4 py-3 text-center">Day 5</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white hover:bg-gray-50">
                                  <td className="border border-gray-300 px-4 py-3 font-medium">Bau</td>
                                  {['day1', 'day2', 'day3', 'day4', 'day5'].map(day => (
                                    <td key={`bau-${day}`} className="border border-gray-300 px-2 py-2">
                                      <input
                                        type="text"
                                        value={tabelPengamatan[day].bau}
                                        onChange={(e) => handleTabelChange(day, 'bau', e.target.value)}
                                        className="w-full px-2 py-1 border border-gray-200 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Deskripsi bau"
                                      />
                                    </td>
                                  ))}
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100">
                                  <td className="border border-gray-300 px-4 py-3 font-medium">Warna</td>
                                  {['day1', 'day2', 'day3', 'day4', 'day5'].map(day => (
                                    <td key={`warna-${day}`} className="border border-gray-300 px-2 py-2">
                                      <input
                                        type="text"
                                        value={tabelPengamatan[day].warna}
                                        onChange={(e) => handleTabelChange(day, 'warna', e.target.value)}
                                        className="w-full px-2 py-1 border border-gray-200 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Deskripsi warna"
                                      />
                                    </td>
                                  ))}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <button
                            onClick={() => handleSaveTable(soalPengamatan.id)}
                            disabled={savingTable}
                            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors disabled:bg-gray-400"
                          >
                            {savingTable ? 'Menyimpan...' : 'Simpan Tabel Pengamatan'}
                          </button>
                        </section>
                      )}
                    </div>
                  ))}
                </CardDescription>
              </CardHeader>
            </div>

            <div id="l" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Analisis Data
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(4, 6).map((item, index) => (
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

            <div id="m" className="grid gap-16">
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

            <div id="n" className="grid gap-16">
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

export default Kegiatan2;
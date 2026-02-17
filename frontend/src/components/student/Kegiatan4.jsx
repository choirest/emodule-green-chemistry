import { useState, useEffect } from 'react';
import Footer from '../shared/Footer';
import api from '@/services/api';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

const Kegiatan4 = () => {
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
      const response = await api.get('/api/soal/kegiatan3');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/api/jawaban/kegiatan3');
      const jawabanMap = {};
      let tabelFound = false;
      
      response.data.forEach(item => {
        // Jika ini data tabel pengamatan
        if (item.soal.pertanyaan.includes('Lakukan pemantauan terhadap bau dan warna (Day 1-5)!')) {
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
    s.pertanyaan.includes('Lakukan pemantauan terhadap bau dan warna (Day 1-5)!')
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
            <CardHeader>
              <CardTitle className="text-xl text-center">Kegiatan 4</CardTitle>
              <CardDescription className="my-4 grid gap-2 text-justify text-black">
                <p className="font-semibold text-center text-lg mb-4">"<i>Green Chemistry</i> untuk Keberlanjutan Sungai"</p>
                <Separator />
                <p className="mt-4"><span className="font-semibold">Tujuan:</span> Menciptakan kegiatan yang mendukung Prinsip Kimia Hijau</p>
              </CardDescription>
              <Separator />
            </CardHeader>
            <div id="o" className="pt-6 grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Identifikasi Masalah
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p>Simak permasalahan pada vidio berikut!</p>
                  <iframe
                    className="md:w-100 md:h-72 mx-auto" 
                    src="https://www.youtube.com/embed/X96MPG_W7nY?si=nl_AgFMW-BdI9Ed8" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                  <p className="italic text-center text-xs mb-2">Channel PasraJY</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aktivitas sehari-hari masyarakat seperti mencuci pakaian, mandi, dan mencuci 
peralatan dapur yang hampir semuanya menggunakan deterjen. Dari aktivitas sederhana 
ini, dijelaskan bahwa sisa deterjen yang terbuang melalui saluran air rumah tangga tidak 
benar-benar hilang, melainkan mengalir ke sungai, danau, atau meresap ke tanah sehingga 
berpotensi mencemari lingkungan perairan.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kandungan kimia dalam deterjen, seperti <i>surfaktan, fosfat</i>, pewangi, dan zat aditif 
lainnya, yang berfungsi untuk mengangkat kotoran namun memiliki dampak negatif jika 
masuk ke lingkungan. <i>Surfaktan </i>dijelaskan dapat menurunkan tegangan permukaan air 
sehingga mengganggu sistem pernapasan organisme air, sementara <i>fosfat </i>dapat memicu 
pertumbuhan alga secara berlebihan. Kondisi ini menyebabkan eutrofikasi, yaitu 
menurunnya kadar oksigen terlarut dalam air, yang pada akhirnya dapat menyebabkan 
kematian ikan dan organisme perairan lainnya.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Limbah deterjen berdampak tidak langsung terhadap manusia. Air yang tercemar 
deterjen dapat memengaruhi kualitas air bersih yang digunakan untuk kebutuhan sehari
hari. Selain itu, paparan deterjen dalam kadar tertentu dapat menyebabkan iritasi kulit, 
gangguan kesehatan, serta merusak ekosistem yang menjadi sumber pangan manusia. 
Pencemaran akibat deterjen bukan hanya masalah lingkungan, tetapi juga masalah 
kesehatan dan keberlanjutan kehidupan manusia. Dalam vidio dijelaskan upaya 
mengurangi dampak limbah deterjen melalui tindakan membangun saluran IPAL yang baik 
serta mengelola limbah detergen sebelum dibuang ke perairan. 
                  </p>
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
            </div>

            <div id="p" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Merumuskan Hipotesis
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Studi pembuatan cairan pembersih dari bahan organik berkembang sebagai 
respons terhadap meningkatnya pencemaran lingkungan akibat penggunaan pembersih 
sintetis berbahan kimia keras. Pemanfaatan bahan organik yang mudah terurai 
<i> (biodegradable)</i>, seperti kulit jeruk, lemon, nanas, daun sirih, lerak, dan sisa fermentasi 
bahan dapur, yang memiliki kandungan senyawa aktif alami. Senyawa seperti asam sitrat, 
<i> saponin, flavonoid</i>, dan minyak atsiri diketahui memiliki sifat pembersih, antibakteri, dan 
penghilang bau, sehingga berpotensi menggantikan fungsi deterjen sintetis. 
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pada Praktikum kali ini kita akan membat cairan pembersih dari bahan organik. 
Percobaan ini bertujuan untuk membuat cairan pembersih yang ramah lingkungan sebagai 
salah satu solusi menanggulangi pencemaran air akibat cairan pembersih komersial.
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

            <div id="q" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Mengumpulkan Data dan Menguji Hipotesis
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                  <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p>
                    Rancanglah alat dan bahan serta langkah kerja dalam praktikum ini dengan menghimpun 
informasi dari berbagai sumber!
                  </p>
                  {soal.slice(2, 5).map((item, index) => (
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

            <div id="r" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">Hasil Pengamatan</CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <p><i>Organoleptik</i></p>
                  {soal.slice(5, 6).map((item, index) => (
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

            <div id="s" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Analisis Data
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  <div className="flex gap-2">
                    <p className="">1.</p>
                    <div className="grid gap-4">
                      <p>Analisis <i>Oganoleptik</i></p>  
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
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <p className="">2.</p>
                    <div className="grid gap-4">
                      <p>Analisis Prinsip <i>Green Chemistry</i></p>
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
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
            </div>

            <div id="t" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">
                  Kesimpulan
                  <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
                </CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(8, 9).map((item, index) => (
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
                  <p>Yuk cek pemahamanmu mengenai isu <i>Food Waste</i> serta kaitannya dengan <i>Green Chemistry</i> melalui <a href="https://bit.ly/GCuntukKeberlanjutanAirSungai" className="hover:underline text-green-500 hover:text-green-600">link berikut</a>!</p>
                </CardDescription>
              </CardHeader>
            </div>

            <div id="u" className="grid gap-16">
              <CardHeader>
                <CardTitle className="flex gap-4">Evaluasi Proses Belajar</CardTitle>
                <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                  {soal.slice(9, 10).map((item, index) => (
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

export default Kegiatan4;
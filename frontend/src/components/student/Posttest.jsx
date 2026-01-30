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

            <div id="glosarium">
              <CardHeader className="italic">
                <CardTitle>Glosarium</CardTitle>
                <CardDescription className="grid gap-2 text-justify text-black">
                  <p>
                    Atom Economy (Ekonomi Atom): Ukuran efisiensi suatu reaksi kimia berdasarkan jumlah 
      atom reaktan yang benar-benar menjadi bagian dari produk akhir. Semakin tinggi nilai 
      ekonomi atom, semakin sedikit limbah yang dihasilkan.
                  </p>
                  <p>
                    Bahan Terbarukan (Renewable Resources): Bahan yang dapat diperoleh kembali dalam 
      waktu singkat oleh alam, seperti tanaman, air, dan mikroorganisme.
                  </p>
                  <p>
                    Biodegradasi: Proses penguraian zat oleh mikroorganisme menjadi senyawa yang lebih 
      sederhana dan tidak berbahaya bagi lingkungan. 
                  </p>
                  <p>
                    Catalyst (Katalis): Zat yang mempercepat reaksi kimia tanpa ikut habis dalam reaksi. 
      Katalis penting dalam kimia hijau karena memungkinkan reaksi berlangsung lebih cepat 
      dan efisien dengan energi lebih rendah.
                  </p>
                  <p>
                    Degradasi: Proses pemecahan senyawa kompleks menjadi bentuk yang lebih sederhana. 
      Dalam konteks kimia hijau, degradasi yang aman (seperti biodegradasi) sangat 
      diutamakan. 
                  </p>
                  <p>
                    EM4 (Effective Microorganisms 4): Campuran mikroorganisme bermanfaat yang 
      digunakan untuk mempercepat fermentasi dan penguraian bahan organik, sering dipakai 
      dalam pengelolaan limbah dan pembuatan pupuk organik cair.  
                  </p>
                  <p>
                    Green Chemistry (Kimia Hijau): Cabang ilmu kimia yang berfokus pada perancangan 
      produk dan proses yang mengurangi atau menghilangkan penggunaan dan pembentukan 
      zat berbahaya.  
                  </p>
                  <p>
                    Kompos: Hasil dekomposisi bahan organik yang dapat digunakan sebagai pupuk alami. 
                  </p>
                  <p>
                    Limonene: Senyawa alami yang terdapat dalam kulit jeruk, berfungsi sebagai pelarut 
      alami dan antibakteri dalam pembersih organik.  
                  </p>
                  <p>
                    Organik (dalam konteks kimia): Senyawa yang mengandung karbon, biasanya berasal dari 
      makhluk hidup. 
                  </p>
                  <p>
                    Sintesis Hijau (Green Synthesis): Proses pembuatan senyawa kimia yang meminimalkan 
      penggunaan bahan beracun dan menghasilkan limbah sedikit.  
                  </p>
                  <p>
                    Senyawa Berbahaya (Hazardous Substances): 
                    Zat yang dapat membahayakan kesehatan 
      manusia atau lingkungan.  
                  </p>
                  <p>
                    Toksisitas: Tingkat keracunan suatu bahan terhadap makhluk hidup. Kimia hijau berusaha 
      menghindari penggunaan senyawa dengan toksisitas tinggi.
                  </p>
                </CardDescription>
              </CardHeader>
            </div>

            <div id="pustaka">
              <CardHeader>
                <CardTitle>Daftar Pustaka</CardTitle>
                <CardDescription className="grid gap-2 text-justify text-black">
                  <p>
                    Brady, J.E., Holum, J.R. 1994. General of Chemistry, 5d Edition, New York: John 
      Wiley & Son joshi, D.R and Nisha Adhikari. 2019. "Green Chemistry: Beginning”.
                  </p>
                  <p>
                    Johart, JMC dan M. Rachmawatti. 2017. ESPS Kimia Untuk SMA/MA Kelas X. 
      Jakarta. Erlangga. 
                  </p>
                  <p>
                    Recent Progress, and Future Challenges". Word Journal of Pharmacy and. 
      Pharmaceutical Sciences. Volume 8, Issue 7, hal 280, 293. 
                  </p>
                  <p>
                    Tjahjadarmawan, E. dkk. (2021). Ilmu Pengetahuan Alam SMA Kelas X. Jakarta : 
      Pusat Kurikulum dan Perbukuan Badan Penelitian dan Pengembangan dan Perbukuan 
      Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.  
                  </p>
                  <p>
                    Watoni, A. Haris dan Dini K. 2016. Buku Siswa Kimia Untuk SMA/MA Kelas X 
      Kelompok Peminatan Matematika dan Umum Pengetahuan Alam. Bandung. Yrama Widya. 
                  </p>
                </CardDescription>
              </CardHeader>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </section>
  );
}

export default Posttest
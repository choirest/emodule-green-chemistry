import { useEffect, useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import api from '@/services/api';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

const Materi = () => {
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
      const response = await api.get('/soal/materi');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/jawaban/materi');
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
              <CardTitle>Pengertian Kimia Hijau</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify italic">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pemanfaatan limbah organik sebagai pupuk merupakan salah satu contoh nyata penerapan prinsip kimia 
    hijau dalam kehidupan sehari-hari. Banyak jenis sampah rumah tangga yang biasanya dianggap tidak 
    berguna seperti kulit buah, ampas sayuran, daun kering, dan sisa makanan nabati sebenarnya mengandung 
    unsur hara yang dibutuhkan tanaman. Dengan mengolahnya kembali, kita tidak hanya mengurangi jumlah 
    sampah yang berakhir di tempat pembuangan akhir, tetapi juga menghasilkan pupuk organik yang ramah 
    lingkungan. 
                </p>
                <p>Simak Video Dibawah ini untuk dapat menafsirkan apa itu arti dari Green Chemisry </p>
                <iframe
                  src="https://www.youtube.com/embed/C-iJJzWQ1kA?si=815nhch-n3lbyULS" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
                {soal.map((item, index) => (
                  <div key={item.id} className="pb-6">
                    <h3 className="mb-3">
                      {/* {index + 1}.  */}
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
              <CardTitle>12 Prinsip Kimia Hijau</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kimia hijau bukan hanya terkait dengan penggunaan dan produksi bahan kimia
yang aman saja. Prinsip kimia hijau dapat Kalian terapkan di rumah. Bahan kimia
apa saja yang digunakan di rumah? Bagaimana cara Kalian menggunakannya?
Bagaimana agar penggunaan bahan kimia di rumah dapat memberikan kontribusi
terhadap prinsip kimia hijau? Menggunakan bahan kimia secukupnya, membuang
bahan kimia pada tempatnya, menyimpan bahan kimia dengan cara yang benar,
mengganti bahan kimia yang berbahaya dengan bahan alam yang lebih ramah
lingkungan, serta menggunakan kembali bahan plastik merupakan wujud kontribusi
Kalian terhadap prinsip kimia hijau.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prinsip kimia hijau sangat memberikan kontribusi terhadap pelestarian lingkungan.
Dalam aktivitas selanjutnya, Kalian akan merancang mengembangkan, dan
mempraktikkan prinsip yang lebih hijau untuk pelestarian lingkungan. Berikut
adalah analisis mengenai apa dan bagaimana prinsip kimia hijau :
                </p>
                <img src="/prinsip.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs mb-2">Prinsip Green Chemistry</p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>1. Waste Prevention</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <img src="/prinsip1.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs mb-2">Kamar Tidur Berantakan vs Kamar Tidur Rapi</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayangkan kamu memiliki kamar tidur. Jika setiap hari kamu membuang sampah
sembarangan, menumpuk pakaian kotor di lantai, dan membiarkan sisa makanan
begitu saja, maka dalam waktu singkat kamar itu akan menjadi sangat kotor,
berbau, dan tidak nyaman. Lalu, kamu terpaksa harus membersihkannya dengan
usaha ekstra: menyapu, mengepel, mencuci pakaian, bahkan mungkin
menyemprot pengharum ruangan untuk menghilangkan bau. Bandingkan dengan
jika kamu selalu menjaga kebersihan kamar sejak awal, misalnya dengan langsung
membuang sampah pada tempatnya, merapikan tempat tidur setiap pagi, dan
mencuci baju secara rutin. Dengan cara ini, kamar tetap bersih tanpa perlu kerja
ekstra membersihkan tumpukan kekacauan.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>2. Atom Economy</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip2a.jpg" alt="greenchemistry" className="w-2/3" />
                  <img src="/prinsip2b.jpg" alt="greenchemistry" className="w-1/3" />
                </div>
                <p className="italic text-center text-xs mb-2">Ilustrasi Prinsip ke-2 Green Chemistry</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayangkan kamu sedang membuat kue. Kamu mencampur tepung, telur, gula,
mentega, dan susu ke dalam adonan. Setelah dipanggang, semua bahan tersebut
menjadi satu kue utuh yang bisa dimakan tidak ada bahan yang terbuang. Itulah
yang disebut efisien. Seluruh bahan yang kamu masukkan ke dalam adonan,
semuanya menjadi bagian dari produk akhir yaitu kue.
Tapi, bayangkan kalau kamu membuat kue tapi ternyata hanya bagian tengahnya
yang bisa dimakan karena sisanya gosong, atau setengah dari adonan malah
tumpah dan tidak dipakai. Ini contoh yang tidak efisien, banyak bahan yang tidak
berubah menjadi produk akhir. Dalam istilah kimia hijau, itu berarti ekonomi
atomnya rendah.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>3. Less Hazardous Chemical Synthesis</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <img src="/prinsip3.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs mb-2">Nylon, Polyurethane, dan PVC</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Banyak produk yang kita gunakan setiap hari seperti stoking dari nylon, busa dari
polyurethane, atau kusen jendela dari PVC dihasilkan melalui proses kimia yang
menggunakan bahan awal berbahaya, seperti asam kuat, pelarut organik beracun,
atau senyawa karsinogenik (penyebab kanker). Misalnya, produksi nylon sering
menggunakan asam adipat dan diamina, yang bisa menyebabkan iritasi jika
terpapar langsung. Begitu juga polyurethane yang dibuat dari isosianat zat beracun
yang dapat mengiritasi paru-paru, dan PVC plasticiser seperti ftalat yang bisa
mengganggu hormon.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>4. Design Safer Chemical</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip4a.jpg" alt="greenchemistry" className="w-2/5" />
                  <img src="/prinsip4b.jpg" alt="greenchemistry" className="w-3/5" />
                </div>
                <p className="italic text-center text-xs mb-2">Pewangi Ruangan Buatan dan Alami</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayangkan kamu menyemprotkan pewangi ruangan di kamar agar lebih segar.
Pewanginya harum, tapi beberapa saat kemudian kamu merasa pusing,
tenggorokan agak gatal, atau temanmu bersin-bersin. Ini bisa jadi karena pewangi
itu mengandung senyawa kimia sintetis yang kuat, seperti phthalates yang
memang bikin wangi, tapi juga bisa berbahaya jika terhirup terus-menerus, apalagi
di ruang tertutup.
Nah, Green Chemistry melalui prinsip keempat mengajak kita untuk merancang
produk seperti pewangi ruangan dengan bahan yang tetap efektif, tapi lebih aman
untuk tubuh dan lingkungan. Misalnya menggunakan minyak esensial alami dari
daun mint, kulit jeruk, atau bunga lavender, menghindari zat pengawet sintetis
atau pelarut organik beracun, dan mendesain kemasan tanpa gas pendorong
berbahaya (aerosol).
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>5. Safer Solvents & Auxiliaries</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-justify">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip5a.jpg" alt="greenchemistry" className="w-1/5" />
                  <img src="/prinsip5b.jpg" alt="greenchemistry" className="w-4/5" />
                </div>
                <p className="italic text-center text-xs mb-4">Pembersih Noda Tinta</p>
                <p>
                  Bayangkan kamu ingin membersihkan noda tinta di meja belajar. Kamu punya dua pilihan:
                </p>
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <p className="">
                    Thinner yang bisa menghilangkan noda dengan cepat, tapi baunya menyengat,
bisa bikin pusing, dan mudah terbakar.
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <p className="">
                    Air hangat dicampur cuka yang butuh sedikit lebih banyak usaha, tapi tidak
berbahaya bagi tubuh atau lingkungan.
                  </p>
                </div>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>6. Design for Energy Efficiency</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-justify">
                <p>
                  Saat siang hari terasa agak panas, kamu bisa memilih menyalakan AC yang dingin,
tapi boros listrik atau cukup pakai kipas angin, yang lebih hemat energi dan sudah
cukup nyaman untuk kondisi itu.
                </p>
                <p>
                  Jika kamu memilih kipas, kamu sudah menerapkan prinsip efisiensi energi dengan
menggunakan energi sesuai kebutuhan, tanpa berlebihan.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>7. Use of Renewable Feddstocks</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip7a.jpg" alt="greenchemistry" className="w-1/2" />
                  <img src="/prinsip7b.jpg" alt="greenchemistry" className="w-1/2" />
                </div>
                <p className="italic text-center text-xs mb-2">Tinta Printer</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Biasanya, tinta printer dibuat dari senyawa berbasis minyak bumi (petroleum) yaitu
zat yang berasal dari fosil yang tidak dapat diperbarui. Bahan ini memang efektif,
tapi proses produksinya menyumbang emisi karbon, sulit terurai, dan suatu saat
akan habis. Nah, beberapa produsen kini beralih ke tinta berbasis kedelai. Kedelai
adalah bahan baku alami dan terbarukan karena bisa ditanam kembali setiap
tahun. Selain itu, tinta dari kedelai tidak mengandung logam berat seperti tinta
konvensional, lebih mudah terurai, sehingga lebih ramah lingkungan, dna
menghasilkan warna yang tajam, tapi tetap aman bagi kesehatan dan bumi.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>8. Reduce Derivatives</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <img src="/prinsip8.jpg" alt="greenchemistry" className="w-1/4 mx-auto mt-4" />
                <p className="italic text-center text-xs mb-2">Kubis Merah</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pembuatan pewarna alami dari kubis merah dapat dilakukan dengan cara yang
sederhana tanpa derivatisasi, yakni cukup dengan merendam potongan kubis
dalam air panas selama beberapa menit lalu menyaringnya. Proses ini langsung
menghasilkan larutan indikator alami yang dapat digunakan untuk menguji pH
tanpa penambahan bahan kimia atau tahapan yang tidak perlu. Sebaliknya, jika
tidak menerapkan prinsip ke-8, proses ekstraksi bisa melibatkan pelarut etanol,
penambahan asam atau basa untuk menyesuaikan pH, serta pemanasan
menggunakan hot plate. Meskipun hasil warnanya serupa, metode ini memerlukan
lebih banyak energi, bahan kimia tambahan, dan menghasilkan limbah. Oleh
karena itu, pendekatan tanpa derivatisasi lebih efisien, aman, dan ramah
lingkungan sesuai prinsip kimia hijau.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>9. Catalyst</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <img src="/prinsip9.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs mb-2">Polusi dari Pabrik</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Katalis mempercepat reaksi tanpa ikut bereaksi secara permanen, sehingga bisa
digunakan berulang kali. Dalam industri petrokimia, bahan bakar seperti bensin
dan solar mengandung senyawa belerang (sulfur). Saat bahan bakar dibakar,
senyawa ini berubah menjadi gas SO₂ (sulfur dioksida), yang menjadi penyebab
utama hujan asam dan pencemaran udara.
Untuk mencegahnya, industri kini menggunakan katalis dalam proses desulfurisasi,
terutama hydrodesulfurization (HDS). Dalam proses ini, senyawa belerang dalam
bahan bakar diubah menjadi hidrogen sulfida (H₂S), yang lebih mudah ditangani.
Proses ini dilakukan menggunakan katalis logam seperti nikel-molibdenum (Ni-Mo)
atau kobalt-molibdenum (Co-Mo) pada suhu dan tekanan tinggi.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>10. Design for Degradation</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip10a.jpg" alt="greenchemistry" className="w-2/5" />
                  <img src="/prinsip10b.jpg" alt="greenchemistry" className="w-3/5" />
                </div>
                <p className="italic text-center text-xs mb-2">Kantong Plastik dari Minyak Bumi vs Kantong Plastik Biodegradable</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayangkan kamu memiliki sebuah minimarket kecil yang ramai pengunjung setiap
hari. Untuk membungkus belanjaan pelanggan, kamu menggunakan ratusan
kantong plastik berbahan dasar minyak bumi. Plastik itu murah, kuat, dan mudah
didapat. Tapi setelah beberapa bulan, kamu mulai menyadari bahwa kantong
kantong itu hanya dipakai beberapa menit, tapi bertahan di lingkungan selama
ratusan tahun. Beberapa terlihat tersangkut di pohon, menyumbat selokan,
bahkan mengotori taman dekat sekolah.
Suatu hari, kamu mendengar tentang plastik biodegradable, yang terbuat dari pati
singkong atau jagung. Akhirnya kamu memutuskan: mengganti plastik biasa
dengan plastik yang bisa terurai secara alami. Meski langkah kecil, kamu tahu itu
berarti besar bagi lingkungan.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>11. Real-Time Pollution Prevention</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <img src="/prinsip11.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs mb-2">Aktivitas Memasak Air Gula</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayangkan kamu sedang memasak air gula untuk membuat sirup. Jika kamu tidak
awasi, air bisa menguap habis, dan gulanya gosong, menghasilkan asap berbau
tidak sedap. Tapi jika kamu awasi suhunya terus-menerus, kamu bisa
menghentikan pemanasan tepat waktu. Begitu pula dalam industri kimia,
pemantauan real-time bisa mencegah terbakarnya proses kimia yang
membahayakan.
Dalam proses produksi farmasi, jika suhu atau pH melenceng sedikit saja, bisa
terbentuk produk samping yang beracun. Dengan sistem pemantauan real-time,
operator dapat langsung menghentikan proses atau menyesuaikan parameter
sebelum limbah berbahaya terbentuk. Ini lebih efisien dan aman dibandingkan
cara lama yang hanya menguji sampel akhir produk di laboratorium.
                </p>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>12. Safer Chemistry for Accident Prevention</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify">
                <img src="/prinsip12.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs mb-2">Airbag Mobil</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Airbag generasi awal menggunakan natrium azida (NaN₃), senyawa yang sangat
reaktif dan beracun, sehingga menimbulkan risiko tinggi selama produksi,
penyimpanan, hingga pembuangan. Sebagai bentuk perbaikan, para ilmuwan kini
mengganti bahan tersebut dengan senyawa yang lebih stabil dan aman seperti
guanidine nitrate atau 5-aminotetrazole. Bahan alternatif ini tetap mampu
menghasilkan gas nitrogen yang dibutuhkan untuk mengembangkan airbag,
namun dengan risiko jauh lebih rendah. Dengan demikian, pemilihan bahan kimia
yang lebih aman sejak tahap desain menunjukkan bahwa keselamatan bukan
hanya tanggung jawab pengguna akhir, tetapi bagian dari prinsip keberlanjutan
dan etika dalam proses kimia itu sendiri.
                </p>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Materi
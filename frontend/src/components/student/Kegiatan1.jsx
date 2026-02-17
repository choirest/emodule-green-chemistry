import { useEffect, useRef, useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import api from '@/services/api';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Link } from 'react-router-dom';

const Kegiatan1 = () => {
  const [soal, setSoal] = useState([]);
  const [jawaban, setJawaban] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    fetchSoal();
    fetchMyJawaban();
  }, []);

  const fetchSoal = async () => {
    try {
      const response = await api.get('/api/soal/materi');
      setSoal(response.data);
    } catch (error) {
      console.error('Error fetching soal:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJawaban = async () => {
    try {
      const response = await api.get('/api/jawaban/materi');
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
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl text-center">Kegiatan 1</CardTitle>
            <CardDescription className="my-4 grid gap-2 text-justify text-black">
              <p className="font-semibold text-center text-lg mb-4">"Mengenal Kimia Hijau"</p>
              <Separator />
              <p className="font-semibold mt-4">Tujuan:</p>
              <div className="flex gap-2">
                <p className="">1.</p>
                <p className="">Mendeskripsikan pengertian kimia hijau</p>
              </div>
              <div className="flex gap-2">
                <p className="">2.</p>
                <p className="">Mendeskripsikan prinsip kimia hijau</p>
              </div>
            </CardDescription>
            <Separator />
          </CardHeader>
          <div id="a" className="pt-6 grid gap-16">
            <CardHeader>
              <CardTitle className="flex gap-4">
                Pengertian Kimia Hijau
                <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pemanfaatan limbah organik sebagai pupuk merupakan salah satu contoh nyata penerapan prinsip kimia 
    hijau dalam kehidupan sehari-hari. Banyak jenis sampah rumah tangga yang biasanya dianggap tidak 
    berguna seperti kulit buah, ampas sayuran, daun kering, dan sisa makanan nabati sebenarnya mengandung 
    unsur hara yang dibutuhkan tanaman. Dengan mengolahnya kembali, kita tidak hanya mengurangi jumlah 
    sampah yang berakhir di tempat pembuangan akhir, tetapi juga menghasilkan pupuk organik yang ramah 
    lingkungan. 
                </p>
                <p>Simak Video Dibawah ini untuk dapat menafsirkan apa itu arti dari <i>Green Chemisry</i></p>
                <iframe
                  className="md:w-100 md:h-72 mx-auto"
                  src="https://www.youtube.com/embed/C-iJJzWQ1kA?si=815nhch-n3lbyULS" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
                <p className="italic text-center text-xs mb-2">Sumber: GCCE Videos</p>
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
          </div>

          <div id="b" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">12 Prinsip Kimia Hijau</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
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
              </CardDescription>
            </CardHeader>
          </div>

          <div className="w-2/3 px-8 justify-center mx-auto pb-12">
            <Card className="bg-green-600 p-4">
              <div className="grid xl:grid-cols-4 gap-4">
                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('1')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p1.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Waste Prevention</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('2')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p2.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Atom Economy</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('3')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p3.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Less Hazardous Syntheses</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('4')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p4.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Designing Safer Chemicals</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('5')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p5.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Safer Solvents & Auxiliaries</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('6')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p6.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Design for Energy Efficiency</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('7')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p7.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Catalyst</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('8')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p8.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Reduce Derivatives</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('9')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p9.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Use of Renewable Feedstocks</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('10')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p10.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Design for Degradation</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('11')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p11.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Real-time Pollution Prevention</p>
                  </button>
                </Card>

                <Card className="bg-white hover:bg-green-100">
                  <button 
                    onClick={() => scrollToSection('12')} 
                    className="p-2 flex flex-col gap-2 items-center text-center w-full"
                  >
                    <img src="/p12.png" alt="greenchemistry" className="w-16 h-16" />
                    <p className="text-green-600">Safer Chemistry for Accident Prevention</p>
                  </button>
                </Card>
              </div>
            </Card>
          </div>

          <div id="1" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                1. Waste Prevention
                <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <img src="/prinsip1.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs">Kamar Tidur Berantakan vs Kamar Tidur Rapi</p>
                <p className="italic text-center text-xs mb-2">Sumber: fuse player</p>
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
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Hal inilah yang menjadi inti dari prinsip pertama <i>Green Chemistry</i>, lebih baik mencegah terbentuknya limbah daripada mengatasinya setelah ada. Dalam konteks kimia, prinsip ini mendorong kita untuk merancang proses yang tidak menghasilkan limbah sejak awal, seperti menggunakan bahan secukupnya, memilih reaksi yang bersih, dan tidak bergantung pada bahan beracun. Sama seperti menjaga kamar agar tetap bersih setiap hari, prinsip ini membantu menjaga bumi tetap sehat tanpa menunggu terjadi kerusakan lingkungan terlebih dahulu.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>

          <div id="2" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                2. Atom Economy
                <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip2a.jpg" alt="greenchemistry" className="w-2/3" />
                  <img src="/prinsip2b.jpg" alt="greenchemistry" className="w-1/3" />
                </div>
                <p className="italic text-center text-xs">Ilustrasi Prinsip ke-2 Green Chemistry</p>
                <p className="italic text-center text-xs mb-2">Sumber: fuse player</p>
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
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="grid gap-2 text-justify text-black">
                        <p>Nah, dalam prinsip <i>Green Chemistry</i>, ekonomi atom mengajarkan bahwa setiap atom dari bahan kimia sebaiknya masuk ke dalam produk yang diinginkan, bukan jadi limbah. Seperti dalam memasak kue, semakin sedikit bahan yang terbuang, semakin baik. Kimia yang baik bukan hanya menghasilkan produk, tapi juga menghargai setiap atom agar tidak ada yang sia-sia.</p>
                        <p>Dengan kata lain, reaksi kimia yang memiliki ekonomi atom tinggi adalah seperti membuat kue yang utuh, lezat, dan tidak ada adonan yang tersisa. Semua bahan berguna dan menjadi satu produk yang utuh. Itulah tujuan dari prinsip ini: efisien, hemat, dan minim limbah.</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>

          <div id="3" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                3. Less Hazardous Chemical Synthesis
                <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <img src="/prinsip3.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs">Nylon, Polyurethane, dan PVC</p>
                <p className="italic text-center text-xs mb-2">Sumber: fuse player</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Banyak produk yang kita gunakan setiap hari seperti <i>stoking </i>dari <i>nylon</i>, busa dari
<i> polyurethane</i>, atau kusen jendela dari <i>PVC </i>dihasilkan melalui proses kimia yang
menggunakan bahan awal berbahaya, seperti asam kuat, pelarut organik beracun,
atau senyawa karsinogenik (penyebab kanker). Misalnya, produksi <i>nylon </i>sering
menggunakan asam <i>adipat </i>dan <i>diamina</i>, yang bisa menyebabkan iritasi jika
terpapar langsung. Begitu juga <i>polyurethane </i>yang dibuat dari <i>isosianat </i>zat beracun
yang dapat mengiritasi paru-paru, dan <i>PVC plasticiser </i>seperti <i>ftalat </i>yang bisa
mengganggu hormon.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="grid gap-2 text-justify text-black">
                        <p>Dalam praktik kimia, prinsip ini diterapkan dengan menghindari bahan yang mudah meledak, beracun, korosif, atau menghasilkan gas berbahaya, dan menggantinya dengan bahan yang lebih aman jika memungkinkan. Nah jadi sesuai prinsip ketiga <i>Green Chemistry </i>bahan bahan tersebut bisa digantikan dengan bahan baku alternatif yang lebih aman, loh!</p>
                        <p className="font-semibold underline text-center mt-2">YUK SIMAK BERSAMA</p>
                        <img src="/qr3.jpg" alt="greenchemistry" className="w-1/4 mx-auto" />
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>

          <div id="4" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                4. Design Safer Chemical
                <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip4a.jpg" alt="greenchemistry" className="w-2/5" />
                  <img src="/prinsip4b.jpg" alt="greenchemistry" className="w-3/5" />
                </div>
                <p className="italic text-center text-xs">Pewangi Ruangan Buatan dan Alami</p>
                <p className="italic text-center text-xs mb-2">Sumber: orchibrand</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayangkan kamu menyemprotkan pewangi ruangan di kamar agar lebih segar.
Pewanginya harum, tapi beberapa saat kemudian kamu merasa pusing,
tenggorokan agak gatal, atau temanmu bersin-bersin. Ini bisa jadi karena pewangi
itu mengandung senyawa kimia sintetis yang kuat, seperti <i>phthalates </i>yang
memang bikin wangi, tapi juga bisa berbahaya jika terhirup terus-menerus, apalagi
di ruang tertutup.
Nah, <i>Green Chemistry </i>melalui prinsip keempat mengajak kita untuk merancang
produk seperti pewangi ruangan dengan bahan yang tetap efektif, tapi lebih aman
untuk tubuh dan lingkungan. Misalnya menggunakan minyak esensial alami dari
daun mint, kulit jeruk, atau bunga lavender, menghindari zat pengawet sintetis
atau pelarut organik beracun, dan mendesain kemasan tanpa gas pendorong
berbahaya <i>(aerosol)</i>.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Produk pewangi yang ramah lingkungan dan aman tetap memberikan efek harum, tanpa menyebabkan iritasi, alergi, atau pencemaran udara dalam ruangan. Ini adalah contoh nyata dari prinsip “desain yang lebih aman” yaitu membuat sesuatu yang bermanfaat tapi juga tidak membahayakan siapa pun yang menggunakannya.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>

          <div id="5" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                5. Safer Solvents & Auxiliaries
                <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-justify text-black">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip5a.jpg" alt="greenchemistry" className="w-1/5" />
                  <img src="/prinsip5b.jpg" alt="greenchemistry" className="w-4/5" />
                </div>
                <p className="italic text-center text-xs">Pembersih Noda Tinta</p>
                <p className="italic text-center text-xs mb-4">Sumber: fauxbrushed</p>
                <p>
                  Bayangkan kamu ingin membersihkan noda tinta di meja belajar. Kamu punya dua pilihan:
                </p>
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <p className="">
                    <i>Thinner </i>yang bisa menghilangkan noda dengan cepat, tapi baunya menyengat,
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
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="grid gap-2 text-justify text-black">
                        <p>Prinsip ke-5 <i>Green Chemistry </i>mengajarkan bahwa dalam reaksi kimia atau produksi produk, bahan pelarut (zat pelarut atau media reaksi) sebaiknya tidak beracun, tidak mudah terbakar, dan aman bagi lingkungan. Pelarut sering digunakan dalam eksperimen kimia dan pembuatan produk seperti obat, cat, kosmetik, atau sabun. Namun, banyak pelarut konvensional seperti <i>aseton, benzena, toluena, atau kloroform </i>bersifat racun, mudah menguap, dan bisa mencemari udara, air, serta membahayakan kesehatan.</p>
                        <p>Sebagai gantinya, <i>Green Chemistry </i>mendorong penggunaan pelarut yang lebih aman, seperti air, <i>etanol</i>, atau pelarut berbasis tumbuhan, seperti minyak kelapa atau minyak jeruk.</p>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
            
          <div id="6" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                6. Design for Energy Efficiency
                <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-justify text-black">
                <p>
                  Saat siang hari terasa agak panas, kamu bisa memilih menyalakan AC yang dingin,
tapi boros listrik atau cukup pakai kipas angin, yang lebih hemat energi dan sudah
cukup nyaman untuk kondisi itu.
                </p>
                <p>
                  Jika kamu memilih kipas, kamu sudah menerapkan prinsip efisiensi energi dengan
menggunakan energi sesuai kebutuhan, tanpa berlebihan.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="grid gap-2 text-justify text-black">
                        <p>Nah, prinsip ke-6 dalam <i>Green Chemistry </i>mengajarkan bahwa reaksi atau proses kimia sebaiknya dilakukan dengan energi sekecil mungkin, dan kalau bisa cukup dilakukan pada suhu ruang dan tekanan biasa, tanpa perlu dipanaskan terus-menerus, ditekan tinggi, atau memakai alat mahal yang menyedot daya besar. Karena setiap tambahan energi butuh bahan bakar, listrik, atau sumber daya lain yang akhirnya menghasilkan limbah panas dan emisi.</p>
                        <p>Contoh penerapannya:</p>
                        <ul>
                          <li className="flex gap-1"><p>-</p>Memilih reaksi kimia yang terjadi pada suhu ruang, bukan dipanaskan 100°C berjam-jam.</li>
                          <li className="flex gap-1"><p>-</p>Menggunakan katalis agar reaksi berlangsung lebih cepat dan hemat energi.</li>
                          <li className="flex gap-1"><p>-</p>Menggunakan energi alternatif, seperti sinar matahari untuk mengeringkan hasil reaksi.</li>
                        </ul>
                        <p className="font-semibold underline text-center mt-2">BAGAIMANA KATALIS DAPAT MEMBUAT REAKSI BERLANGSUNG LEBIH CEPAT?</p>
                        <p className="font-semibold underline text-center">YUK SCAN UNTUK TAU JAWABANNYA!</p>
                        <img src="/qr6.jpg" alt="greenchemistry" className="w-1/4 mx-auto" />
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
            
          <div id="7" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                7. Use of Renewable Feddstocks
                <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip7a.jpg" alt="greenchemistry" className="w-1/2" />
                  <img src="/prinsip7b.jpg" alt="greenchemistry" className="w-1/2" />
                </div>
                <p className="italic text-center text-xs">Tinta Printer</p>
                <p className="italic text-center text-xs mb-2">Sumber: fuse player</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Biasanya, tinta <i>printer </i>dibuat dari senyawa berbasis minyak bumi <i>(petroleum) </i>yaitu
zat yang berasal dari fosil yang tidak dapat diperbarui. Bahan ini memang efektif,
tapi proses produksinya menyumbang emisi karbon, sulit terurai, dan suatu saat
akan habis. Nah, beberapa produsen kini beralih ke tinta berbasis kedelai. Kedelai
adalah bahan baku alami dan terbarukan karena bisa ditanam kembali setiap
tahun. Selain itu, tinta dari kedelai tidak mengandung logam berat seperti tinta
konvensional, lebih mudah terurai, sehingga lebih ramah lingkungan, dan
menghasilkan warna yang tajam, tapi tetap aman bagi kesehatan dan bumi.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Prinsip 7 <i>Green Chemistry </i>sebisa mungkin, produk kimia harus menggunakan bahan baku yang dapat diperbarui, bukan bahan yang berasal dari sumber daya terbatas seperti batu bara, gas alam, atau minyak bumi.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
            
          <div id="8" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                8. Reduce Derivatives
                <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <img src="/prinsip8.jpg" alt="greenchemistry" className="w-1/4 mx-auto mt-4" />
                <p className="italic text-center text-xs">Kubis Merah</p>
                <p className="italic text-center text-xs mb-2">Sumber: idnmedis</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pembuatan pewarna alami dari kubis merah dapat dilakukan dengan cara yang
sederhana tanpa derivatisasi, yakni cukup dengan merendam potongan kubis
dalam air panas selama beberapa menit lalu menyaringnya. Proses ini langsung
menghasilkan larutan indikator alami yang dapat digunakan untuk menguji pH
tanpa penambahan bahan kimia atau tahapan yang tidak perlu. Sebaliknya, jika
tidak menerapkan prinsip ke-8, proses ekstraksi bisa melibatkan pelarut etanol,
penambahan asam atau basa untuk menyesuaikan <i>pH</i>, serta pemanasan
menggunakan <i>hot plate</i>. Meskipun hasil warnanya serupa, metode ini memerlukan
lebih banyak energi, bahan kimia tambahan, dan menghasilkan limbah. Oleh
karena itu, pendekatan tanpa derivatisasi lebih efisien, aman, dan ramah
lingkungan sesuai prinsip kimia hijau.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Nah, prinsip ke-8 dalam <i>Green Chemistry </i>mengajarkan hindari langkah-langkah kimia yang tidak perlu, seperti penambahan senyawa pelindung, pelindih, atau modifikasi struktur kimia (derivatisasi) jika tidak benar-benar dibutuhkan. Setiap langkah tambahan membutuhkan bahan kimia lagi, meningkatkan limbah, dan mungkin menggunakan pelarut atau energi tambahan yang berpotensi menghasilkan produk samping berbahaya.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
            
          <div id="9" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                9. Catalyst
                <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <img src="/prinsip9.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs">Polusi dari Pabrik</p>
                <p className="italic text-center text-xs mb-2">Sumber: fuse player</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Katalis mempercepat reaksi tanpa ikut bereaksi secara permanen, sehingga bisa
digunakan berulang kali. Dalam industri petrokimia, bahan bakar seperti bensin
dan solar mengandung senyawa belerang (sulfur). Saat bahan bakar dibakar,
senyawa ini berubah menjadi gas SO₂ (sulfur dioksida), yang menjadi penyebab
utama hujan asam dan pencemaran udara.
Untuk mencegahnya, industri kini menggunakan katalis dalam proses desulfurisasi,
terutama <i>hydrodesulfurization (HDS)</i>. Dalam proses ini, senyawa belerang dalam
bahan bakar diubah menjadi hidrogen sulfida (H₂S), yang lebih mudah ditangani.
Proses ini dilakukan menggunakan katalis logam seperti nikel-molibdenum (Ni-Mo)
atau kobalt-molibdenum (Co-Mo) pada suhu dan tekanan tinggi.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Prinsip ke-9 <i>Green Chemistry </i>menekankan pentingnya penggunaan katalis dibandingkan reagen sekali pakai dalam proses kimia. Katalis memungkinkan reaksi berlangsung lebih cepat dan efisien tanpa ikut habis dalam reaksi, sehingga dapat digunakan berulang kali. Hal ini tidak hanya menghemat bahan dan energi, tetapi juga mengurangi limbah dan dampak lingkungan. 
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
            
          <div id="10" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                10. Design for Degradation
                <img src="/sl.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <div className="w-1/2 flex gap-2 mx-auto mt-4">
                  <img src="/prinsip10a.jpg" alt="greenchemistry" className="w-2/5" />
                  <img src="/prinsip10b.jpg" alt="greenchemistry" className="w-3/5" />
                </div>
                <p className="italic text-center text-xs">Kantong Plastik dari Minyak Bumi vs Kantong Plastik Biodegradable</p>
                <p className="italic text-center text-xs mb-2">Sumber: ftmn UNAIR</p>
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
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Prinsip ke-10 menekankan bahwa produk kimia yang dibuat harus dapat terurai menjadi zat yang tidak berbahaya setelah digunakan, baik di lingkungan tanah, air, maupun udara. Artinya, ketika produk tersebut dibuang, ia tidak meninggalkan racun, tidak mencemari tanah atau air, dan tidak bertahan selama ratusan tahun seperti plastik konvensional.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
            
          <div id="11" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                11. Real-Time Pollution Prevention
                <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <img src="/prinsip11.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs">Aktivitas Memasak Air Gula</p>
                <p className="italic text-center text-xs mb-2">Sumber: istockphoto</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bayangkan kamu sedang memasak air gula untuk membuat sirup. Jika kamu tidak
awasi, air bisa menguap habis, dan gulanya gosong, menghasilkan asap berbau
tidak sedap. Tapi jika kamu awasi suhunya terus-menerus, kamu bisa
menghentikan pemanasan tepat waktu. Begitu pula dalam industri kimia,
pemantauan <i>real-time </i>bisa mencegah terbakarnya proses kimia yang
membahayakan.
Dalam proses produksi farmasi, jika suhu atau <i>pH </i>melenceng sedikit saja, bisa
terbentuk produk samping yang beracun. Dengan sistem pemantauan <i>real-time</i>,
operator dapat langsung menghentikan proses atau menyesuaikan parameter
sebelum limbah berbahaya terbentuk. Ini lebih efisien dan aman dibandingkan
cara lama yang hanya menguji sampel akhir produk di laboratorium.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Prinsip ke-11 <i>Green Chemistry </i>menekankan pentingnya memantau proses kimia secara langsung dan terus-menerus <i>(real-time) </i>untuk mencegah pencemaran sebelum terjadi, bukan menanganinya setelah selesai. Dalam industri, hal ini dapat dilakukan dengan memasang sensor online atau sistem pemantauan otomatis yang dapat mendeteksi jika reaksi menghasilkan zat berbahaya, berlebih, atau tidak sesuai standar.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
            
          <div id="12" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle className="flex gap-4">
                12. Safer Chemistry for Accident Prevention
                <img src="/st.png" alt="greenchemistry" className="w-4 h-4" />
              </CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-justify text-black">
                <img src="/prinsip12.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
                <p className="italic text-center text-xs">Airbag Mobil</p>
                <p className="italic text-center text-xs mb-2">Sumber: camagazine</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Airbag </i>generasi awal menggunakan <i>natrium azida (NaN₃)</i>, senyawa yang sangat
reaktif dan beracun, sehingga menimbulkan risiko tinggi selama produksi,
penyimpanan, hingga pembuangan. Sebagai bentuk perbaikan, para ilmuwan kini
mengganti bahan tersebut dengan senyawa yang lebih stabil dan aman seperti
<i>guanidine nitrate </i>atau <i>5-aminotetrazole</i>. Bahan alternatif ini tetap mampu
menghasilkan gas nitrogen yang dibutuhkan untuk mengembangkan <i>airbag</i>,
namun dengan risiko jauh lebih rendah. Dengan demikian, pemilihan bahan kimia
yang lebih aman sejak tahap desain menunjukkan bahwa keselamatan bukan
hanya tanggung jawab pengguna akhir, tetapi bagian dari prinsip keberlanjutan
dan etika dalam proses kimia itu sendiri.
                </p>
                <div className="grid grid-cols-3">
                  <Card className="col-span-2 col-start-2">
                    <CardHeader className="grid gap-4">
                      <CardTitle className="w-2/3 mx-auto bg-green-500 p-2 text-white text-center rounded-sm">
                        NOTECHEM
                      </CardTitle>
                      <CardDescription className="text-justify text-black">
                        Prinsip ke-12 <i>Green Chemistry </i>mendorong kita untuk merancang zat dan proses kimia yang lebih aman, baik dalam penanganan, penggunaan, maupun pembuangannya. Ini berarti menghindari bahan kimia yang mudah meledak, mudah terbakar, atau menghasilkan gas beracun, dan menggantinya dengan alternatif yang tidak reaktif berbahaya. Tujuannya adalah melindungi pekerja, masyarakat, dan lingkungan dari risiko kecelakaan yang bisa terjadi selama produksi, penyimpanan, atau transportasi bahan kimia.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>

          <div id="tugas" className="grid gap-16 pb-6">
            <CardHeader>
              <CardTitle>Tugas</CardTitle>
              <CardDescription className="pt-2 grid gap-4 text-black">
                <p>Untuk mengeksplor pengetahuaun dan pemahamanmu, klik <a href="https://drive.google.com/drive/folders/1FiVfT4WT1Rzuqojc3BALsjTuxY110e19?usp=drive_link" className="hover:underline text-green-500 hover:text-green-600">link berikut</a>!</p>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Kegiatan1
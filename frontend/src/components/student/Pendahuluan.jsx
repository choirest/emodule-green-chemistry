import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Scroll } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'

const Pendahuluan = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <div className="grid gap-16">
            <CardHeader>
              <CardTitle>Identitas Materi</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black">
                <div className="grid grid-cols-3">
                  <p className="col-span-1">Materi</p>
                  <p className="col-span-2">: Kimia Hijau</p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1">Semester</p>
                  <p className="col-span-2">: 2</p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1">Metode Pembelajaran</p>
                  <p className="col-span-2">: Diskusi kelompok, studi kasus, pembelajaran berbasis proyek</p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1">Waktu</p>
                  <p className="col-span-2">: 2 x 90 menit</p>
                </div>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Peta Konsep</CardTitle>
              <CardDescription>
                <img src="/konsep.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Capaian Pembelajaran</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black">
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <p className="">
                    Peserta didik mampu mengamati, menyelidiki, dan menjelaskan serta menerapkan 
    konsep kimia fenomena limbah organik rumah tangga
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <p className="">
                    Peserta didik mampu merancang dan melakukan penelitian yang dimulai dari 
    mengamati, mempertanyakan dan memprediksi, merencanakan dan melakukan 
    penyelidikan, memproses dan menganalisis data, mengevaluasi dan refleksi, dan 
    mengomunikasikan hasil temuannya
                  </p>
                </div>
              </CardDescription>
            </CardHeader>
            
            <CardHeader>
              <CardTitle>Tujuan Pembelajaran</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black">
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <p className="">Mendesripsikan pengertian kimia hijau</p>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <p className="">Mendeskripsikan prinsip kimia hijau</p>
                </div>
                <div className="flex gap-2">
                  <p className="">3.</p>
                  <p className="">Menganalisis prinsip kimia hijau dalam kehidupan sehari-hari </p>
                </div>
                <div className="flex gap-2">
                  <p className="">4.</p>
                  <p className="">
                    Mengidentifikasi proses kimia dalam kehidupan sehari hari terkait hal hal yang tidak 
    sesuai dengan prinsip kimia hijau
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">5.</p>
                  <p className="">Menciptakan kegiatan yang mendukung prinsip kimia hijau </p>
                </div>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Petunjuk Pembelajaran</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black">
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <p className="">Bukalah laman web.</p>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <p className="">
                    Muncul beberapa menu di bagian samping kiri, yaitu Beranda, Pendahuluan, Pretest, 
                  Materi, Kegiatan 1, Kegiatan 2, dan soal Post Test. 
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">3.</p>
                  <p className="">
                    Pada menu Beranda terdiri atas cover modul yang judul modul, logo UNS, subjek 
    sasaran modul, penyusun modul, dan instansi penyusun modul. 
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">4.</p>
                  <p className="">
                    Pada menu Pendahuluan terdiri atas Identitas Materi, Peta Konsep, Capaian 
    Pembelajaran, Tujuan Pembelajaran, Petunjuk Pembelajaran, Referensi, dan 
    Glosarium.
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">5.</p>
                  <p className="">
                    Pada Menu Pretest terdiri atas 15 soal untuk mengukur keterampilan awal system 
    thinking dan sustainability literacy siswa 
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">6.</p>
                  <p className="">
                    Pada Menu Materi dan Kata Kunci disajikan materi mengenai kimia hijau
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">7.</p>
                  <p className="">
                    Pada menu Kegiatan 1, Kegiatan 2, dan Kegiatan 3 terdiri dari tahapan penentuan pertanyaan 
    dasar, desain proyek, penyusunan jadwal, pemantauan kemajuan proyek, 
    penilaian hasil, dan evaluasi pengalaman belajar. 
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">8.</p>
                  <p className="">
                    Pada Menu Post Test terdiri atas 15 soal untuk mengukur keterampilan system 
    thinking dan sustainability literacy siswa setelah menggunakan e-module
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="">9.</p>
                  <p className="">
                    Pembuatan proyek pada setiap kegiatan dimulai dengan mengamati fenomena 
    pada gambar/video disertai membaca deskripsi dari fenomena. 
                  </p>
                </div>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Referensi</CardTitle>
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

            <CardHeader className="italic">
              <CardTitle>Glosarium</CardTitle>
              <CardDescription className="grid gap-2 text-justify text-black">
                <p>
                  <strong>Atom Economy (Ekonomi Atom): </strong>
                  Ukuran efisiensi suatu reaksi kimia berdasarkan jumlah 
    atom reaktan yang benar-benar menjadi bagian dari produk akhir. Semakin tinggi nilai 
    ekonomi atom, semakin sedikit limbah yang dihasilkan.
                </p>
                <p>
                  <strong>Bahan Terbarukan (Renewable Resources): </strong>
                  Bahan yang dapat diperoleh kembali dalam 
    waktu singkat oleh alam, seperti tanaman, air, dan mikroorganisme.
                </p>
                <p>
                  <strong>Biodegradasi: </strong>
                  Proses penguraian zat oleh mikroorganisme menjadi senyawa yang lebih 
    sederhana dan tidak berbahaya bagi lingkungan. 
                </p>
                <p>
                  <strong>Catalyst (Katalis): </strong>
                  Zat yang mempercepat reaksi kimia tanpa ikut habis dalam reaksi. 
    Katalis penting dalam kimia hijau karena memungkinkan reaksi berlangsung lebih cepat 
    dan efisien dengan energi lebih rendah.
                </p>
                <p>
                  <strong>Degradasi: </strong>
                  Proses pemecahan senyawa kompleks menjadi bentuk yang lebih sederhana. 
    Dalam konteks kimia hijau, degradasi yang aman (seperti biodegradasi) sangat 
    diutamakan. 
                </p>
                <p>
                  <strong>EM4 (Effective Microorganisms 4): </strong>
                  Campuran mikroorganisme bermanfaat yang 
    digunakan untuk mempercepat fermentasi dan penguraian bahan organik, sering dipakai 
    dalam pengelolaan limbah dan pembuatan pupuk organik cair.  
                </p>
                <p>
                  <strong>Green Chemistry (Kimia Hijau): </strong>
                  Cabang ilmu kimia yang berfokus pada perancangan 
    produk dan proses yang mengurangi atau menghilangkan penggunaan dan pembentukan 
    zat berbahaya.  
                </p>
                <p>
                  <strong>Kompos: </strong>
                  Hasil dekomposisi bahan organik yang dapat digunakan sebagai pupuk alami. 
                </p>
                <p>
                  <strong>Limonene: </strong>
                  Senyawa alami yang terdapat dalam kulit jeruk, berfungsi sebagai pelarut 
    alami dan antibakteri dalam pembersih organik.  
                </p>
                <p>
                  <strong>Organik (dalam konteks kimia): </strong>
                  Senyawa yang mengandung karbon, biasanya berasal dari 
    makhluk hidup. 
                </p>
                <p>
                  <strong>Sintesis Hijau (Green Synthesis): </strong>
                  Proses pembuatan senyawa kimia yang meminimalkan 
    penggunaan bahan beracun dan menghasilkan limbah sedikit.  
                </p>
                <p>
                  <strong>Senyawa Berbahaya (Hazardous Substances): </strong>
                  Zat yang dapat membahayakan kesehatan 
    manusia atau lingkungan.  
                </p>
                <p>
                  <strong>Toksisitas: </strong>
                  Tingkat keracunan suatu bahan terhadap makhluk hidup. Kimia hijau berusaha 
    menghindari penggunaan senyawa dengan toksisitas tinggi.
                </p>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Pendahuluan
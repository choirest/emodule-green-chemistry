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
                  <p className="">Buka laman web.</p>
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
                    Pada menu Beranda terdiri atas <i>cover e-module </i>yang judul modul, logo UNS, subjek 
    sasaran <i>e-module</i>, penyusun <i>e-module</i>, dan instansi penyusun <i>e-module</i>. 
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
                    Pada Menu Pretest terdiri atas 15 soal untuk mengukur keterampilan awal <i>system 
    thinking </i>dan <i>sustainability literacy </i>siswa 
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
                    Pada Menu Post Test terdiri atas 15 soal untuk mengukur keterampilan <i>system 
    thinking </i>dan <i>sustainability literacy </i>siswa setelah menggunakan <i>e-module</i>.
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
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Pendahuluan
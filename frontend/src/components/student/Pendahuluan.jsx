import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Scroll } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

const Pendahuluan = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Pendahuluan</CardTitle>
            <Separator />
          </CardHeader>
          <div className="pt-6 grid gap-16">
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
                  <p className="">Mendeskripsikan pengertian kimia hijau</p>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <p className="">Mendeskripsikan prinsip kimia hijau</p>
                </div>
                <div className="flex gap-2">
                  <p className="">3.</p>
                  <p className="">Menganalisis prinsip kimia hijau dalam kehidupan sehari-hari</p>
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
                  <p className="">Menciptakan kegiatan yang mendukung prinsip kimia hijau</p>
                </div>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Deskripsi Singkat E-Module</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black text-justify">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>E-module</i> berbasis <i>Inquiry-based Experiment (IBE)</i> terintegrasi <i>green chemistry</i> ini disusun sebagai media pembelajaran agar siswa dapat merancang sendiri eksperimen sederhana dengan mengintegrasikan prinsip <i>green chemistry</i>. Praktikum kimia yang dilakukan siswa yaitu mengolah limbah organik menjadi produk ramah lingkungan. Melalui kegiatan ini, siswa menerapkan prinsip kimia hijau. <i>E-module</i> ini diharapkan dapat meningkatkan kemampuan <i>system thinking</i> dan <i>sustainability literacy</i> siswa yang mengarah pada pentingnya keberlanjutan lingkungan melalui penerapan langsung ilmu kimia dalam kehidupan sehari-hari, khususnya pada Materi Kimia Hijau.
                </p>
              </CardDescription>
            </CardHeader>
            
            <CardHeader>
              <CardTitle>Pengetahuan Prasyarat</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black">
                <p>Peserta didik telah memiliki pengetahuan prasyarat berupa:</p>
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <p className="">Pemahaman konsep dasar reaksi kimia, meliputi perubahan fisika dan kimia, pereaksi dan produk, serta hukum kekekalan massa</p>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <p className="">Kemampuan stoikiometri dasar, khususnya dalam menyetarakan persamaan reaksi dan memahami perbandingan mol pereaksi dan produk</p>
                </div>
                <div className="flex gap-2">
                  <p className="">3.</p>
                  <p className="">Pemahaman sifat zat dan ikatan kimia, termasuk jenis ikatan, polaritas molekul, serta hubungan struktur molekul dengan sifat fisika dan kimianya</p>
                </div>
                <div className="flex gap-2">
                  <p className="">4.</p>
                  <p className="">Pengetahuan dasar tentang limbah dan dampaknya terhadap lingkungan, mencakup jenis limbah dan pengaruhnya terhadap kualitas lingkungan dan kesehatan</p>
                </div>
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Peta Konsep</CardTitle>
              <CardDescription>
                <img src="/konsep.png" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Petunjuk Navigasi</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black">
                <p>Yuk Cek Petunjuk Navigasi melalui <a href="https://drive.google.com/drive/folders/1ip0w1PKUCNqXYMTVs0pcEb0tqtuey1fI?usp=sharing" className="hover:underline text-green-500 hover:text-green-600">link berikut</a>!</p>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Pendahuluan
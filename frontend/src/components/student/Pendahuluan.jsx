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
              <CardTitle></CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black text-justify">
                <p className="indent-8">Pada akhir Fase E, peserta didik memiliki kemampuan untuk memahami sistem pengukuran, energi alternatif, ekosistem, bioteknologi, keanekaragaman hayati, struktur atom, reaksi kimia, hukum-hukum dasar kimia, dan perubahan iklim sehingga responsif dan dapat berperan aktif dalam menyelesaikan masalah pada isu-isu lokal dan global. Semua upaya tersebut diarahkan pada pencapaian tujuan pembangunan yang berkelanjutan (<i>Sustainable Development Goals/SDGs</i>).</p>
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle>Elemen</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black text-justify">
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <div className="grid gap-1">
                    <p className="">
                      Pemahaman IPA
                    </p>
                    <p className="">
                      Peserta didik memahami sistem pengukuran dalam kerja ilmiah; energi alternatif dan pemanfaatannya untuk mengatasi permasalahan ketersediaan energi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <div className="grid gap-1">
                    <p className="">
                      Keterampilan Proses
                    </p>
                    <div className="flex gap-2">
                      <p className="">
                        &bull;
                      </p>
                      <div className="grid gap-1">
                        <p className="">
                          Mengamati
                        </p>
                        <p>
                          Peserta didik mengamati fenomena ilmiah dan mencatat hasil pengamatannya dengan memperhatikan karakteristik dari objek yang diamati untuk memunculkan pertanyaan yang akan diselidiki.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="">
                        &bull;
                      </p>
                      <div className="grid gap-1">
                        <p className="">
                          Mempertanyakan dan Memprediksi
                        </p>
                        <p>
                          Peserta didik mengidentifikasi pertanyaan dan permasalahan yang dapat diselidiki secara ilmiah. Peserta didik menghubungkan pengetahuan yang telah dimiliki dengan pengetahuan baru untuk membuat prediksi.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="">
                        &bull;
                      </p>
                      <div className="grid gap-1">
                        <p className="">
                          Merencanakan dan Melakukan Penyelidikan
                        </p>
                        <p>
                          Peserta didik merencanakan penyelidikan ilmiah dan melakukan langkah-langkah operasional berdasarkan referensi yang benar untuk menjawab pertanyaan. Peserta didik melakukan pengukuran atau membandingkan variabel terikat dengan menggunakan alat yang sesuai serta memperhatikan kaidah ilmiah.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="">
                        &bull;
                      </p>
                      <div className="grid gap-1">
                        <p className="">
                          Memproses, Menganalisis Data dan Informasi
                        </p>
                        <p>
                          Peserta didik menafsirkan informasi yang diperoleh dengan jujur dan bertanggung jawab.
                        </p>
                        <p>
                          Peserta didik menganalisis menggunakan alat dan metode yang tepat berdasarkan data penyelidikan dengan menggunakan referensi rujukan yang sesuai, serta menyimpulkan hasil penyelidikan.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="">
                        &bull;
                      </p>
                      <div className="grid gap-1">
                        <p className="">
                          Mengevaluasi dan Refleksi
                        </p>
                        <p>
                          Peserta didik mengidentifikasi sumber ketidakpastian dan kemungkinan penjelasan alternatif dalam rangka mengevaluasi kesimpulan serta menjelaskan cara spesifik untuk meningkatkan kualitas data. Peserta didik menganalisis validitas informasi dan mengevaluasi pendekatan yang digunakan untuk menyelesaikan masalah dalam penyelidikan.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <p className="">
                        &bull;
                      </p>
                      <div className="grid gap-1">
                        <p className="">
                          Mengomunikasikan Hasil
                        </p>
                        <p>
                          Peserta didik mengomunikasikan hasil penyelidikan secara sistematis dan utuh ditunjang dengan argumen ilmiah berdasarkan referensi sesuai konteks penyelidikan.
                        </p>
                      </div>
                    </div>
                  </div>
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
                <p className="indent-8">
                  <i>E-module</i> berbasis <i>Inquiry-based Experiment (IBE)</i> terintegrasi <i>green chemistry</i> ini disusun sebagai media pembelajaran agar siswa dapat merancang sendiri eksperimen sederhana dengan mengintegrasikan prinsip <i>green chemistry</i>. Praktikum kimia yang dilakukan siswa yaitu mengolah limbah organik menjadi produk ramah lingkungan. Melalui kegiatan ini, siswa menerapkan prinsip kimia hijau. <i>E-module</i> ini diharapkan dapat meningkatkan kemampuan <i>system thinking</i> dan <i>sustainability literacy</i> siswa yang mengarah pada pentingnya keberlanjutan lingkungan melalui penerapan langsung ilmu kimia dalam kehidupan sehari-hari, khususnya pada Materi Kimia Hijau.
                </p>
              </CardDescription>
            </CardHeader>

            <div className="w-fit px-8 justify-center mx-auto pb-12">
              <Card className="bg-green-600 p-4">
                <div className="grid xl:grid-cols-2 gap-4">
                  <Card className="bg-white hover:bg-green-100">
                    <a href="https://drive.google.com/file/d/1oVztqV9FhwcWa7RkYEC9Yfl7O5Bb0o4W/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                      <p className="text-green-600">System Thinking</p>
                      <img src="/st.png" alt="greenchemistry" className="w-16 h-16" />
                    </a>
                  </Card>
                  <Card className="bg-white hover:bg-green-100">
                    <a href="https://drive.google.com/file/d/1gnarFR0830Ztu7qqiuSkKgEdfXMEI5UC/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                      <p className="text-green-600">Sustainability Literacy</p>
                      <img src="/sl.png" alt="greenchemistry" className="w-16 h-16" />
                    </a>
                  </Card>
                </div>
              </Card>
            </div>

            <CardHeader>
              <CardTitle>Pengetahuan Prasyarat</CardTitle>
              <CardDescription className="pt-2 grid gap-2 text-black">
                <p>Peserta didik telah memiliki pengetahuan prasyarat berupa:</p>
                <div className="flex gap-2">
                  <p className="">1.</p>
                  <p className="">Peserta didik memahami perubahan atau reaksi kimia</p>
                </div>
                <div className="flex gap-2">
                  <p className="">2.</p>
                  <p className="">Peserta didik memahami dampak penggunaan bahan kimia dalam kehidupan sehari hari</p>
                </div>
                <div className="flex gap-2">
                  <p className="">3.</p>
                  <p className="">Peserta didik memahami keselamatan kerja laboratorium</p>
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
                <p>Yuk Cek Petunjuk Navigasi melalui <a href="https://drive.google.com/file/d/1yXiit3X2bjn3XekGZfdtS8S6f6mUG_0Z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-500 hover:text-green-600">link berikut</a>!</p>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Pendahuluan
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

const Francis = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Halaman Francis</CardTitle>
            <Separator />
          </CardHeader>
          <div className="pt-6 grid gap-16">
            <CardHeader>
              <CardDescription className="grid gap-2 text-black">
                <div className="grid grid-cols-3">
                  <p className="col-span-1 font-semibold">Judul</p>
                  <p className="col-span-2">: <i>E-Module</i> Berbasis <i>Inquiry-based Experiment</i> terintegrasi <i>Green Chemistry</i></p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1 font-semibold">Nama Mata Pelajaran</p>
                  <p className="col-span-2">: Kimia</p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1 font-semibold">Topik Materi</p>
                  <p className="col-span-2">: Kimia Hijau dalam Pembangunan Berkelanjutan 2030</p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1 font-semibold">Kelas</p>
                  <p className="col-span-2">: X Fase E</p>
                </div>
                <div className="grid grid-cols-3">
                  <p className="col-span-1 font-semibold">Waktu</p>
                  <p className="col-span-2">: 4 x 90 menit</p>
                </div>

                <p className="col-span-1 font-semibold">Tim Penyusun</p>
                <div className="w-4/5 mx-auto py-8 grid xl:flex gap-4">
                  <div className="grid gap-4 w-fit justify-items-center mx-auto">
                    <img src="/annisa.png" alt="Adik Annisa Fitri Suryani S.Pd." width={150} height={150} className="bg-green-600 rounded-lg" />
                    <div className="grid gap-1 mx-auto text-center">
                      <p className=" mx-auto">Adik Annisa Fitri Suryani S.Pd.</p>
                    </div>
                  </div>
                  <div className="grid gap-4 w-fit justify-items-center mx-auto">
                    <img src="/masykuri.png" alt="Prof. Dr. Mohammad Masykuri, M.Si." width={150} height={150} className="bg-green-600 rounded-lg" />
                    <div className="grid gap-1 mx-auto text-center">
                      <p className=" mx-auto">Prof. Dr. Mohammad Masykuri, M.Si.</p>
                    </div>
                  </div>
                  <div className="grid gap-4 w-fit justify-items-center mx-auto">
                    <img src="/maria.png" alt="Dr. Maria Ulfa, S.Si., M.Si." width={150} height={150} className="bg-green-600 rounded-lg" />
                    <div className="grid gap-1 mx-auto text-center">
                      <p className=" mx-auto">Dr. Maria Ulfa, S.Si., M.Si.</p>
                    </div>
                  </div>
                </div>

                <p className="col-span-1 font-semibold">Validator</p>
                <ul>
                  <li>Dr. Kadek Dwi Hendratma Gunawan S.Pd., M.Pd. </li>
                  <li>Dr. Ari Syahidul Shidiq, S.Pd., M.Pd. </li>
                  <li>Dr. Putu Anindita Widhiya Putri, S.Pd., M.Pd. </li>
                  <li>Eswahyudi Kurniawan, S.Pd., Gr. </li>
                  <li>Layla Nur Rahmawati, S.Pd., Gr. </li>
                  <li>Azizah Nur Prasetyawati, S.Pd.  </li>
                  <li>Sahda Nabilah Qurrotulaini, S.Pd. </li>
                </ul>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Francis
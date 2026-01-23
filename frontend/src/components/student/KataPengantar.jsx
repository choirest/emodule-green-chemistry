import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'

const KataPengantar = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <div className="grid gap-16">
            <CardHeader>
              <CardTitle></CardTitle>
              <CardDescription className="grid gap-4 text-justify">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alhamdulillah penulis panjatkan kehadirat Allah SWT yang telah memberikan rahmat dan 
    hidayah-Nya sehingga e-module berbasis Inquiry-based experiment terintegrasi green 
    chemistry pada materi kimia hijau dapat terselesaikan. E-module ini disusun berdasarkan 
    konsep kurikulum merdeka sehingga pengetahuan yang diajarkan membuat peserta didik 
    terampil dalam menyajikan pengetahuan yang dikuasainya secara konkret dan abstrak.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modul ini digunakan sebagai bahan ajar guru dan siswa kelas X untuk memenuhi capaian 
    pembelajaran. Selain untuk memenuhi capaian pembelajaran modul ini disajikan dengan 
    aktivitas siswa yang dapat meningkatkan keterampilan system thinking dan sustainability 
    literacy.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Penulis menyadari bahwa e-module ini sangat perlu untuk dilakukan penyempurnaan baik 
    dari segi penyajian materi ataupun bahasa, oleh karena itu penulis mengharapkan kritik 
    dan saran yang membangun untuk dilakukan perbaikan dan penyempurnaan modul 
    berbasis Inquiry-based experiment terintegrasi green chemistry pada materi kimia hijau. 
    Penulis berharap modul ini dapat bermanfaat bagi pembaca khususnya guru dan siswa 
    SMA/MA kelas X.
                </p>

              </CardDescription>
            </CardHeader>
            <CardFooter className="grid gap-12 mt-4 text-right">
              <p>Surakarta, Juli 2025</p>
              <p>Penulis</p>
            </CardFooter>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default KataPengantar
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
              <CardDescription className="grid gap-4 text-justify text-black">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alhamdulillah penulis panjatkan kehadirat Allah SWT yang telah memberikan rahmat dan 
    hidayah-Nya sehingga <i>e-module </i>berbasis <i>Inquiry-based Experiment </i>terintegrasi <i>green 
    chemistry </i>pada materi kimia hijau dapat terselesaikan. <i>E-module </i>ini disusun berdasarkan 
    konsep kurikulum merdeka sehingga pengetahuan yang diajarkan membuat peserta didik 
    terampil dalam menyajikan pengetahuan yang dikuasainya secara konkret dan abstrak.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>E-module </i>ini digunakan sebagai bahan ajar guru dan siswa kelas X untuk memenuhi capaian 
    pembelajaran. Selain untuk memenuhi capaian pembelajaran <i>e-module</i> ini disajikan dengan 
    aktivitas siswa yang dapat meningkatkan keterampilan <i>system thinking </i>dan <i>sustainability 
    literacy</i>.
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Penulis menyadari bahwa <i>e-module </i>ini sangat perlu untuk dilakukan penyempurnaan baik 
    dari segi penyajian materi ataupun bahasa, oleh karena itu penulis mengharapkan kritik 
    dan saran yang membangun untuk dilakukan perbaikan dan penyempurnaan <i>e-module </i> 
    berbasis <i>Inquiry-based Experiment </i>terintegrasi <i>green chemistry </i>pada materi kimia hijau. 
    Penulis berharap <i>e-module </i>ini dapat bermanfaat bagi pembaca khususnya guru dan siswa 
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
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ClipboardList } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { Link } from 'react-router-dom'

const Beranda = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <div className="grid gap-16">
            <CardHeader>
              <CardTitle>Tujuan Pembuatan e-Module</CardTitle>
              <CardDescription className="text-justify">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-module berbasis Inquiry-based Experiment (IBE) terintegrasi green 
    chemistry ini disusun sebagai media pembelajaran agar siswa dapat merancang 
    sendiri eksperimen sederhana dengan mengintegrasikan prinsip green chemistry. 
    Praktikum kimia yang dilakukan siswa yaitu mengolah limbah organik menjadi 
    produk ramah lingkungan. Melalui kegiatan ini, siswa menerapkan prinsip kimia 
    hijau. E-module ini diharapkan dapat meningkatkan kemampuan system thinking 
    dan sustainability literacy siswa yang mengarah pada pentingnya keberlanjutan 
    lingkungan melalui penerapan langsung ilmu kimia dalam kehidupan sehari-hari, 
    khususnya pada Materi Kimia Hijau.
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Aspek Green Chemistry</CardTitle>
              <CardDescription>
                <img src="/prinsip.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Sintaks Inquiry Based Experiment (IBE)</CardTitle>
              <CardDescription>
                <img src="/sintaks.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
              </CardDescription>
            </CardHeader>

            <CardHeader>
              <CardTitle>Petunjuk Penggunaan</CardTitle>
              <CardDescription>
                <img src="/petunjuk.jpg" alt="greenchemistry" className="w-1/2 mx-auto mt-4" />
              </CardDescription>
            </CardHeader>

            <div className="w-1/3 px-8 flex gap-8 mx-auto font-semibold">
              <Link to="/kegiatan-1" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <ClipboardList className="w-8 h-8 mx-auto" />
                  <h3 className="mx-auto">Kegiatan 1</h3>
                </Card>
              </Link>
              <Link to="/kegiatan-2" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <ClipboardList className="w-8 h-8 mx-auto" />
                  <h3 className="mx-auto">Kegiatan 2</h3>
                </Card>
              </Link>
            </div>

            <CardHeader className="text-right">
              <CardTitle>Identitas Penyusun</CardTitle>
              <CardDescription>
                Adik Annisa Fitri Suryani S.Pd. 
                <br />
    Prof. Dr. Mohammad Masykuri, M.Si. 
                <br />
    Dr. Maria Ulfa, S.Si., M.Si.
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Beranda
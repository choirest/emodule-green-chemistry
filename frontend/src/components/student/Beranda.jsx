import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { BookOpen, ClipboardList, FileText, FlaskConical, Home, User } from 'lucide-react'
import { ScrollArea } from '../ui/scroll-area'
import { Link } from 'react-router-dom'
import { Separator } from '../ui/separator'

const Beranda = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Beranda</CardTitle>
            <Separator />
          </CardHeader>
          <div className="grid gap-16">
            <div className="p-6 grid xl:grid-cols-5 gap-5">
              <Link to="/" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <Home className="w-8 h-8 " />
                  <h3 className="font-semibold">Beranda</h3>
                </Card>
              </Link>
              <Link to="/francis" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <User className="w-8 h-8 " />
                  <h3 className="font-semibold">Francis</h3>
                </Card>
              </Link>
              <Link to="/kata-pengantar" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <BookOpen className="w-8 h-8 " />
                  <h3 className="font-semibold">Kata Pengantar</h3>
                </Card>
              </Link>
              <Link to="/pendahuluan" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <FileText className="w-8 h-8 " />
                  <h3 className="font-semibold">Pendahuluan</h3>
                </Card>
              </Link>
              <Link to="/kerangka-modul" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <ClipboardList className="w-8 h-8 " />
                  <h3 className="font-semibold">Kerangka e-Modul</h3>
                </Card>
              </Link>
              <Link to="/kegiatan-1" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <FlaskConical className="w-8 h-8 " />
                  <h3 className="font-semibold">Kegiatan 1</h3>
                </Card>
              </Link>
              <Link to="/kegiatan-2" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <FlaskConical className="w-8 h-8" />
                  <h3 className="font-semibold">Kegiatan 2</h3>
                </Card>
              </Link>
              <Link to="/kegiatan-3" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <FlaskConical className="w-8 h-8" />
                  <h3 className="font-semibold">Kegiatan 3</h3>
                </Card>
              </Link>
              <Link to="/kegiatan-4" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <FlaskConical className="w-8 h-8" />
                  <h3 className="font-semibold">Kegiatan 4</h3>
                </Card>
              </Link>
              <Link to="/evaluasi" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <ClipboardList className="w-8 h-8" />
                  <h3 className="font-semibold">Evaluasi</h3>
                </Card>
              </Link>
              <Link to="/kunci-jawaban" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <ClipboardList className="w-8 h-8" />
                  <h3 className="font-semibold">Kunci Jawaban</h3>
                </Card>
              </Link>
              <Link to="/glosarium" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <ClipboardList className="w-8 h-8" />
                  <h3 className="font-semibold">Glosarium</h3>
                </Card>
              </Link>
              <Link to="/daftar-pustaka" className="w-full">
                <Card className="p-4 bg-green-600 hover:bg-green-700 text-white">
                  <ClipboardList className="w-8 h-8" />
                  <h3 className="font-semibold">Daftar Pustaka</h3>
                </Card>
              </Link>
            </div>

            <CardHeader className="mt-8 text-right text-black">
              <CardTitle>Identitas Penyusun</CardTitle>
              <CardDescription className="text-black">
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
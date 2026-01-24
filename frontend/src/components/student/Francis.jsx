import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'

const Francis = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <div className="grid gap-8">
            <CardHeader>
              <CardTitle>E-Module Berbasis Inquiry-based Experiment terintegrasi Green Chemistry</CardTitle>
            </CardHeader>
            <CardHeader>
              <CardTitle>Tim Penyusun</CardTitle>
              <CardDescription className="text-black">
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
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle>Validator</CardTitle>
              <CardDescription className="text-black">
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
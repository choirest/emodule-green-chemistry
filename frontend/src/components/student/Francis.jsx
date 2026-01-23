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
              <CardDescription>
                <ul>
                  <li>Adik Annisa Fitri Suryani S.Pd. </li>
                  <li>Prof. Dr. Mohammad Masykuri, M.Si. </li>
                  <li>Dr. Maria Ulfa, S.Si., M.Si. </li>
                </ul>
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle>Validator</CardTitle>
              <CardDescription>
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
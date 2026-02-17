import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

const Glosarium = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Glosarium</CardTitle>
            <Separator />
          </CardHeader>
          <div className="pt-6 grid gap-16">
            <div id="glosarium">
              <CardHeader>
                <CardDescription className="grid gap-2 text-justify text-black">
                  <p>
                    <i>Atom Economy</i> (Ekonomi Atom): Ukuran efisiensi suatu reaksi kimia berdasarkan jumlah 
      atom reaktan yang benar-benar menjadi bagian dari produk akhir. Semakin tinggi nilai 
      ekonomi atom, semakin sedikit limbah yang dihasilkan.
                  </p>
                  <p>
                    Bahan Terbarukan <i>(Renewable Resources)</i>: Bahan yang dapat diperoleh kembali dalam 
      waktu singkat oleh alam, seperti tanaman, air, dan <i>mikroorganisme</i>.
                  </p>
                  <p>
                    Biodegradasi: Proses penguraian zat oleh <i>mikroorganisme</i> menjadi senyawa yang lebih 
      sederhana dan tidak berbahaya bagi lingkungan. 
                  </p>
                  <p>
                    <i>Catalyst</i> (Katalis): Zat yang mempercepat reaksi kimia tanpa ikut habis dalam reaksi. 
      Katalis penting dalam kimia hijau karena memungkinkan reaksi berlangsung lebih cepat 
      dan efisien dengan energi lebih rendah.
                  </p>
                  <p>
                    Degradasi: Proses pemecahan senyawa kompleks menjadi bentuk yang lebih sederhana. 
      Dalam konteks kimia hijau, degradasi yang aman (seperti biodegradasi) sangat 
      diutamakan. 
                  </p>
                  <p>
                    EM4 <i>(Effective Microorganisms 4)</i>: Campuran <i>mikroorganisme</i> bermanfaat yang 
      digunakan untuk mempercepat fermentasi dan penguraian bahan organik, sering dipakai 
      dalam pengelolaan limbah dan pembuatan pupuk organik cair.  
                  </p>
                  <p>
                    <i>Green Chemistry</i> (Kimia Hijau): Cabang ilmu kimia yang berfokus pada perancangan 
      produk dan proses yang mengurangi atau menghilangkan penggunaan dan pembentukan 
      zat berbahaya.  
                  </p>
                  <p>
                    Kompos: Hasil dekomposisi bahan organik yang dapat digunakan sebagai pupuk alami. 
                  </p>
                  <p>
                    <i>Limonene</i>: Senyawa alami yang terdapat dalam kulit jeruk, berfungsi sebagai pelarut 
      alami dan antibakteri dalam pembersih organik.  
                  </p>
                  <p>
                    Organik (dalam konteks kimia): Senyawa yang mengandung karbon, biasanya berasal dari 
      makhluk hidup. 
                  </p>
                  <p>
                    Sintesis Hijau <i>(Green Synthesis)</i>: Proses pembuatan senyawa kimia yang meminimalkan 
      penggunaan bahan beracun dan menghasilkan limbah sedikit.  
                  </p>
                  <p>
                    Senyawa Berbahaya <i>(Hazardous Substances)</i>: 
                    Zat yang dapat membahayakan kesehatan 
      manusia atau lingkungan.  
                  </p>
                  <p>
                    Toksisitas: Tingkat keracunan suatu bahan terhadap makhluk hidup. Kimia hijau berusaha 
      menghindari penggunaan senyawa dengan toksisitas tinggi.
                  </p>
                </CardDescription>
              </CardHeader>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Glosarium
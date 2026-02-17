import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

const DaftarPustaka = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Daftar Pustaka</CardTitle>
            <Separator />
          </CardHeader>
          <div className="pt-6 grid gap-16">
            <div id="pustaka">
              <CardHeader>
                <CardDescription className="grid gap-2 text-justify text-black">
                  <p>
                    Anastas, P. A. (2019) Beyond reductionism thinking in chemistry for sustainability. Trends in Chemistry, 1, 145–148.
                  </p>
                  <p>
                    Brady, J.E., Holum, J.R. 1994. General of Chemistry, 5d Edition, New York: John 
      Wiley & Son joshi, D.R and Nisha Adhikari. 2019. "Green Chemistry: Beginning”.
                  </p>
                  <p>
                    D. H. Meadows. (2009). Thinking in Systems: A Primer. D Wright (ed.), Earthscan, London.
                  </p>
                  <p>
                    International Organization for Standardization. ISO 17556:2019, Plastics - Determination of the Ultimate Aerobic Biodegradability of Plastic Materials in Soil by Measuring the Oxygen Demand in a Respirometer or the Amount of Carbon Dioxide Evolved.
                  </p>
                  <p>
                    Johart, JMC dan M. Rachmawatti. 2017. ESPS Kimia Untuk SMA/MA Kelas X. 
      Jakarta. Erlangga. 
                  </p>
                  <p>
                    Recent Progress, and Future Challenges". Word Journal of Pharmacy and. 
      Pharmaceutical Sciences. Volume 8, Issue 7, hal 280, 293. 
                  </p>
                  <p>
                    Tjahjadarmawan, E. dkk. (2021). Ilmu Pengetahuan Alam SMA Kelas X. Jakarta : 
      Pusat Kurikulum dan Perbukuan Badan Penelitian dan Pengembangan dan Perbukuan 
      Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.  
                  </p>
                  <p>
                    Watoni, A. Haris dan Dini K. 2016. Buku Siswa Kimia Untuk SMA/MA Kelas X 
      Kelompok Peminatan Matematika dan Umum Pengetahuan Alam. Bandung. Yrama Widya. 
                  </p>
                  <p>
                    Wissinger, J. E.; Ellison, C. J.; Dichtel, W. R.; Trotta, J. T.; Chang, A. B; Yang, A.; Bunyard C. W. (2020). Sustainable Polymer Framework. NSF Center for Sustainable Polymers, University of Minnesota.
                  </p>
                  <p>
                    World Economic Forum, Ellen MacArthur Foundation and McKinsey and Company. (2016). The New Plastics Economy Rethinking the Future of Plastics.
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

export default DaftarPustaka
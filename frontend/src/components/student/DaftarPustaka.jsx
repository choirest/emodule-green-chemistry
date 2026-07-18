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
                  <div className="w-fit px-8 justify-center mx-auto pb-12">
                    <Card className="bg-green-600 p-4">
                      <div className="grid xl:grid-cols-5 gap-4">
                        <a href="https://drive.google.com/file/d/1X1fHT-DEa7orvApO-ODAQrtD6TRPhH8R/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp1.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/16z2sAo3o9mJo5Dtnr0755mt4AXMVao8W/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp2.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/198mtQoJeXTlyzCcxVITFuOSSaftUyakW/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp3.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/1rg3qs4RdGzF85kioglPz7a3C5RA0fXrQ/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp4.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/1vc6d8CMK0Z9X35pOvy4SdTSn2_53T0Ln/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp5.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/1Sh95AOjo1qBtc0HkHErF-K_JlGgRePIl/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp6.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/10mScDvuuj0Tkq5u0SxfK1F5vjgHyzn1j/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp7.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/1gdeiNkwmDNrrgz8Lu_PWhuLwpP75tHwv/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp8.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/16DADWU3fijLNCf_idt5KRKDNUhXUl6bh/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp9.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/1945TlG5t_JEJEQN7izbpFsJicRvZJFkD/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp10.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://drive.google.com/file/d/1OKV62uuNnJQiVVx_Mx9V9XQadkesTJ5a/view?usp=sharing" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp11.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://books.google.co.id/books?id=YJRfEQAAQBAJ&printsec=frontcover&hl=id&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp12.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://anyflip.com/qdblg/smsi/ " className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp13.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://repository.getpress.co.id/media/publications/642727-kimia-hijau-prinsip-sintesis-ramah-lingk-01ba0ee8.pdf?exp=1784367975&kid=1&sig=El6jTG7wgeBCqzmoqZ58N7O9MMftj79upHFE18PRRvg" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp14.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                        <a href="https://www.scribd.com/document/452486701/buku-kimia-dasar-raymon-chang-pdf" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                          <img src="/dp15.png" alt="greenchemistry" className="w-40 h-50 rounded-lg" />
                        </a>
                      </div>
                    </Card>
                  </div>
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
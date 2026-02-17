import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

const Evaluasi = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Evaluasi</CardTitle>
            <Separator />
          </CardHeader>
          <div className="pt-6 grid gap-16">
            <CardHeader>
              <CardDescription className="grid gap-2 text-black">
                <p>Klik <a href="https://forms.gle/mZaR7QeNepYjhaWi8" className="hover:underline text-green-500 hover:text-green-600">link berikut</a> untuk mengakses evaluasi <i>e-module</i>!</p>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default Evaluasi
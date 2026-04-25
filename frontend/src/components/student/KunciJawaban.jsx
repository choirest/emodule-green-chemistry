import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'

const KunciJawaban = () => {
  return (
    <section className="p-4">
      <Card>
        <ScrollArea className="h-144">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Kunci Jawaban dan Pedoman Penskoran</CardTitle>
            <Separator />
          </CardHeader>
          <div className="pt-6 grid gap-16">
            <CardHeader>
              <CardDescription className="grid gap-2 text-black">
                {/* <p>Klik <a href="https://bit.ly/KuncidanPedoman" className="hover:underline text-green-500 hover:text-green-600">link berikut</a> untuk mengakses kunci jawaban dan pedoman penskoran!</p> */}
                <div className="w-fit px-8 justify-center mx-auto pb-12">
                  <Card className="bg-green-600 p-4">
                    <div className="grid xl:grid-cols-5 gap-4">
                      <a href="https://drive.google.com/drive/folders/12anWY8imqjuBZkoYDgZeY4DotA2bxIY9" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                        <img src="/kj1.png" alt="greenchemistry" className="rounded-lg" />
                      </a>
                      <a href="https://drive.google.com/drive/folders/1IWpI8JprpjLOwuL_YdyybqcnDkLfGXlx" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                        <img src="/kj2.png" alt="greenchemistry" className="rounded-lg" />
                      </a>
                      <a href="https://drive.google.com/drive/folders/1ZpBLVWfL4LgYIN7BX_CPtOJ6ZVnjIwJL" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                        <img src="/kj3.png" alt="greenchemistry" className="rounded-lg" />
                      </a>
                      <a href="https://drive.google.com/drive/folders/1YWDEeJOlLjz7LzDma5J4WH8I0DwIfv3o" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                        <img src="/kj4.png" alt="greenchemistry" className="rounded-lg" />
                      </a>
                      <a href="https://drive.google.com/drive/folders/1xoIlI9grP5QW0udfl95fwtNZgvGXnfC0" className="p-2 flex flex-col gap-2 items-center text-center w-full">
                        <img src="/kj5.png" alt="greenchemistry" className="rounded-lg" />
                      </a>
                    </div>
                  </Card>
                </div>
              </CardDescription>
            </CardHeader>
          </div>
        </ScrollArea>
      </Card>
    </section>
  )
}

export default KunciJawaban
import * as React from "react"

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel"

export function CarouselPlugin() {

  return (
    <Carousel
      className='w-[100%] overflow-x-auto'
    >
      <CarouselContent>
        {Array.from({ length: 15}).map((_, index) => (
          <CarouselItem key={index} className='basis-1/4'>
              <Card>
                <CardContent className="flex min-h-[40rem] items-center justify-center p-6 rounded-none">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

import * as React from 'react';

import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export function CarouselPlugin() {
  return (
    <Carousel className='w-[100%]'>
      <CarouselContent className='overflow-x-auto'>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className='basis-1/4'>
            <Card>
              <CardContent className='flex min-h-[40rem] items-center justify-center rounded-none p-6'>
                <span className='text-4xl font-semibold'>{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

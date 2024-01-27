import * as React from 'react';

import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export function CarouselPlugin({products} : {products: any}) {
  return (
    <Carousel className='w-[100%]'>
      <CarouselContent className='overflow-x-auto'>
        {products.map((product:any, index:any) => (
          <CarouselItem key={index} className='basis-1/4'>
            <Card>
              <CardContent className='flex min-h-[40rem] items-center justify-center rounded-none p-6'>
                <span className='text-4xl font-semibold'>{product.name}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

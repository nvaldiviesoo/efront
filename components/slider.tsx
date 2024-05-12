import * as React from 'react';
import Image from 'next/image';

import { Card, CardContent, CardFooter } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Link from 'next/link';

export function CarouselPlugin({products} : {products: any}) {
  return (
    <Carousel className='w-[100%]'>
      <CarouselContent className='overflow-x-auto'>
        {products.map((product:any, index:any) => (
          <Link href={{
            pathname: "/productDetail",
            query: {
              id: product.id
            }
            }}
            key={index}>
          <CarouselItem key={index} className='basis-1/4'>
            <Card className='rounded-none border-none cursor-pointer'>
              <CardContent className='flex min-h-[30rem] px-0'>
                  <Image
                    src={product.image}
                    alt='product'
                    height={150}
                    width={1000}
                  />
              </CardContent>
              <CardFooter className='flex flex-col justify-start items-start px-0 pt-0.5 my-0'>
                <p className='text-xs'>{product.description}</p>
                <p className='text-[0.7rem] text-slate-500'>{product.name}</p>
                <p className='text-[0.7rem] font-bold'>{product.price}</p>

              </CardFooter>
            </Card>
          </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function CarouselLoader(){
  return (
    <Carousel className='w-[100%]'>
    <CarouselContent className='overflow-x-auto'>
    {Array.from({ length: 5 }, (_, index) => (
        <CarouselItem key={index} className='basis-1/4'>
          <Card className='rounded-none border-none'>
            <CardContent className='flex min-h-[30rem] px-0 animate-pulse bg-slate-50 '>
            </CardContent>
            <CardFooter className='flex flex-col justify-start items-start px-0 pt-0.5 my-0'>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-2 bg-slate-100 rounded col-span-10"></div>
              <div className="h-2 bg-slate-100 rounded col-span-8 "></div>
              <div className="h-2 bg-slate-100 rounded col-span-6 "></div>

            </div>
            </CardFooter>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  )
}
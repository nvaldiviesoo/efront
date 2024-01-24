import Layout from '../components/wrappers/Layout';

import { ScrollArea } from '../components/ui/scroll-area';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Checkbox } from '../components/ui/checkbox';

const Product = () => {
  return (
    <Layout>
      <ScrollArea className='ml-[2%] h-[35rem] w-56 rounded-md border border-none'>
        <div className='p-4'>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>SORT BY</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>PRODUCT TYPE</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>SIZE</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>FEATURES</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>FIT</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>ACTIVITY</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>COLLECTION</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>COLOR</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>PATTERN</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>DISCOUNT</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>SORT BY</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>PRICE</AccordionTrigger>
              <AccordionContent>
                <div className='items-top flex space-x-2'>
                  <Checkbox id='terms1' />
                  <div className='grid gap-1.5 leading-none'>
                    <label
                      htmlFor='terms1'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      Price: Low to High
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </Layout>
  );
};

export default Product;

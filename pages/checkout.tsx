/* eslint-disable react/jsx-props-no-spreading */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Layout from '../components/wrappers/Layout';

import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Input } from '../components/ui/input';
import { toast } from '../components/ui/use-toast';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';

//TODO: QUE TABLA MUESTRE LOS PRODUCTOS QUE EFECTIVAMENTE ESTÁN EN EL CARRITO
const purchase = [
  {
    name: 'Polerón negro',
    quantity: '1',
    price: '43.000',
  },
  {
    name: 'Gorro para trotar',
    quantity: '2',
    price: '21.000',
  },
  {
    name: 'Zapatillas de Tennis',
    quantity: '1',
    price: '78.000',
  },
  {
    name: 'Lentes de sol',
    quantity: '1',
    price: '56.000',
  },
  {
    name: 'Polera blanca',
    quantity: '3',
    price: '29.000',
  },
  {
    name: 'Calcetines',
    quantity: '2',
    price: '8.000',
  },
];

const FormSchema = z.object({
  street_address: z.string().min(2, {
    message: 'La dirección debe tener al menos 2 caracteres',
  }),
  city: z.string().min(2, {
    message: 'La ciudad debe tener al menos 2 caracteres',
  }),
  zip_code: z.string().regex(/^\d{5}$/, {
    message: 'El código postal debe tener 5 dígitos',
  }),
  country: z.string().min(2, {
    message: 'El país debe tener al menos 2 caracteres',
  }),
  payment_mode: z.enum(['COD', 'Card'], {
    required_error: 'Se requiere seleccionar un modo de pago',
  }),
});

export default function Checkout() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      street_address: '',
      city: '',
      zip_code: '',
      country: '',
      payment_mode: 'COD',
    },
  });

//TODO: CONFIGURAR POST A BACKEND

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Layout>
      <div className='flex flex-row justify-stretch'>
        <Card className='w-1/2 rounded-none border-none p-5 px-20 shadow-none'>
          <Label className='text-f text-2xl'>Datos de envío</Label>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='w-full space-y-6'
              >
                <FormField
                  control={form.control}
                  name='street_address'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input placeholder='Dirección' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ciudad</FormLabel>
                      <FormControl>
                        <Input placeholder='Ciudad' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='zip_code'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código Postal</FormLabel>
                      <FormControl>
                        <Input placeholder='Código Postal' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='country'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>País</FormLabel>
                      <FormControl>
                        <Input placeholder='País' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='payment_mode'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Medio de Pago</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue='COD'
                          className='flex'
                        >
                          <div className='flex items-center space-x-10'>
                            <FormItem>
                              <div className='flex items-center space-x-2'>
                                <FormControl>
                                  <RadioGroupItem value='COD' />
                                </FormControl>
                                <FormLabel htmlFor='r1'>COD</FormLabel>
                              </div>
                            </FormItem>
                            <FormItem>
                              <div className='flex items-center space-x-2'>
                                <FormControl>
                                  <RadioGroupItem value='Card' />
                                </FormControl>
                                <FormLabel htmlFor='r1'>
                                  Tarjeta de Crédito
                                </FormLabel>
                              </div>
                            </FormItem>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit'>Confirmar pedido</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className='h-full w-1/2 border-none p-5 px-20 shadow-none'>
          <Label className='text-f text-2xl'>Carrito</Label>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='px-0'>Producto</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead className='px-0 text-right'>
                    Precio Unitario
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchase.map((product) => (
                  <TableRow key={product.name}>
                    <TableCell className='px-0 font-medium'>
                      {product.name}
                    </TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell className='px-0 text-right font-bold'>
                      ${product.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <p>Subtotal</p>
                <p className='font-bold'>$4000</p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Costos de Envío</p>
                <p>$2000</p>
              </div>
              <div className='flex flex-row justify-between text-xl font-bold'>
                <p>Total</p>
                <div className='flex flex-row items-center gap-2'>
                  <p className='text-xs font-normal text-[#686868]'>CLP</p>
                  <p>$6000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

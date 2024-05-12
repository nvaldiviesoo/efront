import { CarouselLoader, CarouselPlugin } from '../components/slider';

import Layout from '../components/wrappers/Layout';
import { useGetProductsQuery } from './api/productsApi';

export default function Home() {

  const { data, isLoading } = useGetProductsQuery('');

  return (
    <Layout>
      <div className='mx-10'>
        <h1 className='text-2xl font-bold'>20% DESCUENTO EN LOS ESENCIALES</h1>
          {isLoading ? (
            <CarouselLoader />
          ) : (
            <CarouselPlugin products={data.data} />
          )}
      </div>
    </Layout>
  );
}

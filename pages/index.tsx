import { CarouselPlugin } from '../components/slider';

import Navbar from '../components/navbar';
import Layout from '../components/wrappers/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='mx-10'>
        <h1 className="text-2xl font-bold">20% DESCUENTO EN LOS ESENCIALES</h1>
        <CarouselPlugin />
      </div>
    </Layout>
  );
}

import Layout from '../../components/wrappers/Layout';
import ProductCreator from "../../components/features/admin/product-creator";
import AdminSidebar from "../../components/wrappers/AdminSidebar";

export default function NewProduct() {
  return (
    <Layout>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <AdminSidebar>
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Agregar Producto</h1>
            </div>
            <ProductCreator />
          </main>
        </div>
        </AdminSidebar>
      </div>
    </Layout>
  )
}
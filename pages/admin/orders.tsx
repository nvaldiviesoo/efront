import Layout from '../../components/wrappers/Layout';
import AdminSidebar from '../../components/wrappers/AdminSidebar';
import { Badge } from '../../components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

// Se prueba con el json público orders_example.json
import orders from '../../public/admin_json_example/orders_example.json';

export default function Orders() {
  return (
    <Layout>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <AdminSidebar>
          <div className='flex flex-col'>
            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
              <div className='flex items-center'>
                <h1 className='text-lg font-semibold md:text-2xl'>Órdenes</h1>
              </div>
              <Card>
                <CardHeader className='px-7'>
                  <CardTitle>Pedidos</CardTitle>
                  <CardDescription>Compras recientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cliente</TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          Tipo de Pedido
                        </TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          Estado
                        </TableHead>
                        <TableHead className='hidden md:table-cell'>
                          Fecha
                        </TableHead>
                        <TableHead className='text-right'>Monto</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow className='bg-accent'>
                          <TableCell>
                            <div className='font-medium'>{order.Client}</div>
                            <div className='text-muted-foreground hidden text-sm md:inline'>
                              {order.ClientEmail}
                            </div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            {order.Type}
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              {order.Status}
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            {order.Date}
                          </TableCell>
                          <TableCell className='text-right'>
                            ${order.Amount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </main>
          </div>
        </AdminSidebar>
      </div>
    </Layout>
  );
}

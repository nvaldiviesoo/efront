import { MoreHorizontal } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

// Se prueba con el json público orders_example.json
import { Button } from '../../components/ui/button';

export default function Orders() {
  const orders = [
    {
      Client: 'John Doe',
      ClientEmail: 'john.doe@example.com',
      Type: 'Purchase',
      Status: 'Completed',
      Date: '2024-01-15',
      Amount: 15000,
    },
    {
      Client: 'Jane Smith',
      ClientEmail: 'jane.smith@example.com',
      Type: 'Purchase',
      Status: 'Pending',
      Date: '2024-02-10',
      Amount: 2750,
    },
    {
      Client: 'Alice Johnson',
      ClientEmail: 'alice.johnson@example.com',
      Type: 'Refund',
      Status: 'Completed',
      Date: '2024-03-05',
      Amount: 50030,
    },
    {
      Client: 'Robert Brown',
      ClientEmail: 'robert.brown@example.com',
      Type: 'Purchase',
      Status: 'Shipped',
      Date: '2024-04-20',
      Amount: 3200,
    },
    {
      Client: 'Emily Davis',
      ClientEmail: 'emily.davis@example.com',
      Type: 'Purchase',
      Status: 'Cancelled',
      Date: '2024-05-11',
      Amount: 54000,
    },
    {
      Client: 'Michael Wilson',
      ClientEmail: 'michael.wilson@example.com',
      Type: 'Refund',
      Status: 'Pending',
      Date: '2024-06-01',
      Amount: 75050,
    },
    {
      Client: 'Sarah Miller',
      ClientEmail: 'sarah.miller@example.com',
      Type: 'Purchase',
      Status: 'Completed',
      Date: '2024-07-07',
      Amount: 43060,
    },
    {
      Client: 'David Anderson',
      ClientEmail: 'david.anderson@example.com',
      Type: 'Purchase',
      Status: 'Pending',
      Date: '2024-08-14',
      Amount: 120090,
    },
    {
      Client: 'Laura Martinez',
      ClientEmail: 'laura.martinez@example.com',
      Type: 'Refund',
      Status: 'Completed',
      Date: '2024-09-22',
      Amount: 95000,
    },
    {
      Client: 'James Taylor',
      ClientEmail: 'james.taylor@example.com',
      Type: 'Purchase',
      Status: 'Shipped',
      Date: '2024-10-18',
      Amount: 21000,
    },
  ];
  return (
    <Layout>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <AdminSidebar>
          <div className='flex flex-col'>
            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
              <Card>
                <CardHeader className='px-7'>
                  <CardTitle>Órdenes</CardTitle>
                  <CardDescription>Compras recientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre Cliente</TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          Estado
                        </TableHead>
                        <TableHead className='hidden md:table-cell'>
                          Fecha
                        </TableHead>
                        <TableHead className='hidden md:table-cell'>
                          Monto
                        </TableHead>
                        <TableHead className='text-right' />
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
                            <Badge className='text-xs' variant='secondary'>
                              {order.Status}
                            </Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            {order.Date}
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            ${order.Amount}
                          </TableCell>
                          <TableCell className='text-right'>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup='true'
                                  size='icon'
                                  variant='ghost'
                                >
                                  <MoreHorizontal className='h-4 w-4' />
                                  <span className='sr-only'>Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align='end'>
                                <DropdownMenuItem>
                                  Marcar orden como completada
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Ver Detalles
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
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

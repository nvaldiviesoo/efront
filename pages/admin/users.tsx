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

import { Switch } from '../../components/ui/switch';

export default function Users() {
  const users = [
    {
      Name: 'Juan Pérez',
      Email: 'juan.perez@example.com',
      Status: 'Activo',
      Balance: 150075,
    },
    {
      Name: 'María López',
      Email: 'maria.lopez@example.com',
      Status: 'Inactivo',
      Balance: 275050,
    },
    {
      Name: 'Carlos García',
      Email: 'carlos.garcia@example.com',
      Status: 'Activo',
      Balance: 12500,
    },
    {
      Name: 'Ana Martínez',
      Email: 'ana.martinez@example.com',
      Status: 'Activo',
      Balance: 320020,
    },
    {
      Name: 'Luis Rodríguez',
      Email: 'luis.rodriguez@example.com',
      Status: 'Activo',
      Balance: 5000,
    },
    {
      Name: 'Carmen Sánchez',
      Email: 'carmen.sanchez@example.com',
      Status: 'Activo',
      Balance: 74580,
    },
    {
      Name: 'Miguel Fernández',
      Email: 'miguel.fernandez@example.com',
      Status: 'Activo',
      Balance: 43000,
    },
    {
      Name: 'Elena Gómez',
      Email: 'elena.gomez@example.com',
      Status: 'Inactivo',
      Balance: 120050,
    },
    {
      Name: 'Sofía Díaz',
      Email: 'sofia.diaz@example.com',
      Status: 'Activo',
      Balance: 98025,
    },
    {
      Name: 'Pedro Torres',
      Email: 'pedro.torres@example.com',
      Status: 'Activo',
      Balance: 210000,
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
                  <CardTitle>Usuarios</CardTitle>
                  <CardDescription>
                    Lista de usuarios de la plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nombre completo</TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          E-mail
                        </TableHead>
                        <TableHead className='hidden sm:table-cell'>
                          Saldo disponible
                        </TableHead>
                        <TableHead className='text-right'>
                          Activar/Desactivar Cuenta
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow className='bg-accent'>
                          <TableCell>
                            <div className='font-medium'>{user.Name}</div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            {user.Email}
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              ${user.Balance}
                            </Badge>
                          </TableCell>
                          <TableCell className='text-right'>
                            <Switch />
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

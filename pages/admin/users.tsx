import { useState, useEffect } from 'react';
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

import { useGetUsersQuery, useUpdateUserMutation } from '../api/usersApi';
import { toast } from '../../components/ui/use-toast';
import { Button } from '../../components/ui/button';

export default function Users() {
  const { data, isLoading } = useGetUsersQuery('');
  const [updateUser] = useUpdateUserMutation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.data);
    }
  }, [data]);

  const handleStaffChange = async (user_id, is_staff) => {
    const body = { id: user_id, is_staff: !is_staff };
    try {
      await updateUser(body).unwrap();
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === user_id ? { ...user, is_staff: !is_staff } : user
        )
      );
      toast({
        title: !is_staff
          ? 'El usuario ahora es staff'
          : 'El usuario ya no es staff',
        description: 'Cambio realizado exitosamente',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: `Error al realizar el cambio: ${error.message}`,
      });
    }
  };

  if (isLoading) {
    return <div className='flex justify-center'>Loading...</div>;
  }
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
                          Acticar/Desactivar Staff
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow className='bg-accent'>
                          <TableCell>
                            <div className='font-medium'>{user.name}</div>
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            {user.email}
                          </TableCell>
                          <TableCell className='hidden sm:table-cell'>
                            <Badge className='text-xs' variant='secondary'>
                              ${user.balance}
                            </Badge>
                          </TableCell>
                          <TableCell className='text-right'>
                            <Button
                              className={
                                user.is_staff
                                  ? 'bg-black text-slate-100'
                                  : 'bg-slate-100 text-black'
                              }
                              onClick={() => {
                                handleStaffChange(user.id, user.is_staff);
                              }}
                            >
                              {user.is_staff ? 'Desactivar' : 'Activar'}
                            </Button>
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

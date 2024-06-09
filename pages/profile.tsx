/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Separator } from '@radix-ui/react-separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Card, CardContent, CardHeader } from '../components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useDeleteUserMutation, useEditUserMutation } from './api/authApi';
import { setIsAuthenticated, setUser } from '../redux/features/userSlice';
import { IoPersonOutline } from '../utils/icons';

const editProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  lastName: z.string().min(1, 'Name is required'),
  email: z.string().email(),
  newPassword: z.string(),
  password: z.string().min(8),
});

const userMockUp = {
  name: 'Juanito',
  lastname: 'Perez',
  email: 'juanitop@gmail.com',
  password: '',
};

const EditProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const EditProfileForm = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: userMockUp.name,
      lastName: userMockUp.lastname,
      email: userMockUp.email,
      newPassword: '',
      password: '',
    },
  });

  const [editUser, { isLoading: isEditUserLoading, data: editData }] =
    useEditUserMutation();

  const [deleteUser] = useDeleteUserMutation();

  function onEditProfileSubmit(values: z.infer<typeof editProfileSchema>) {
    const registerData = {
      email: values.email,
      name: values.name + values.lastName,
      newPassword: values.newPassword,
      password: values.password,
    };
    editUser(registerData);
  }
  if (editData) {
    dispatch(setUser(editData.data.user));
    dispatch(setIsAuthenticated(true));
    router.push('/');
  }

  function onDeleteProfile() {
    deleteUser({});
  }

  return (
    <div className='flex h-screen flex-row'>
      <Card className='w-1/2 text-center'>
        <h1>img</h1>
      </Card>
      <Separator orientation='vertical' className='' />
      <Card className='flex w-1/2 flex-col items-center justify-center'>
        <CardHeader className='text-xl font-semibold'>
          <IoPersonOutline size={50} />
        </CardHeader>
        <CardContent>
          <Form {...EditProfileForm}>
            <form
              onSubmit={EditProfileForm.handleSubmit(onEditProfileSubmit)}
              className='space-y-6'
            >
              <FormField
                control={EditProfileForm.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder='Ingresa tu nombre' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={EditProfileForm.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder='Ingresa tu apellido' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={EditProfileForm.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter Email Address' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={EditProfileForm.control}
                name='newPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input placeholder='********' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={EditProfileForm.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your Password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className='w-full rounded-3xl bg-black'
                type='submit'
                disabled={isEditUserLoading}
              >
                SAVE
              </Button>
              <Button
                className='w-full rounded-3xl'
                onClick={() => onDeleteProfile}
              >
                Delete
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;

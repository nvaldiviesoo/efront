import { Button } from '../../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

export default function ProductCreator() {
  return (
    <Tabs defaultValue='individual' className='w-full'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='individual'>Crera Producto Individual</TabsTrigger>
        <TabsTrigger value='massive'>Carga Masiva</TabsTrigger>
      </TabsList>
      <TabsContent value='individual'>
        <Card>
          <CardHeader>
            <CardTitle>Crear producto individualmente</CardTitle>
            <CardDescription>
              Llena cada campo para crear un producto individualmente
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2 p-6'>
            <div className='space-y-1'>
              <Label htmlFor='productname'>Nombre de Producto</Label>
              <Input id='productname' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='price'>Precio</Label>
              <Input id='price' type='number' min='0' step='1' />
            </div>
            <div className='flex-row'>
              <div className='space-y-1'>
                <Label htmlFor='stock'>Categoría</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Seleccionar Categoría' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='crop-tops'>Crop Tops</SelectItem>
                      <SelectItem value='hoodies'>Hoodies</SelectItem>
                      <SelectItem value='joggers'>Joggers</SelectItem>
                      <SelectItem value='shorts'>Shorts</SelectItem>
                      <SelectItem value='sports-bra'>Sports Bra</SelectItem>
                      <SelectItem value='underwear'>Underwear</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-1'>
                <Label htmlFor='stock'>Talla</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Seleccionar Talla' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='xs'>XS</SelectItem>
                      <SelectItem value='s'>S</SelectItem>
                      <SelectItem value='m'>M</SelectItem>
                      <SelectItem value='l'>L</SelectItem>
                      <SelectItem value='xl'>XL</SelectItem>
                      <SelectItem value='xxl'>XXL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='space-y-1'>
              <Label htmlFor='description'>Descripción</Label>
              <Textarea id='description' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='image'>Cargar imagen</Label>
              <Input id='image' type='file' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Crear producto</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='massive'>
        <Card>
          <CardHeader>
            <CardTitle>Carga Masiva</CardTitle>
            <CardDescription>
              Carga un arvhivo de tipo .csv o .xlsx para cargar productos
              masivamente
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2 p-6'>
            <div className='space-y-1'>
              <Label htmlFor='username'>Seleccionar un archivo</Label>
              <Input id='massivefile' type='file' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Crear Productos</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

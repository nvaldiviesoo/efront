import { Badge } from "../../ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"

// Se prueba con el json público orders_example.json
import users from '../../../public/admin_json_example/users_example.json';


export default function UsersTable() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Usuarios</CardTitle>
        <CardDescription>Lista de usuarios de la plataforma</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre completo</TableHead>
              <TableHead className="hidden sm:table-cell">E-mail</TableHead>
              <TableHead className="hidden sm:table-cell">Estado</TableHead>
              <TableHead className="text-right">Saldo disponible</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow className="bg-accent">
                <TableCell>
                  <div className="font-medium">{user.Name}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{user.Email}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {user.Status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">${user.Balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
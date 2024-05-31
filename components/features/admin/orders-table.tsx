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
import orders from '../../../public/admin_json_example/orders_example.json';


export default function OrdersTable() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Pedidos</CardTitle>
        <CardDescription>Compras recientes</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente</TableHead>
              <TableHead className="hidden sm:table-cell">Tipo de Pedido</TableHead>
              <TableHead className="hidden sm:table-cell">Estado</TableHead>
              <TableHead className="hidden md:table-cell">Fecha</TableHead>
              <TableHead className="text-right">Monto</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow className="bg-accent">
                <TableCell>
                  <div className="font-medium">{order.Client}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {order.ClientEmail}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{order.Type}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {order.Status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{order.Date}</TableCell>
                <TableCell className="text-right">${order.Amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
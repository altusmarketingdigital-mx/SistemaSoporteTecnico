import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, MoreHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'

const MOCK_CLIENTS = [
  { id: 'CL-001', name: 'Tech Solutions SA', contact: 'Roberto Gómez', phone: '+52 55 1234 5678', status: 'Activo', tech: 'Juan Pérez' },
  { id: 'CL-002', name: 'Comercializadora XYZ', contact: 'Ana Silva', phone: '+52 55 9876 5432', status: 'Activo', tech: 'María López' },
  { id: 'CL-003', name: 'Industrial Alfa', contact: 'Carlos Ruiz', phone: '+52 81 3456 7890', status: 'Inactivo', tech: 'Juan Pérez' },
]

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Directorio de Clientes</h1>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="mr-2 h-4 w-4" /> Nuevo Cliente</Button>
      </div>

      <div className="flex items-center space-x-2 bg-white p-2 px-4 rounded-md shadow-sm border">
        <Search className="h-5 w-5 text-gray-400" />
        <Input placeholder="Buscar por nombre, contacto o empresa..." className="border-0 shadow-none focus-visible:ring-0" />
      </div>

      <div className="bg-white rounded-md shadow-sm border overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Teléfono</TableHead>
              <TableHead>Técnico Asignado</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_CLIENTS.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium text-slate-600">{client.id}</TableCell>
                <TableCell className="font-semibold text-slate-800">{client.name}</TableCell>
                <TableCell>{client.contact}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.tech}</TableCell>
                <TableCell>
                  <Badge variant={client.status === 'Activo' ? 'default' : 'secondary'} className={client.status === 'Activo' ? 'bg-green-100 text-green-800 hover:bg-green-100 border-none' : ''}>
                    {client.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4 text-gray-500" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

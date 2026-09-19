import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, MoreHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'

const MOCK_TECHS = [
  { id: 'TEC-001', name: 'Juan Pérez', email: 'juan@soporte.com', dept: 'Redes y Servidores', activeTickets: 8, status: 'Disponible' },
  { id: 'TEC-002', name: 'María López', email: 'maria@soporte.com', dept: 'Sistemas Administrativos', activeTickets: 12, status: 'Ocupado' },
  { id: 'TEC-003', name: 'Carlos Díaz', email: 'carlos@soporte.com', dept: 'Desarrollo Web', activeTickets: 3, status: 'Disponible' },
]

export default function TecnicosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Gestión de Técnicos</h1>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="mr-2 h-4 w-4" /> Nuevo Técnico</Button>
      </div>

      <div className="flex items-center space-x-2 bg-white p-2 px-4 rounded-md shadow-sm border">
        <Search className="h-5 w-5 text-gray-400" />
        <Input placeholder="Buscar agente por nombre o departamento..." className="border-0 shadow-none focus-visible:ring-0" />
      </div>

      <div className="bg-white rounded-md shadow-sm border overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Correo</TableHead>
              <TableHead>Departamento / Especialidad</TableHead>
              <TableHead className="text-center">Tickets Activos</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_TECHS.map((tech) => (
              <TableRow key={tech.id}>
                <TableCell className="font-semibold text-slate-800">{tech.name}</TableCell>
                <TableCell className="text-slate-600">{tech.email}</TableCell>
                <TableCell>{tech.dept}</TableCell>
                <TableCell className="text-center font-bold text-blue-600">{tech.activeTickets}</TableCell>
                <TableCell>
                  <Badge variant={tech.status === 'Disponible' ? 'default' : 'secondary'} className={tech.status === 'Disponible' ? 'bg-green-100 text-green-800 hover:bg-green-100 border-none' : 'bg-amber-100 text-amber-800 hover:bg-amber-100 border-none'}>
                    {tech.status}
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

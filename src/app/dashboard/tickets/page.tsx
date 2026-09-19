import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const MOCK_TICKETS = [
  { id: 'TK-2026-000124', client: 'Tech Solutions SA', subject: 'Problema con servidor', category: 'Hardware', priority: 'Alta', status: 'Nuevo', tech: 'Sin asignar', date: '19 Sep 2026' },
  { id: 'TK-2026-000123', client: 'Comercializadora XYZ', subject: 'Actualización de software', category: 'Software', priority: 'Media', status: 'En Proceso', tech: 'Juan Pérez', date: '18 Sep 2026' },
  { id: 'TK-2026-000122', client: 'Industrial Alfa', subject: 'Sistema de ventas caído', category: 'Sistemas', priority: 'Crítica', status: 'Esperando Cliente', tech: 'María López', date: '18 Sep 2026' },
  { id: 'TK-2026-000121', client: 'Tech Solutions SA', subject: 'Configuración de correos', category: 'Configuración', priority: 'Baja', status: 'Resuelto', tech: 'Carlos Díaz', date: '17 Sep 2026' },
]

export default function TicketsPage() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Crítica': return 'bg-red-100 text-red-800'
      case 'Alta': return 'bg-orange-100 text-orange-800'
      case 'Media': return 'bg-yellow-100 text-yellow-800'
      case 'Baja': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Nuevo': return 'bg-purple-100 text-purple-800'
      case 'En Proceso': return 'bg-blue-100 text-blue-800'
      case 'Esperando Cliente': return 'bg-amber-100 text-amber-800'
      case 'Resuelto': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Gestión de Tickets</h1>
        <Link href="/dashboard/tickets/nuevo">
          <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="mr-2 h-4 w-4" /> Crear Ticket</Button>
        </Link>
      </div>

      <div className="flex items-center space-x-2 bg-white p-2 px-4 rounded-md shadow-sm border">
        <Search className="h-5 w-5 text-gray-400" />
        <Input placeholder="Buscar ticket por número, cliente o asunto..." className="border-0 shadow-none focus-visible:ring-0 flex-1" />
        <Button variant="outline" size="sm" className="ml-auto"><Filter className="mr-2 h-4 w-4" /> Filtros</Button>
      </div>

      <div className="bg-white rounded-md shadow-sm border overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead>Ticket</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Asunto</TableHead>
              <TableHead>Prioridad</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Técnico</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_TICKETS.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium text-blue-600 hover:underline cursor-pointer">
                  <Link href={`/dashboard/tickets/${ticket.id}`}>{ticket.id}</Link>
                </TableCell>
                <TableCell className="font-semibold text-slate-800">{ticket.client}</TableCell>
                <TableCell className="max-w-[200px] truncate">{ticket.subject}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={`${getPriorityColor(ticket.priority)} border-none`}>{ticket.priority}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={`${getStatusColor(ticket.status)} border-none`}>{ticket.status}</Badge>
                </TableCell>
                <TableCell className="text-slate-600">{ticket.tech}</TableCell>
                <TableCell className="text-slate-500 text-sm">{ticket.date}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/dashboard/tickets/${ticket.id}`}>
                    <Button variant="outline" size="sm">Ver</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

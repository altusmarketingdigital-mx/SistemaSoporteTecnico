export const dynamic = 'force-dynamic'
export const revalidate = 0

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Search, Filter, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function TicketsPage() {
  const supabase = await createClient()

  const { data: tickets, error } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-red-500 font-bold text-xl mb-2">Error de Base de Datos</h2>
        <p className="text-slate-600">{error.message}</p>
        <p className="text-sm mt-4 text-slate-400">¿Creaste la tabla 'tickets' en Supabase?</p>
      </div>
    )
  }

  const listaTickets = tickets || []

  const getPriorityColor = (p: string) => {
    if (p === 'Crítica') return 'bg-red-100 text-red-800'
    if (p === 'Alta') return 'bg-orange-100 text-orange-800'
    if (p === 'Media') return 'bg-yellow-100 text-yellow-800'
    return 'bg-blue-100 text-blue-800'
  }

  const getStatusColor = (s: string) => {
    if (s === 'Nuevo') return 'bg-purple-100 text-purple-800'
    if (s === 'Resuelto' || s === 'Cerrado') return 'bg-green-100 text-green-800'
    return 'bg-slate-100 text-slate-800'
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center bg-white/60 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-800">Todos los Tickets</h1>
          <p className="text-slate-500 font-medium mt-1">Gestiona las solicitudes de soporte de los clientes.</p>
        </div>
        <Link href="/dashboard/tickets/nuevo">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 h-11 px-6 rounded-full font-semibold transition-all hover:scale-105">
            <Plus className="mr-2 h-4 w-4" /> Crear Ticket Manual
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex-1 flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-xl">
          <Search className="h-5 w-5 text-slate-400" />
          <Input placeholder="Buscar por número o asunto..." className="border-0 bg-transparent shadow-none focus-visible:ring-0" />
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="todos">
            <SelectTrigger className="w-[160px] rounded-xl bg-slate-50 border-0"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los estados</SelectItem>
              <SelectItem value="nuevo">Nuevos</SelectItem>
              <SelectItem value="proceso">En Proceso</SelectItem>
              <SelectItem value="resuelto">Resueltos</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="rounded-xl border-slate-200 text-slate-600">
            <Filter className="h-4 w-4 mr-2" /> Filtros
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/80">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600 py-4 px-6">ID Ticket</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4">Asunto / Categoría</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4">Prioridad</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4">Estado</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4">Fecha</TableHead>
              <TableHead className="text-right font-semibold text-slate-600 py-4 px-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listaTickets.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-slate-500 font-medium">
                  No hay tickets registrados en la plataforma en este momento.
                </TableCell>
              </TableRow>
            ) : (
              listaTickets.map((ticket: any) => (
                <TableRow key={ticket.id} className="group hover:bg-blue-50/40 transition-colors cursor-pointer">
                  <TableCell className="font-bold text-blue-600 px-6 py-4">{ticket.ticket_number}</TableCell>
                  <TableCell className="py-4">
                    <p className="font-medium text-slate-800">{ticket.subject}</p>
                    <p className="text-xs text-slate-500 mt-1">{ticket.category}</p>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge className={`${getPriorityColor(ticket.priority)} border-none font-bold px-3 py-1 rounded-full shadow-sm`}>
                      {ticket.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge className={`${getStatusColor(ticket.status)} border-none font-bold px-3 py-1 rounded-full shadow-sm`}>
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-500 text-sm font-medium py-4">
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                      {new Date(ticket.created_at).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-right px-6 py-4">
                    <Link href={`/dashboard/tickets/${ticket.id}`}>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-bold group-hover:translate-x-1 transition-transform rounded-full">
                        Gestionar <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

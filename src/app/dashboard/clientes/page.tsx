export const dynamic = 'force-dynamic'
export const revalidate = 0

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Mail, Calendar } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function ClientesPage() {
  const supabase = await createClient()

  // Consultar todos los perfiles que tengan el rol de 'Cliente'
  const { data: clientes, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('role', 'Cliente')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-red-500 font-bold text-xl mb-2">Error de Base de Datos</h2>
        <p className="text-slate-600">{error.message}</p>
        <p className="text-sm mt-4">Asegúrate de haber ejecutado el script SQL en Supabase para crear la tabla 'profiles'.</p>
      </div>
    )
  }

  const listaClientes = clientes || []

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Directorio de Clientes</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Nuevo Cliente
        </Button>
      </div>

      <div className="flex items-center space-x-2 bg-white p-2 rounded-xl shadow-sm border">
        <Search className="h-5 w-5 text-gray-400 ml-2" />
        <Input placeholder="Buscar por nombre o correo..." className="border-0 shadow-none focus-visible:ring-0" />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600 py-4 px-6">Nombre del Cliente</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4">Correo (Contacto)</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4">Fecha de Registro</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4">Estado</TableHead>
              <TableHead className="text-right font-semibold text-slate-600 py-4 px-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listaClientes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12 text-slate-500">
                  Aún no hay clientes registrados en la plataforma.
                </TableCell>
              </TableRow>
            ) : (
              listaClientes.map((cliente: any) => (
                <TableRow key={cliente.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-bold text-slate-800 px-6 py-4">
                    {cliente.full_name || 'Sin Nombre'}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="w-3.5 h-3.5 mr-2 text-slate-400" /> {cliente.email}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500 text-sm py-4">
                    <div className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-slate-400" />
                      {new Date(cliente.created_at).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </div>
                  </TableCell>
                  <TableCell className="py-4"><Badge className="bg-green-100 text-green-800 border-none px-3 py-1 font-semibold rounded-full">Activo</Badge></TableCell>
                  <TableCell className="text-right px-6 py-4">
                    <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50 font-semibold rounded-full">Gestionar</Button>
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

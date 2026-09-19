import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function ClienteDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'Usuario'

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Cabecera Premium */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-md">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Hola, {firstName} 👋</h1>
          <p className="text-slate-500 mt-1 font-medium">¿En qué podemos ayudarte el día de hoy?</p>
        </div>
        <Link href="/cliente/nuevo-ticket">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 h-12 px-8 rounded-full font-semibold transition-all hover:scale-105">
            <PlusCircle className="mr-2 h-5 w-5" /> Nueva Solicitud
          </Button>
        </Link>
      </div>

      {/* Tarjetas KPI Modernas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg shadow-slate-200/50 bg-white overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Clock className="w-24 h-24 text-blue-600" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
              <Clock className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">En Revisión / Proceso</p>
            <h3 className="text-4xl font-black text-slate-800 mt-1">2</h3>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg shadow-slate-200/50 bg-white overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Clock className="w-24 h-24 text-amber-600" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4 shadow-sm">
              <Clock className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Requiere tu respuesta</p>
            <h3 className="text-4xl font-black text-slate-800 mt-1">1</h3>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg shadow-slate-200/50 bg-white overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-green-50/50">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <CheckCircle className="w-24 h-24 text-green-600" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 shadow-sm">
              <CheckCircle className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Resueltos este mes</p>
            <h3 className="text-4xl font-black text-slate-800 mt-1">5</h3>
          </CardContent>
        </Card>
      </div>

      {/* Tabla Premium */}
      <Card className="shadow-xl shadow-slate-200/40 border-slate-100 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-slate-50/80 border-b border-slate-100 p-6">
          <CardTitle className="text-lg font-bold text-slate-800">Mis Tickets Recientes</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold text-slate-600 py-4 px-6">Ticket</TableHead>
                <TableHead className="font-semibold text-slate-600 py-4">Asunto</TableHead>
                <TableHead className="font-semibold text-slate-600 py-4">Estado</TableHead>
                <TableHead className="font-semibold text-slate-600 py-4">Última actualización</TableHead>
                <TableHead className="text-right font-semibold text-slate-600 py-4 px-6">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="group hover:bg-blue-50/40 transition-colors cursor-pointer">
                <TableCell className="font-bold text-blue-600 px-6 py-4">TK-2026-0124</TableCell>
                <TableCell className="font-medium text-slate-700 py-4">Problema con servidor de correos</TableCell>
                <TableCell className="py-4"><Badge className="bg-purple-100 text-purple-800 border-none font-bold px-3 py-1 rounded-full shadow-sm">Nuevo</Badge></TableCell>
                <TableCell className="text-slate-500 text-sm font-medium py-4">Hace 2 horas</TableCell>
                <TableCell className="text-right px-6 py-4">
                  <Link href="/cliente/tickets/TK-2026-0124">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-bold group-hover:translate-x-1 transition-transform rounded-full">
                      Ver Detalle <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow className="group hover:bg-blue-50/40 transition-colors cursor-pointer">
                <TableCell className="font-bold text-blue-600 px-6 py-4">TK-2026-0120</TableCell>
                <TableCell className="font-medium text-slate-700 py-4">Actualización de licencias Windows</TableCell>
                <TableCell className="py-4"><Badge className="bg-amber-100 text-amber-800 border-none font-bold px-3 py-1 rounded-full shadow-sm">Esperando respuesta</Badge></TableCell>
                <TableCell className="text-slate-500 text-sm font-medium py-4">Ayer</TableCell>
                <TableCell className="text-right px-6 py-4">
                  <Link href="/cliente/tickets/TK-2026-0120">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-bold group-hover:translate-x-1 transition-transform rounded-full">
                      Ver Detalle <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow className="group hover:bg-blue-50/40 transition-colors cursor-pointer">
                <TableCell className="font-bold text-blue-600 px-6 py-4">TK-2026-0115</TableCell>
                <TableCell className="font-medium text-slate-700 py-4">Instalación de antivirus</TableCell>
                <TableCell className="py-4"><Badge className="bg-green-100 text-green-800 border-none font-bold px-3 py-1 rounded-full shadow-sm">Resuelto</Badge></TableCell>
                <TableCell className="text-slate-500 text-sm font-medium py-4">15 Sep 2026</TableCell>
                <TableCell className="text-right px-6 py-4">
                  <Link href="/cliente/tickets/TK-2026-0115">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 hover:text-blue-700 font-bold group-hover:translate-x-1 transition-transform rounded-full">
                      Ver Detalle <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

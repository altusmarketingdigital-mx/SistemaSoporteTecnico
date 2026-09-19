import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'

export default async function ClienteDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'Usuario'

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Hola, {firstName}</h1>
          <p className="text-slate-500">Aquí puedes dar seguimiento a todas tus solicitudes de soporte.</p>
        </div>
        <Link href="/cliente/nuevo-ticket">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm h-11 px-6">
            <PlusCircle className="mr-2 h-5 w-5" /> Nuevo Ticket
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-700"><Clock className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-medium text-slate-500">En Revisión / Proceso</p>
              <h3 className="text-2xl font-bold text-slate-800">2</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-amber-100 rounded-lg text-amber-700"><Clock className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-medium text-slate-500">Requiere tu respuesta</p>
              <h3 className="text-2xl font-bold text-slate-800">1</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white">
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg text-green-700"><CheckCircle className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-medium text-slate-500">Resueltos este mes</p>
              <h3 className="text-2xl font-bold text-slate-800">5</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-none">
        <CardHeader>
          <CardTitle>Mis Tickets Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Asunto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Última actualización</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-blue-600">TK-2026-0124</TableCell>
                <TableCell>Problema con servidor de correos</TableCell>
                <TableCell><Badge className="bg-purple-100 text-purple-800 border-none">Nuevo</Badge></TableCell>
                <TableCell className="text-slate-500 text-sm">Hace 2 horas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-blue-600">TK-2026-0120</TableCell>
                <TableCell>Actualización de licencias Windows</TableCell>
                <TableCell><Badge className="bg-amber-100 text-amber-800 border-none">Esperando tu respuesta</Badge></TableCell>
                <TableCell className="text-slate-500 text-sm">Ayer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-blue-600">TK-2026-0115</TableCell>
                <TableCell>Instalación de antivirus</TableCell>
                <TableCell><Badge className="bg-green-100 text-green-800 border-none">Resuelto</Badge></TableCell>
                <TableCell className="text-slate-500 text-sm">15 Sep 2026</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

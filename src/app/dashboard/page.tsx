export const dynamic = 'force-dynamic'
export const revalidate = 0

import { Card, CardContent } from '@/components/ui/card'
import { Ticket, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardGeneral() {
  const supabase = await createClient()

  const { data: tickets } = await supabase.from('tickets').select('status, priority')
  
  const allTickets = tickets || []
  const abiertos = allTickets.filter(t => t.status !== 'Resuelto' && t.status !== 'Cerrado').length
  const criticos = allTickets.filter(t => t.priority === 'Crítica' && t.status !== 'Resuelto' && t.status !== 'Cerrado').length
  const resueltos = allTickets.filter(t => t.status === 'Resuelto' || t.status === 'Cerrado').length
  const total = allTickets.length

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-md">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Visión General</h1>
          <p className="text-slate-500 mt-1 font-medium">Monitoreo en tiempo real del centro de soporte.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Abiertos */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 bg-white overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Ticket className="w-24 h-24 text-blue-600" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
              <Ticket className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tickets Abiertos</p>
            <h3 className="text-4xl font-black text-slate-800 mt-1">{abiertos}</h3>
          </CardContent>
        </Card>

        {/* Críticos */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 bg-white overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <AlertCircle className="w-24 h-24 text-red-600" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4 shadow-sm">
              <AlertCircle className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Críticos Urgentes</p>
            <h3 className="text-4xl font-black text-slate-800 mt-1">{criticos}</h3>
          </CardContent>
        </Card>

        {/* Resueltos */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 bg-white overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <CheckCircle className="w-24 h-24 text-green-600" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 shadow-sm">
              <CheckCircle className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Resueltos Totales</p>
            <h3 className="text-4xl font-black text-slate-800 mt-1">{resueltos}</h3>
          </CardContent>
        </Card>

        {/* Histórico */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 bg-white overflow-hidden relative group hover:-translate-y-1 transition-all duration-300 rounded-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Clock className="w-24 h-24 text-purple-600" />
          </div>
          <CardContent className="p-6 relative z-10">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 shadow-sm">
              <Clock className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Histórico Total</p>
            <h3 className="text-4xl font-black text-slate-800 mt-1">{total}</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

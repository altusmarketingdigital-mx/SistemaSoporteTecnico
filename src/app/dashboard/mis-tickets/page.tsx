import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, Clock } from 'lucide-react'

export default function MisTicketsTecnico() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-800">Mi Área de Trabajo (Técnico)</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <AlertCircle className="h-8 w-8 text-red-600 mb-2" />
            <h3 className="text-3xl font-bold text-red-700">1</h3>
            <p className="text-sm font-medium text-red-600">Tickets Críticos / Vencidos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <Clock className="h-8 w-8 text-amber-500 mb-2" />
            <h3 className="text-3xl font-bold text-slate-800">4</h3>
            <p className="text-sm font-medium text-slate-500">Próximos a vencer (Hoy)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center text-center">
            <div className="h-8 w-8 mb-2 flex items-center justify-center font-bold text-2xl text-blue-600">8</div>
            <h3 className="text-3xl font-bold text-slate-800">8</h3>
            <p className="text-sm font-medium text-slate-500">Tickets Abiertos Totales</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-none">
        <CardHeader className="bg-slate-50 border-b">
          <CardTitle className="text-red-600 flex items-center"><AlertCircle className="w-5 h-5 mr-2" /> Atención Prioritaria (SLA)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {/* Ticket Crítico */}
            <div className="p-4 hover:bg-slate-50 flex items-center justify-between border-l-4 border-red-500 bg-red-50/30">
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="font-bold text-blue-600 cursor-pointer hover:underline">TK-2026-0122</span>
                  <Badge className="bg-red-100 text-red-800 border-none">Crítica</Badge>
                </div>
                <p className="text-sm font-medium text-slate-800">Sistema de ventas caído</p>
                <p className="text-xs text-slate-500">Industrial Alfa</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 mb-1">SLA Resolución</p>
                <p className="text-sm font-bold text-red-600 flex items-center"><Clock className="w-3 h-3 mr-1" /> VENCE EN 15 MIN</p>
              </div>
            </div>

            {/* Ticket Alta */}
            <div className="p-4 hover:bg-slate-50 flex items-center justify-between border-l-4 border-orange-500">
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="font-bold text-blue-600 cursor-pointer hover:underline">TK-2026-0124</span>
                  <Badge className="bg-orange-100 text-orange-800 border-none">Alta</Badge>
                </div>
                <p className="text-sm font-medium text-slate-800">Problema con servidor de correos</p>
                <p className="text-xs text-slate-500">Tech Solutions SA</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 mb-1">SLA Resolución</p>
                <p className="text-sm font-bold text-amber-600 flex items-center"><Clock className="w-3 h-3 mr-1" /> 2h 30m restantes</p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

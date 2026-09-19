import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Ticket, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Resumen en tarjetas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Tickets Abiertos" value="12" icon={<Ticket className="text-blue-500" />} />
        <StatCard title="En Proceso" value="5" icon={<Clock className="text-amber-500" />} />
        <StatCard title="Resueltos (Hoy)" value="8" icon={<CheckCircle className="text-green-500" />} />
        <StatCard title="Vencidos" value="2" icon={<AlertCircle className="text-red-500" />} />
      </div>

      {/* Gráficas / Historial */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-gray-500">Aquí se mostrará el historial de los últimos tickets actualizados...</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>Tickets por Prioridad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-gray-500">Gráfica de prioridades (Alta, Media, Baja)...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

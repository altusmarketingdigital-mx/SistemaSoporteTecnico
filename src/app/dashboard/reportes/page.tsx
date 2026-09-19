import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BarChart3, Download, PieChart, TrendingUp } from 'lucide-react'

export default function ReportesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Reportes y Estadísticas</h1>
        <div className="flex space-x-2">
          <Select defaultValue="mes">
            <SelectTrigger className="w-[180px] bg-white"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="semana">Última Semana</SelectItem>
              <SelectItem value="mes">Este Mes</SelectItem>
              <SelectItem value="anio">Este Año</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-white"><Download className="w-4 h-4 mr-2" /> Exportar</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Tiempo Prom. Respuesta" value="1.2 Hrs" trend="-15%" />
        <MetricCard title="Tiempo Prom. Resolución" value="8.5 Hrs" trend="+5%" />
        <MetricCard title="Tickets Cumplen SLA" value="94%" trend="+2%" />
        <MetricCard title="Satisfacción Cliente" value="4.8/5" trend="0%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border-none">
          <CardHeader>
            <CardTitle className="text-base flex items-center"><BarChart3 className="w-4 h-4 mr-2 text-blue-500" /> Tickets por Técnico</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex flex-col justify-end space-y-2 border-l border-b p-4">
              <div className="flex items-end space-x-8 h-full pl-4">
                <div className="w-16 bg-blue-500 h-[80%] rounded-t-sm" title="Juan Pérez: 40"></div>
                <div className="w-16 bg-blue-400 h-[60%] rounded-t-sm" title="María López: 30"></div>
                <div className="w-16 bg-blue-300 h-[30%] rounded-t-sm" title="Carlos Díaz: 15"></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 font-medium pl-4 pr-12">
                <span>Juan P.</span>
                <span>María L.</span>
                <span>Carlos D.</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-none">
          <CardHeader>
            <CardTitle className="text-base flex items-center"><PieChart className="w-4 h-4 mr-2 text-purple-500" /> Tickets por Categoría</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center h-[280px]">
            <div className="w-48 h-48 rounded-full border-[24px] border-purple-500 border-r-blue-400 border-b-amber-400 border-l-green-400 flex items-center justify-center shadow-inner">
              <div className="text-center">
                <span className="text-slate-800 text-xl font-bold block">150</span>
                <span className="text-slate-500 text-xs font-medium">Totales</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({ title, value, trend }: { title: string, value: string, trend: string }) {
  const isPositive = trend.startsWith('+') || trend === '0%'
  const isImprovement = title.includes('Tiempo') ? !isPositive : isPositive // Menos tiempo es mejor
  
  return (
    <Card className="shadow-sm border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-slate-800">{value}</div>
        <p className={`text-xs mt-2 flex items-center font-medium ${isImprovement ? 'text-green-600' : 'text-red-600'}`}>
          <TrendingUp className="w-3 h-3 mr-1" /> {trend} vs mes anterior
        </p>
      </CardContent>
    </Card>
  )
}

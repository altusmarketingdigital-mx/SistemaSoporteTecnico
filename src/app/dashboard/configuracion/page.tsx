import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Save, Settings2, BellRing, Zap, ShieldCheck } from 'lucide-react'

export default function ConfiguracionPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Configuración del Sistema</h1>
        <Button className="bg-blue-600 hover:bg-blue-700"><Save className="mr-2 h-4 w-4" /> Guardar Cambios</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Nav Lateral de Config */}
        <div className="space-y-1">
          <ConfigNav icon={<ShieldCheck />} title="SLA y Políticas" active />
          <ConfigNav icon={<Zap />} title="Automatizaciones" />
          <ConfigNav icon={<BellRing />} title="Notificaciones" />
          <ConfigNav icon={<Settings2 />} title="General" />
        </div>

        {/* Contenido Principal */}
        <div className="md:col-span-3 space-y-6">
          
          <Card className="shadow-sm border-none">
            <CardHeader>
              <CardTitle>Políticas de SLA (Acuerdos de Nivel de Servicio)</CardTitle>
              <CardDescription>Define los tiempos máximos permitidos para primera respuesta y resolución según la prioridad del ticket.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Fila Header */}
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-slate-600 pb-2 border-b">
                <div>Prioridad</div>
                <div>Primera Respuesta (Hrs)</div>
                <div>Resolución (Hrs)</div>
              </div>
              
              <SLARow priority="Crítica" color="bg-red-100 text-red-800" resp="0.5" res="4" />
              <SLARow priority="Alta" color="bg-orange-100 text-orange-800" resp="1" res="8" />
              <SLARow priority="Media" color="bg-yellow-100 text-yellow-800" resp="4" res="24" />
              <SLARow priority="Baja" color="bg-blue-100 text-blue-800" resp="8" res="72" />
            </CardContent>
          </Card>

          <Card className="shadow-sm border-none">
            <CardHeader>
              <CardTitle>Automatizaciones Activas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-md bg-white shadow-sm">
                <div>
                  <h4 className="font-medium text-slate-800">Cierre automático por inactividad</h4>
                  <p className="text-sm text-slate-500">Cerrar tickets en estado "Esperando Cliente" después de 72 horas.</p>
                </div>
                <div className="h-6 w-11 bg-blue-600 rounded-full flex items-center p-1 cursor-pointer transition-colors">
                  <div className="bg-white w-4 h-4 rounded-full translate-x-5 shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-md bg-white shadow-sm">
                <div>
                  <h4 className="font-medium text-slate-800">Encuesta de satisfacción</h4>
                  <p className="text-sm text-slate-500">Enviar encuesta por correo al cambiar estado a "Resuelto".</p>
                </div>
                <div className="h-6 w-11 bg-blue-600 rounded-full flex items-center p-1 cursor-pointer transition-colors">
                  <div className="bg-white w-4 h-4 rounded-full translate-x-5 shadow-sm"></div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

function ConfigNav({ icon, title, active = false }: any) {
  return (
    <div className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer transition-colors ${active ? 'bg-white shadow-sm border border-slate-100 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-100'}`}>
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

function SLARow({ priority, color, resp, res }: any) {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <div><Badge className={`${color} border-none`}>{priority}</Badge></div>
      <div><Input defaultValue={resp} className="w-24 border-slate-200" type="number" step="0.1" /></div>
      <div><Input defaultValue={res} className="w-24 border-slate-200" type="number" step="0.1" /></div>
    </div>
  )
}

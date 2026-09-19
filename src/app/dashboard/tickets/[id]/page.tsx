import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Clock, User, Tag, Paperclip, Send, ShieldAlert, History } from 'lucide-react'

export default async function TicketDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params

  return (
    <div className="space-y-6">
      {/* Encabezado Principal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">{id}</h1>
            <Badge variant="secondary" className="bg-red-100 text-red-800 border-none">Crítica</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-none">Esperando Cliente</Badge>
          </div>
          <h2 className="text-lg text-slate-600">El sistema no permite realizar ventas desde la sucursal norte</h2>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Escalar</Button>
          <Button className="bg-green-600 hover:bg-green-700">Marcar Resuelto</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda: Línea de tiempo y Mensajes */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm">
            <CardHeader className="bg-slate-50 border-b pb-4">
              <CardTitle className="text-base flex items-center"><History className="w-5 h-5 mr-2 text-slate-500" /> Historial y Conversación</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              
              {/* Mensaje Cliente */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 shrink-0">CL</div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Roberto Gómez (Cliente)</span>
                    <span className="text-xs text-slate-500">Hoy, 10:32 AM</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-md text-slate-700 text-sm border">
                    <p>Hola, desde hace una hora no podemos procesar ninguna venta en el sistema POS de la sucursal norte. Marca un error de conexión con la base de datos.</p>
                  </div>
                </div>
              </div>

              {/* Actividad Sistema */}
              <div className="flex items-center space-x-4 text-sm text-slate-500 pl-4 border-l-2 border-slate-200 ml-5 py-2">
                <ShieldAlert className="w-4 h-4" />
                <span>El sistema cambió la prioridad a <strong className="text-red-600">Crítica</strong></span>
                <span className="text-xs">10:33 AM</span>
              </div>

              {/* Actividad Sistema */}
              <div className="flex items-center space-x-4 text-sm text-slate-500 pl-4 border-l-2 border-slate-200 ml-5 py-2">
                <User className="w-4 h-4" />
                <span>Ticket asignado a <strong>Juan Pérez</strong></span>
                <span className="text-xs">10:40 AM</span>
              </div>

              {/* Mensaje Soporte */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white shrink-0">JP</div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-800">Juan Pérez (Soporte)</span>
                    <span className="text-xs text-slate-500">Hoy, 11:05 AM</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md text-slate-800 text-sm border border-blue-100">
                    <p>Hola Roberto, estamos revisando el problema. Al parecer hay un bloqueo en el túnel VPN de la sucursal. ¿Podrías confirmarme si el router principal tiene las luces encendidas de forma normal?</p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Caja de Respuesta */}
          <Card className="shadow-sm">
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-slate-800">Agregar Respuesta</h3>
                <div className="flex space-x-2 text-sm">
                  <label className="flex items-center space-x-1 cursor-pointer">
                    <input type="radio" name="replyType" defaultChecked className="text-blue-600" />
                    <span>Mensaje al Cliente</span>
                  </label>
                  <label className="flex items-center space-x-1 cursor-pointer">
                    <input type="radio" name="replyType" className="text-amber-600" />
                    <span className="text-amber-700 font-medium">Nota Interna</span>
                  </label>
                </div>
              </div>
              <Textarea placeholder="Escribe tu respuesta aquí..." className="min-h-[100px]" />
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm"><Paperclip className="w-4 h-4 mr-2" /> Adjuntar</Button>
                <div className="flex space-x-2">
                  <Select defaultValue="esperando">
                    <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="esperando">Esperando Cliente</SelectItem>
                      <SelectItem value="proceso">En Proceso</SelectItem>
                      <SelectItem value="resuelto">Resuelto</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-blue-600 hover:bg-blue-700"><Send className="w-4 h-4 mr-2" /> Enviar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Columna Derecha: Detalles del Ticket */}
        <div className="space-y-6">
          
          {/* SLA Panel */}
          <Card className="shadow-sm border-red-100">
            <CardHeader className="bg-red-50 border-b border-red-100 pb-3">
              <CardTitle className="text-sm font-bold text-red-800 flex items-center">
                <Clock className="w-4 h-4 mr-2" /> SLA - Tiempos de Atención
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">Tiempo de Primera Respuesta</p>
                <p className="text-sm font-medium text-green-600">Cumplido (33 min)</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Tiempo Restante para Resolución</p>
                <p className="text-xl font-bold text-red-600">02:15:00</p>
                <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-red-500 h-full w-[80%]"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información General */}
          <Card className="shadow-sm">
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-sm font-bold text-slate-800">Detalles de la Solicitud</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4 text-sm">
              <div>
                <span className="text-slate-500 block text-xs">Cliente</span>
                <span className="font-semibold text-blue-600 cursor-pointer hover:underline">Tech Solutions SA</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Contacto</span>
                <span>Roberto Gómez (roberto@techsa.com)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Técnico Asignado</span>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">JP</div>
                  <span className="font-medium">Juan Pérez</span>
                </div>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Categoría</span>
                <span className="flex items-center mt-1"><Tag className="w-3 h-3 mr-1 text-slate-400" /> Software y Sistemas</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Canal de Ingreso</span>
                <span>Portal Web</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs">Fecha de Creación</span>
                <span>19 Sep 2026, 10:32 AM</span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

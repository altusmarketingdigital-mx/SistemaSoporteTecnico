import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { ArrowLeft, Send, Paperclip, Clock } from 'lucide-react'

export default async function DetalleTicketCliente(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/cliente">
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            {id}: Problema reportado
          </h1>
          <p className="text-sm text-slate-500">Reportado el 19 Sep 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna Principal: Historial */}
        <div className="md:col-span-2 space-y-6">
          <Card className="shadow-sm border-none">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle className="text-lg flex items-center justify-between">
                <span>Historial de Mensajes</span>
                <Badge className="bg-purple-100 text-purple-800 border-none">Nuevo</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Mensaje original del cliente */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end">
                  <span className="font-semibold text-sm text-slate-800">Tú</span>
                  <span className="text-xs text-slate-400">Hace 2 horas</span>
                </div>
                <div className="bg-blue-50 text-slate-800 p-4 rounded-lg rounded-tr-none text-sm border border-blue-100">
                  <p>Hola, al intentar generar una factura el sistema se queda cargando y me arroja un "Error 500". Adjunto captura de pantalla.</p>
                </div>
              </div>

              {/* Respuesta del soporte */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs text-slate-400">Hace 1 hora</span>
                  <span className="font-semibold text-sm text-blue-700">Soporte Técnico</span>
                </div>
                <div className="bg-white text-slate-800 p-4 rounded-lg rounded-tl-none text-sm border shadow-sm">
                  <p>Hola, hemos recibido tu solicitud y estamos revisando el servidor de facturación. ¿Podrías confirmarnos si esto ocurre con cualquier cliente o solo con uno en específico?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Caja para responder */}
          <Card className="shadow-sm border-none">
            <CardContent className="p-4 space-y-4">
              <Textarea placeholder="Escribe tu respuesta aquí..." className="min-h-[100px] border-slate-200" />
              <div className="flex justify-between items-center">
                <Button variant="outline" size="sm" className="text-slate-500">
                  <Paperclip className="h-4 w-4 mr-2" /> Adjuntar archivo
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4 mr-2" /> Enviar Mensaje
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Columna Lateral: Detalles del ticket */}
        <div className="space-y-6">
          <Card className="shadow-sm border-none">
            <CardHeader className="bg-slate-50 border-b pb-4">
              <CardTitle className="text-sm">Detalles de la Solicitud</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4 text-sm">
              <div>
                <p className="text-slate-500 text-xs mb-1">Estado</p>
                <p className="font-medium text-slate-800">En Revisión</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">Prioridad</p>
                <Badge className="bg-orange-100 text-orange-800 border-none">Alta</Badge>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">Categoría</p>
                <p className="font-medium text-slate-800">Software / Errores</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-none bg-blue-50/50">
            <CardContent className="p-4 flex items-start space-x-3 text-sm">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-800">Tiempo estimado</p>
                <p className="text-blue-600 text-xs mt-1">Nuestro equipo técnico suele responder en menos de 2 horas.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

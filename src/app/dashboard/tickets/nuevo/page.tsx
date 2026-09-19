import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import Link from 'next/link'

export default function NuevoTicketPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Crear Nuevo Ticket</h1>
        <Link href="/dashboard/tickets">
          <Button variant="outline">Cancelar</Button>
        </Link>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Información de la Solicitud</CardTitle>
          <CardDescription>Completa los datos para registrar la incidencia del cliente.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Cliente</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Selecciona un cliente" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cl-001">Tech Solutions SA</SelectItem>
                  <SelectItem value="cl-002">Comercializadora XYZ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Contacto</Label>
              <Input placeholder="Nombre de quien reporta" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Asunto</Label>
            <Input placeholder="Ej. El sistema no permite realizar ventas" />
          </div>

          <div className="space-y-2">
            <Label>Descripción del problema</Label>
            <Textarea placeholder="Describe detalladamente la incidencia..." className="min-h-[120px]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Categoría</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Categoría" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="software">Software</SelectItem>
                  <SelectItem value="hardware">Hardware</SelectItem>
                  <SelectItem value="redes">Redes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Prioridad</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Prioridad" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="critica">Crítica</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="baja">Baja</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Canal de reporte</Label>
              <Select>
                <SelectTrigger><SelectValue placeholder="Canal" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="portal">Portal Web</SelectItem>
                  <SelectItem value="telefono">Teléfono</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Adjuntar Evidencias (Opcional)</Label>
            <div className="border-2 border-dashed border-gray-200 rounded-md p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
              <span className="text-sm">Haz clic o arrastra archivos aquí</span>
              <span className="text-xs mt-1">JPG, PNG, PDF, DOCX (Máx 10MB)</span>
            </div>
          </div>

        </CardContent>
        <CardFooter className="bg-slate-50 flex justify-end p-4 border-t">
          <Button className="bg-blue-600 hover:bg-blue-700">Guardar y Generar Ticket</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

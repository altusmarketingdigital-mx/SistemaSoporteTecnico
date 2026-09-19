import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { createTicketClient } from './actions'

export default function NuevoTicketCliente() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Generar Solicitud de Soporte</h1>
        <Link href="/cliente">
          <Button variant="outline">Cancelar</Button>
        </Link>
      </div>

      <Card className="shadow-sm border-none">
        <CardHeader className="bg-slate-50 border-b pb-4">
          <CardTitle className="text-lg text-blue-700">Describe tu problema</CardTitle>
          <CardDescription>Nuestro equipo técnico revisará la solicitud lo antes posible.</CardDescription>
        </CardHeader>
        <form action={createTicketClient}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Asunto principal <span className="text-red-500">*</span></Label>
              <Input id="subject" name="subject" placeholder="Ej. El sistema de ventas arroja error de conexión" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción detallada <span className="text-red-500">*</span></Label>
              <Textarea id="description" name="description" placeholder="Explica qué estabas haciendo y qué error exacto apareció en la pantalla..." className="min-h-[140px]" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="priority">Nivel de Urgencia</Label>
                <Select name="priority" defaultValue="Media">
                  <SelectTrigger><SelectValue placeholder="Prioridad" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Baja">Baja (Duda o consulta)</SelectItem>
                    <SelectItem value="Media">Media (Falla parcial)</SelectItem>
                    <SelectItem value="Alta">Alta (No puedo trabajar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Categoría del problema</Label>
                <Select name="category" defaultValue="Software">
                  <SelectTrigger><SelectValue placeholder="Categoría" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Software">Software y Sistemas</SelectItem>
                    <SelectItem value="Hardware">Equipos (Hardware)</SelectItem>
                    <SelectItem value="Redes">Internet / Redes</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2 pt-2 border-t mt-4">
              <Label>Adjuntar Imagen o Captura (Opcional)</Label>
              <Input type="file" className="cursor-pointer text-slate-500" accept="image/*,.pdf" />
            </div>

          </CardContent>
          <CardFooter className="bg-slate-50 flex justify-end p-4 border-t">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">Enviar Solicitud al Soporte</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

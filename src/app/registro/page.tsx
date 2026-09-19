import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { registerClient } from './actions'
import Link from 'next/link'

export default function RegistroPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg border-none">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight text-blue-700">Registro de Cliente</CardTitle>
          <CardDescription>
            Crea una cuenta para generar y dar seguimiento a tus solicitudes de soporte
          </CardDescription>
        </CardHeader>
        <form action={registerClient}>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-left">
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input id="fullName" name="fullName" placeholder="Ej. Roberto Gómez" required />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="company">Empresa o Negocio (Opcional)</Label>
              <Input id="company" name="company" placeholder="Ej. Tech Solutions SA" />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" placeholder="correo@empresa.com" required />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" name="password" type="password" required minLength={6} placeholder="Mínimo 6 caracteres" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit">Completar Registro</Button>
            <p className="text-sm text-slate-500 text-center">
              ¿Ya tienes cuenta? <Link href="/login" className="text-blue-600 font-medium hover:underline">Inicia sesión aquí</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

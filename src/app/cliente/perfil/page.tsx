import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { updateProfile } from './actions'
import { redirect } from 'next/navigation'

export default async function PerfilPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const fullName = user.user_metadata?.full_name || ''
  const company = user.user_metadata?.company_name || ''
  const phone = user.user_metadata?.phone || ''

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-800">Mi Perfil</h1>

      <Card className="shadow-sm border-none">
        <CardHeader className="bg-slate-50 border-b pb-4">
          <CardTitle className="text-lg text-blue-700">Información Personal</CardTitle>
          <CardDescription>Actualiza tus datos de contacto para que el equipo de soporte pueda comunicarse contigo.</CardDescription>
        </CardHeader>
        <form action={updateProfile}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico (No modificable)</Label>
              <Input id="email" value={user.email} disabled className="bg-slate-100 text-slate-500 cursor-not-allowed" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input id="fullName" name="fullName" defaultValue={fullName} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Empresa o Negocio</Label>
                <Input id="company" name="company" defaultValue={company} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono de contacto</Label>
                <Input id="phone" name="phone" defaultValue={phone} placeholder="Ej. 55 1234 5678" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t p-4 flex justify-end">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Guardar Cambios</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

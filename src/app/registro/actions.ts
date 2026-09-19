'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function registerClient(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('fullName') as string
  const company = formData.get('company') as string

  // Usamos Supabase Auth para crear el usuario. 
  // Le pasamos el rol 'Cliente' en la metadata para que el trigger lo asigne.
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        company_name: company,
        role: 'Cliente'
      }
    }
  })

  if (error) {
    return redirect('/registro?error=' + encodeURIComponent(error.message))
  }

  // Redirigir al login o directo al portal del cliente
  redirect('/cliente')
}

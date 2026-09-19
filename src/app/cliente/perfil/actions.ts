'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()

  const fullName = formData.get('fullName') as string
  const company = formData.get('company') as string
  const phone = formData.get('phone') as string

  // Actualizar metadata del usuario en Supabase Auth
  const { error } = await supabase.auth.updateUser({
    data: {
      full_name: fullName,
      company_name: company,
      phone: phone
    }
  })

  if (error) {
    console.error('Error al actualizar perfil', error)
    return
  }

  // Refrescar el layout para que el nombre y header se actualicen
  revalidatePath('/', 'layout')
}

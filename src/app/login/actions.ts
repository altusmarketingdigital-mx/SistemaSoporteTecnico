'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
// import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  // MOCKUP PHASE: Saltamos la conexión a Supabase y simulamos éxito
  /*
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const { error } = await supabase.auth.signInWithPassword(data)
  if (error) {
    return redirect('/login?error=true')
  }
  */

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

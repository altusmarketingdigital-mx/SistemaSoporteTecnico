'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function createTicketClient(formData: FormData) {
  const supabase = await createClient()

  // Validamos si el usuario tiene sesión. Si no, o si falla (porque no hay BD), ignoramos en mockup
  const { data: { user } } = await supabase.auth.getUser()

  const subject = formData.get('subject') as string
  const description = formData.get('description') as string
  const priority = formData.get('priority') as string
  const category = formData.get('category') as string

  // Generamos un número de ticket automático
  const year = new Date().getFullYear()
  const randomId = Math.floor(1000 + Math.random() * 9000)
  const ticketNumber = `TK-${year}-${randomId}`

  // Intento de guardado en base de datos
  if (user) {
    const { error } = await supabase
      .from('tickets')
      .insert({
        ticket_number: ticketNumber,
        subject,
        description,
        priority,
        category,
        channel: 'Portal Web',
        status: 'Nuevo',
        created_by: user.id // Asignamos el autor al cliente
      })
      
    if (error) {
      console.error('Error insertando ticket:', error)
    }
  }

  // Redirigir al listado principal del cliente para que vea su "Ticket"
  redirect('/cliente')
}

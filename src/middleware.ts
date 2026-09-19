import { NextResponse, type NextRequest } from 'next/server'
// import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // MOCKUP PHASE: Saltamos la validación de Supabase porque aún no hay variables de entorno (.env)
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

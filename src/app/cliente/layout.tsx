import { ReactNode } from 'react'
import Link from 'next/link'
import { LifeBuoy } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function ClienteLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const fullName = user.user_metadata?.full_name || 'Usuario'
  const company = user.user_metadata?.company_name || 'Cliente'
  const initials = fullName.substring(0, 2).toUpperCase()

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/80 via-slate-50 to-slate-100 flex flex-col font-sans selection:bg-blue-200">
      {/* Navbar Premium con Glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 h-16 flex items-center justify-between px-4 sm:px-8 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg shadow-lg shadow-blue-500/20">
            <LifeBuoy className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Mi Soporte<span className="text-blue-600">Pro</span></span>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <Link href="/cliente" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Mis Tickets</Link>
            <Link href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Base de Conocimientos</Link>
            <Link href="/cliente/perfil" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Mi Perfil</Link>
          </nav>
          <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">{fullName}</p>
              <p className="text-xs font-medium text-slate-500">{company}</p>
            </div>
            <Link href="/cliente/perfil" className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all ring-2 ring-white">
              {initials}
            </Link>
            <form action={async () => {
                'use server'
                const supabase = await createClient()
                await supabase.auth.signOut()
                redirect('/login')
            }}>
                <button type="submit" className="text-xs font-bold text-slate-400 hover:text-red-500 hover:bg-red-50 px-3 py-2 rounded-md transition-all ml-2">Salir</button>
            </form>
          </div>
        </div>
      </header>
      
      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 sm:p-8 relative">
        {children}
      </main>
    </div>
  )
}

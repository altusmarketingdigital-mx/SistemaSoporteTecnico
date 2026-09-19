import { ReactNode } from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { 
  LayoutDashboard, 
  Ticket, 
  Users, 
  Wrench, 
  LifeBuoy, 
  BookOpen, 
  BarChart3, 
  Settings,
  LogOut,
  AlertCircle,
  User
} from 'lucide-react'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sidebar Premium Oscuro */}
      <aside className="w-64 bg-[#0B1120] text-slate-300 flex flex-col shadow-2xl z-20 border-r border-slate-800/50">
        <div className="h-16 flex items-center px-6 border-b border-slate-800/60 bg-[#0B1120]">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 rounded-lg mr-3 shadow-lg shadow-blue-500/20">
            <LifeBuoy className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">HelpDesk<span className="text-blue-400">Pro</span></span>
        </div>
        
        <div className="px-6 py-4 border-b border-slate-800/60">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Menú Principal</p>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <NavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard General" active />
          <NavItem href="/dashboard/mis-tickets" icon={<AlertCircle size={18} />} label="Mi Área (SLA)" />
          <NavItem href="/dashboard/tickets" icon={<Ticket size={18} />} label="Todos los Tickets" />
          <NavItem href="/dashboard/clientes" icon={<Users size={18} />} label="Directorio Clientes" />
          <NavItem href="/dashboard/tecnicos" icon={<Wrench size={18} />} label="Técnicos" />
          
          <div className="pt-4 pb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2">Administración</p>
          </div>
          <NavItem href="/dashboard/conocimiento" icon={<BookOpen size={18} />} label="Conocimientos" />
          <NavItem href="/dashboard/reportes" icon={<BarChart3 size={18} />} label="Reportes" />
          <NavItem href="/dashboard/configuracion" icon={<Settings size={18} />} label="Configuración" />
        </nav>
        
        <div className="p-4 border-t border-slate-800/60 bg-slate-900/30">
          <form action={async () => {
            'use server'
            const supabase = await createClient()
            await supabase.auth.signOut()
            redirect('/login')
          }}>
            <button type="submit" className="flex items-center space-x-3 text-slate-400 hover:text-red-400 w-full px-3 py-2.5 rounded-lg transition-colors hover:bg-red-500/10 group">
              <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
              <span className="font-medium text-sm">Cerrar Sesión</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-50 to-transparent -z-10" />
        
        {/* Navbar Glassmorphism */}
        <div className="h-16 flex items-center justify-between px-8 border-b border-slate-200/60 bg-white/60 backdrop-blur-md sticky top-0 z-10 shadow-sm">
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">Panel de Administración</h2>
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md hover:scale-105 transition-transform cursor-pointer">
              <User size={18} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon, label, active = false }: any) {
  return (
    <Link href={href} className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${active ? 'bg-blue-500/15 text-blue-400 font-medium' : 'hover:bg-slate-800/50 text-slate-400 hover:text-slate-100'}`}>
      <div className={`${active ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400 transition-colors'}`}>{icon}</div>
      <span className="text-sm">{label}</span>
    </Link>
  )
}

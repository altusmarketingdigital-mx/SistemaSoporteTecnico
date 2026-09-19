import Link from 'next/link'
import { ReactNode } from 'react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { 
  LayoutDashboard, 
  Ticket, 
  Users, 
  Wrench, 
  BookOpen, 
  BarChart3, 
  Settings,
  LogOut,
  AlertCircle
} from 'lucide-react'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  // MOCK AUTH PARA FASE DE MAQUETACIÓN
  const user = { email: 'admin@empresa.com' } 
  // const supabase = await createClient()
  // const { data: { user }, error } = await supabase.auth.getUser()

  // Protect the dashboard route
  // if (error || !user) {
  //   redirect('/login')
  // }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col shadow-sm">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="text-lg font-bold text-blue-700 tracking-tight">HelpDesk Pro</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <NavItem href="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard General" />
          <NavItem href="/dashboard/mis-tickets" icon={<AlertCircle size={20} />} label="Mi Área (SLA)" />
          <NavItem href="/dashboard/tickets" icon={<Ticket size={20} />} label="Todos los Tickets" />
          <NavItem href="/dashboard/clientes" icon={<Users size={20} />} label="Clientes" />
          <NavItem href="/dashboard/tecnicos" icon={<Wrench size={20} />} label="Técnicos" />
          <NavItem href="/dashboard/conocimiento" icon={<BookOpen size={20} />} label="Conocimientos" />
          <NavItem href="/dashboard/reportes" icon={<BarChart3 size={20} />} label="Reportes" />
          <NavItem href="/dashboard/configuracion" icon={<Settings size={20} />} label="Configuración" />
        </nav>
        <div className="p-4 border-t">
          <form action={async () => {
            'use server'
            const supabase = await createClient()
            await supabase.auth.signOut()
            redirect('/login')
          }}>
            <button type="submit" className="flex items-center space-x-3 text-slate-600 hover:text-red-600 w-full px-3 py-2 rounded-md transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Cerrar Sesión</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">Panel de Control</h1>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col text-right">
              <span className="text-sm font-medium text-gray-700">{user.email}</span>
              <span className="text-xs text-gray-500 capitalize">Administrador</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
              {user.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-8 overflow-auto flex-1">
          {children}
        </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center space-x-3 text-slate-600 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md transition-colors">
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  )
}

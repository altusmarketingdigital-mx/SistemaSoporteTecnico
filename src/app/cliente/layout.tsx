import { ReactNode } from 'react'
import Link from 'next/link'
import { LifeBuoy } from 'lucide-react'

export default function ClienteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b h-16 flex items-center justify-between px-4 sm:px-8 shadow-sm">
        <div className="flex items-center space-x-2 text-blue-700">
          <LifeBuoy className="h-6 w-6" />
          <span className="text-xl font-bold tracking-tight">Portal Cliente</span>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-4">
            <Link href="/cliente" className="text-sm font-medium text-slate-600 hover:text-blue-600">Mis Tickets</Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600">Base de Conocimientos</Link>
          </nav>
          <div className="flex items-center space-x-3 border-l pl-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">Roberto Gómez</p>
              <p className="text-xs text-slate-500">Tech Solutions SA</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">RG</div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 sm:p-8">
        {children}
      </main>
    </div>
  )
}

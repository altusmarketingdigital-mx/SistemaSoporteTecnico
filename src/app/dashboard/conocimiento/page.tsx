import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Book, FileText, Settings, Video } from 'lucide-react'

export default function ConocimientoPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">Base de Conocimientos</h1>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="mr-2 h-4 w-4" /> Nuevo Artículo</Button>
      </div>

      <div className="flex items-center space-x-2 bg-white p-2 px-4 rounded-md shadow-sm border">
        <Search className="h-5 w-5 text-gray-400" />
        <Input placeholder="Buscar artículos, manuales o guías..." className="border-0 shadow-none focus-visible:ring-0 flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Categorías Sidebar */}
        <div className="space-y-2">
          <h3 className="font-semibold text-slate-800 mb-4 px-2">Categorías</h3>
          <CategoryItem icon={<Book />} title="Preguntas Frecuentes" count={12} active />
          <CategoryItem icon={<FileText />} title="Manuales de Usuario" count={8} />
          <CategoryItem icon={<Settings />} title="Guías de Configuración" count={15} />
          <CategoryItem icon={<Video />} title="Tutoriales" count={5} />
        </div>

        {/* Lista de Artículos */}
        <div className="md:col-span-3 space-y-4">
          <ArticleCard 
            title="¿Cómo restablecer la contraseña del sistema ERP?" 
            category="Preguntas Frecuentes"
            status="Publicado"
            views={342}
          />
          <ArticleCard 
            title="Configuración de impresoras térmicas genéricas" 
            category="Guías de Configuración"
            status="Publicado"
            views={128}
          />
          <ArticleCard 
            title="Solución al error de conexión VPN (Código 800)" 
            category="Preguntas Frecuentes"
            status="Borrador"
            views={0}
          />
        </div>

      </div>
    </div>
  )
}

function CategoryItem({ icon, title, count, active = false }: any) {
  return (
    <div className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-700 font-medium' : 'hover:bg-slate-50 text-slate-600'}`}>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4">{icon}</div>
        <span className="text-sm">{title}</span>
      </div>
      <Badge variant="secondary" className="bg-slate-100">{count}</Badge>
    </div>
  )
}

function ArticleCard({ title, category, status, views }: any) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer border-slate-200">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="space-y-1">
          <h4 className="font-semibold text-slate-800">{title}</h4>
          <div className="flex space-x-4 text-xs text-slate-500">
            <span>Carpeta: {category}</span>
            <span>Vistas: {views}</span>
          </div>
        </div>
        <Badge variant="secondary" className={status === 'Publicado' ? 'bg-green-100 text-green-800 border-none' : 'bg-slate-200 text-slate-700 border-none'}>
          {status}
        </Badge>
      </CardContent>
    </Card>
  )
}

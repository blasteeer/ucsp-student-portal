import { User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SidebarProps {
  onNavigate: (view: string) => void;
}

const menuItems = [
  {
    category: "Proceso de Administración",
    items: [
      "Actualización de datos personales",
      "Hoja de vida",
      "Consulta de documentos",
    ],
  },
  {
    category: "Proceso Financiero",
    items: ["Aplicación de saldos"],
  },
  {
    category: "Proceso Novedades Académicas",
    items: [
      "Solicitud de reincorporación para matrícula",
      "Solicitud curso de nivelación",
    ],
  },
  {
    category: "Proceso Admisiones",
    items: ["Registro de documentos"],
  },
  {
    category: "Proceso Matrícula Académica",
    items: [
      "Cronograma de Matrícula",
      "Control de requisitos de matrícula",
      "Recibo de pago de matrícula y otros",
      "Consulta del horario de la oferta",
      "Resumen de periodo",
      "Semáforo del estudiante",
      "Histórico de notas",
      "Horario del estudiante (Pregrado)",
      "Programación de evaluaciones",
      "Matrícula con horario",
      "Consulta de estudiantes",
    ],
  },
  {
    category: "Favoritos",
    items: [
      "Notas registradas (Subnotas)",
      "Consulta de asistencia y comentarios",
      "Notas registradas",
    ],
  },
];

export const Sidebar = ({ onNavigate }: SidebarProps) => {
  const handleItemClick = (item: string) => {
    if (item === "Notas registradas") {
      onNavigate("notas");
    } else {
      onNavigate("inicio");
    }
  };

  return (
    <aside className="w-56 border-r border-border bg-card flex flex-col">
      {/* User Info */}
      <div className="p-3 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded bg-primary/10">
            <User className="h-7 w-7 text-primary" />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">MARIA LUCIA PEREA VIZCARRA</p>
          <p className="text-xs text-muted-foreground">76010820</p>
        </div>
      </div>

      {/* Search */}
      <div className="p-2 border-b border-border">
        <div className="relative">
          <Input
            type="text"
            placeholder="Buscar..."
            className="h-7 text-xs pl-7 bg-secondary"
          />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-auto p-1">
        {menuItems.map((section) => (
          <div key={section.category} className="mb-2">
            <p className="px-2 py-1 text-xs font-semibold text-primary">
              {section.category}
            </p>
            <ul>
              {section.items.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleItemClick(item)}
                    className="w-full text-left px-2 py-1 text-xs text-foreground hover:bg-secondary rounded flex items-center gap-1.5"
                  >
                    <span className="w-3 h-3 border border-border bg-secondary flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

import { User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b border-border bg-primary text-primary-foreground">
      <div className="flex h-10 items-center justify-between px-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary-foreground/20">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Sistema de Gestión Académica</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-primary-foreground/70">Institución:</span>
            <select className="bg-transparent border-none text-xs text-primary-foreground focus:outline-none cursor-pointer">
              <option>UNIVERSIDAD CATÓLICA SAN PABLO</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary-foreground/70">Acceso:</span>
            <select className="bg-transparent border-none text-xs text-primary-foreground focus:outline-none cursor-pointer">
              <option>Estudiante</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-primary-foreground/70">Idioma:</span>
            <select className="bg-transparent border-none text-xs text-primary-foreground focus:outline-none cursor-pointer">
              <option>Español (Perú)</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

import { Circle } from "lucide-react";

export const MainContent = () => {
  return (
    <main className="flex-1 bg-background p-4 overflow-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
        <Circle className="h-2 w-2 fill-green-500 text-green-500" />
        <span>Inicio</span>
      </div>

      {/* Welcome Area */}
      <div className="flex flex-col items-center justify-center py-8">
        <div className="bg-card border border-border p-6 rounded max-w-2xl w-full">
          <h2 className="text-lg font-medium text-foreground mb-4 text-center">
            Bienvenido/a al Sistema de Gestión Académica
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Seleccione una opción del menú lateral para comenzar.
          </p>
          
          <div className="bg-secondary/50 rounded p-4">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-muted-foreground">Estudiante:</span>
                <p className="font-medium">Maria Lucia Perea Vizcarra</p>
              </div>
              <div>
                <span className="text-muted-foreground">Código:</span>
                <p className="font-medium">76010820</p>
              </div>
              <div>
                <span className="text-muted-foreground">Programa:</span>
                <p className="font-medium">Derecho</p>
              </div>
              <div>
                <span className="text-muted-foreground">Periodo Actual:</span>
                <p className="font-medium">2025-II</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

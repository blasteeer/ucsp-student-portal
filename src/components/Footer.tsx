export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-3 py-1.5">
      <div className="flex items-center justify-between text-[11px] text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>© 2025 Acies</span>
          <span>Sistema de Gestión Académica</span>
          <span>[v5.0.0]</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Usuario: maria.perea@ucsp.edu.pe</span>
          <span>Conectado desde: 10.2.20.42</span>
          <span>Inactividad: 0min 0seg / 45min 0seg</span>
        </div>
      </div>
    </footer>
  );
};

import { ArrowRight, FileCheck, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const pendingItems = [
  {
    title: "Encuesta de Evaluación Docente",
    deadline: "Vence en 3 días",
    urgent: true,
  },
  {
    title: "Actualizar datos personales",
    deadline: "Pendiente",
    urgent: false,
  },
  {
    title: "Confirmar matrícula 2025-I",
    deadline: "Vence en 7 días",
    urgent: false,
  },
];

const recentActivity = [
  {
    title: "Constancia de estudios solicitada",
    date: "Hace 2 días",
    status: "Procesando",
  },
  {
    title: "Inscripción a taller completada",
    date: "Hace 5 días",
    status: "Completado",
  },
];

export const QuickActions = () => {
  return (
    <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Pending Tasks */}
          <div className="opacity-0 animate-fade-up animation-delay-100">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                    <AlertCircle className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground">
                    Tareas Pendientes
                  </h3>
                </div>
                <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {pendingItems.length}
                </span>
              </div>

              <div className="space-y-3">
                {pendingItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 h-2 w-2 rounded-full ${
                          item.urgent ? "bg-destructive" : "bg-gold"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-card-foreground">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.deadline}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-4 w-full">
                Ver todas las tareas
              </Button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="opacity-0 animate-fade-up animation-delay-200">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10">
                  <Clock className="h-5 w-5 text-navy" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground">
                  Actividad Reciente
                </h3>
              </div>

              <div className="space-y-3">
                {recentActivity.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-border bg-background p-4"
                  >
                    <div className="flex items-start gap-3">
                      <FileCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-card-foreground">
                          {item.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.status === "Completado"
                          ? "bg-emerald-500/10 text-emerald-600"
                          : "bg-gold/10 text-gold"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="mt-4 w-full">
                Ver todo el historial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

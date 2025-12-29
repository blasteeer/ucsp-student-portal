import { Calendar, BookOpen, GraduationCap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero px-4 py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Welcome Text */}
          <div className="space-y-6 opacity-0 animate-fade-up">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
                Bienvenido/a al Portal
              </p>
              <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Hola, María
              </h1>
              <p className="mt-3 text-lg text-primary-foreground/80">
                Tu espacio para gestionar tu vida académica en la Universidad
                Católica San Pablo
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
                <BookOpen className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium text-primary-foreground">
                  6 cursos activos
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
                <GraduationCap className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium text-primary-foreground">
                  7mo ciclo
                </span>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="opacity-0 animate-fade-up animation-delay-200">
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20">
                  <Calendar className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    Próximos Eventos
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    Semestre 2025-I
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-lg bg-primary-foreground/5 p-3">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-gold text-accent-foreground">
                    <span className="text-xs font-medium">ENE</span>
                    <span className="text-lg font-bold leading-none">15</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground">
                      Inicio de Clases
                    </p>
                    <p className="text-sm text-primary-foreground/70">
                      Semestre Académico 2025-I
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-primary-foreground/5 p-3">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-primary-foreground/20 text-primary-foreground">
                    <span className="text-xs font-medium">ENE</span>
                    <span className="text-lg font-bold leading-none">20</span>
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground">
                      Taller de Investigación
                    </p>
                    <p className="text-sm text-primary-foreground/70">
                      Inscripción abierta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

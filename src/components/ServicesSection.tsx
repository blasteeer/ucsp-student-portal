import {
  FileText,
  Calendar,
  BookOpen,
  CreditCard,
  GraduationCap,
  ClipboardList,
  Users,
  HelpCircle,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Inscripción a Eventos",
    description:
      "Regístrate a conferencias, talleres, seminarios y actividades académicas.",
    icon: Calendar,
    color: "gold" as const,
    badge: "Nuevo",
  },
  {
    title: "Trámites Académicos",
    description:
      "Solicita constancias, certificados, cartas y otros documentos oficiales.",
    icon: FileText,
    color: "blue" as const,
  },
  {
    title: "Consulta de Notas",
    description:
      "Revisa tu historial académico, notas parciales y promedios por ciclo.",
    icon: BookOpen,
    color: "green" as const,
  },
  {
    title: "Estado de Pagos",
    description:
      "Consulta tu estado de cuenta, cronograma de pagos y comprobantes.",
    icon: CreditCard,
    color: "purple" as const,
  },
  {
    title: "Matrícula",
    description:
      "Gestiona tu matrícula, horarios y selección de cursos para el ciclo.",
    icon: GraduationCap,
    color: "teal" as const,
  },
  {
    title: "Encuestas",
    description:
      "Participa en encuestas de evaluación docente y mejora continua.",
    icon: ClipboardList,
    color: "orange" as const,
  },
  {
    title: "Directorio UCSP",
    description:
      "Encuentra información de contacto de docentes, áreas y servicios.",
    icon: Users,
    color: "blue" as const,
  },
  {
    title: "Mesa de Ayuda",
    description:
      "¿Tienes dudas? Contacta a soporte técnico o asesoría académica.",
    icon: HelpCircle,
    color: "gold" as const,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center opacity-0 animate-fade-up">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Servicios Disponibles
          </h2>
          <p className="mt-2 text-muted-foreground">
            Accede rápidamente a los servicios que necesitas
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

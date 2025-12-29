import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">
                  UC
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Universidad Católica San Pablo
                </h3>
                <p className="text-sm text-muted-foreground">
                  Portal de Servicios Estudiantiles
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Tu plataforma integral para gestionar tu vida académica. Accede a
              servicios, trámites y recursos desde cualquier lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Portal Académico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Biblioteca Virtual
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Campus Virtual
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Correo Institucional
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display font-semibold text-foreground">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Urb. Campiña Paisajista, Arequipa, Perú
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a
                  href="tel:+5154605600"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  (054) 605600
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:informes@ucsp.edu.pe"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  informes@ucsp.edu.pe
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2025 Universidad Católica San Pablo. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4 text-xs">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Términos de Uso
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

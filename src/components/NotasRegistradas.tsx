import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const NotasRegistradas = () => {
  const handleGenerarPDF = () => {
    // TODO: Will open PDF in new tab when provided
    window.open("about:blank", "_blank");
  };

  const handleGenerarHTML = () => {
    // Does nothing for now
  };

  return (
    <main className="flex-1 bg-background p-4 overflow-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
        <Circle className="h-2 w-2 fill-green-500 text-green-500" />
        <span>Notas registradas</span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handleGenerarHTML}
          className="text-xs bg-secondary"
        >
          Generar HTML
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleGenerarPDF}
          className="text-xs bg-accent text-accent-foreground"
        >
          Generar PDF
        </Button>
      </div>

      {/* Yellow info banner */}
      <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs p-2 mb-4">
        Generar reporte en PDF
      </div>

      {/* Data Table */}
      <div className="border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary">
              <TableHead className="text-xs font-medium text-foreground">Periodo</TableHead>
              <TableHead className="text-xs font-medium text-foreground">Sede/Código programa/pensum</TableHead>
              <TableHead className="text-xs font-medium text-foreground">Código</TableHead>
              <TableHead className="text-xs font-medium text-foreground">Identificación/Nombres</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-xs">2025-I</TableCell>
              <TableCell className="text-xs">1 / 4 / 18</TableCell>
              <TableCell className="text-xs">76010820</TableCell>
              <TableCell className="text-xs">PEREA VIZCARRA MARIA LUCIA</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination and filters */}
      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
        <span>1 a 1 de 1</span>
        <div className="flex items-center gap-2">
          <span>en 0 seg.</span>
          <span>Filtro:</span>
          <Select defaultValue="contiene">
            <SelectTrigger className="h-7 w-24 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="contiene">Contiene</SelectItem>
              <SelectItem value="igual">Igual</SelectItem>
            </SelectContent>
          </Select>
          <span>Preferencias:</span>
          <Select>
            <SelectTrigger className="h-7 w-20 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bottom info section */}
      <div className="mt-8 bg-secondary/50 p-3 text-xs">
        <p className="font-semibold text-foreground mb-1">Visión general:</p>
        <p className="text-muted-foreground">Notas registradas (NOTREG): Contenido...</p>
      </div>
    </main>
  );
};

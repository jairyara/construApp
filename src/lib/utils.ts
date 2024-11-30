import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/*
** Menu items.
 */

export const items = [
  {
    title: "Inicio",
    url: "/dashboard/inicio",
    icon: "/icons/home.svg",
  },
  {
    title: "Control de Obra",
    url: "/dashboard/obra",
    icon: "/icons/builder.svg",
  },
  {
    title: "Presupuesto",
    url: "/dashboard/presupuesto",
    icon: "/icons/cash.svg",
  },
  {
    title: "Programación de obra",
    url: "/dashboard/programacion",
    icon: "/icons/gantt.svg",
  },
  {
    title: "Calidad",
    url: "/dashboard/calidad",
    icon: "/icons/quality.svg",
  },
  {
    title: "Reportes",
    url: "/dashboard/reportes",
    icon: "/icons/Chart.svg",
  },
  {
    title: "Terminaciones de obra",
    url: "/dashboard/entregas",
    icon: "/icons/brush.svg"
  }
]

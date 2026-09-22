import type { SVGProps } from "react";

const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.4-3.4"/></svg>;
}
export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
}
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18"/></svg>;
}
export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
}
export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/></svg>;
}
export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><path d="m5 12 4 4L19 6"/></svg>;
}
export function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><path d="M4 6h16M7 12h10M10 18h4"/></svg>;
}
export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return <svg {...base} {...props}><path d="m13 2-7 11h6l-1 9 7-12h-6l1-8Z"/></svg>;
}

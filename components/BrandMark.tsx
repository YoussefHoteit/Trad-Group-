import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brandMark" aria-label="Trad Group home">
      <span className="brandBolt">⚡</span>
      <span className="brandWords">
        <strong>TRAD GROUP</strong>
        {!compact && <small>LIGHTING & ELECTRIC</small>}
      </span>
    </Link>
  );
}

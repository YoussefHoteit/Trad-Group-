import Link from "next/link";

export default function NotFound() {
  return (
    <section className="innerHero" style={{ minHeight: "58vh", display: "grid", placeItems: "center" }}>
      <div className="pageShell" style={{ textAlign: "center" }}>
        <span className="eyebrow">404</span>
        <h1 style={{ maxWidth: 760, marginInline: "auto" }}>That product page isn’t in the catalog.</h1>
        <p style={{ marginInline: "auto" }}>Return to the product browser and search by category or model code.</p>
        <Link href="/products" className="primaryButton" style={{ marginTop: 26 }}>Browse products</Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { ProductGlyph } from "@/components/ProductGlyph";
import { ProductCard } from "@/components/ProductCard";
import { getCategory, getProduct, products } from "@/data/catalog";
import { catalogMeta } from "@/data/company";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  return product ? { title: product.name, description: product.description } : { title: "Product" };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="productHero">
        <div className="pageShell productHeroGrid">
          <div className="detailVisual">
            <div className="productGlow" />
            <ProductGlyph category={product.category} />
            <span>Catalog page {product.page}</span>
          </div>
          <div className="detailCopy">
            <Link href={`/products?category=${product.category}`} className="eyebrow">{category?.name}</Link>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            {product.highlights && <div className="featureList compact">{product.highlights.map((item) => <span key={item}><CheckIcon /> {item}</span>)}</div>}
            <div className="detailActions">
              <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="primaryButton">Request quote <ArrowIcon /></Link>
              <Link href="/products" className="secondaryButton dark">Back to products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pageShell detailGrid">
        <div>
          <div className="sectionHeading compactHeading">
            <span className="eyebrow">Specifications</span>
            <h2>Catalog variants</h2>
            <p>{catalogMeta.note}</p>
          </div>
          <div className="tableWrap">
            <table className="specTable">
              <thead><tr><th>Code</th><th>Alt. code</th><th>Watt / color</th><th>Size / length</th><th>Qty</th><th>Price</th></tr></thead>
              <tbody>
                {product.variants.map((variant, index) => (
                  <tr key={`${variant.code}-${index}`}>
                    <td><strong>{variant.code}</strong>{variant.notes && <small>{variant.notes}</small>}</td>
                    <td>{variant.secondaryCode || "—"}</td>
                    <td>{[variant.watt, variant.color].filter(Boolean).join(" · ") || "—"}</td>
                    <td>{[variant.size, variant.length, variant.cut ? `Cut ${variant.cut}` : ""].filter(Boolean).join(" · ") || "—"}</td>
                    <td>{variant.qty || "—"}{variant.lumen && <small>{variant.lumen}</small>}{variant.battery && <small>{variant.battery}</small>}</td>
                    <td>{variant.price || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside className="sourceCard sourceGraphic">
          <span className="eyebrow">Source reference</span>
          <h3>Catalog page {product.page}</h3>
          <div className="sourceGlyph"><ProductGlyph category={product.category} /></div>
          <p>Product codes and specifications shown here are transcribed from the supplied Trad Group / Konnice 2026 catalog.</p>
          <Link href="/contact">Ask about this product <ArrowIcon /></Link>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="section pageShell relatedSection">
          <div className="sectionHeading"><span className="eyebrow">More in {category?.name}</span><h2>Related products</h2></div>
          <div className="productGrid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
        </section>
      )}
    </>
  );
}

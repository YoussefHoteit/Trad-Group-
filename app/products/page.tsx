import type { Metadata } from "next";
import { ProductBrowser } from "@/components/ProductBrowser";
import { categories, products } from "@/data/catalog";

export const metadata: Metadata = { title: "Products", description: "Browse the Trad Group lighting and electrical product catalog." };

export default function ProductsPage({ searchParams }: { searchParams: { category?: string } }) {
  const initial = categories.some((category) => category.slug === searchParams.category) ? searchParams.category! : "all";
  return (
    <>
      <section className="innerHero">
        <div className="pageShell innerHeroGrid">
          <div>
            <span className="eyebrow">2026 catalog</span>
            <h1>Find the right product, fast.</h1>
            <p>Search {products.length} product families across {categories.length} categories. Use product names, model codes, wattage or category.</p>
          </div>
          <div className="heroIndex"><strong>{categories.length}</strong><span>categories</span></div>
        </div>
      </section>
      <div className="pageShell catalogPage"><ProductBrowser initialCategory={initial} /></div>
    </>
  );
}

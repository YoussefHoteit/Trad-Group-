import Link from "next/link";
import type { Category } from "@/data/catalog";
import { getProductsByCategory } from "@/data/catalog";
import { ArrowIcon } from "./Icons";
import { ProductGlyph } from "./ProductGlyph";

export function CategoryCard({ category }: { category: Category }) {
  const count = getProductsByCategory(category.slug).length;
  return (
    <Link href={`/products?category=${category.slug}`} className="categoryCard">
      <div className="categoryVisual">
        <div className="productGlow" />
        <ProductGlyph category={category.slug} />
      </div>
      <div className="categoryCardBody">
        <span>{String(count).padStart(2, "0")} product families</span>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <b>Explore <ArrowIcon /></b>
      </div>
    </Link>
  );
}

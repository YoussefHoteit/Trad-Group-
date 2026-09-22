import Link from "next/link";
import type { Product } from "@/data/catalog";
import { getCategory } from "@/data/catalog";
import { ArrowIcon } from "./Icons";
import { ProductGlyph } from "./ProductGlyph";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const prices = product.variants.map((variant) => Number.parseFloat(variant.price || "")).filter((price) => Number.isFinite(price));
  const minPrice = prices.length ? Math.min(...prices) : null;
  return (
    <Link href={`/products/${product.slug}`} className="productCard">
      <div className="productVisual">
        <div className="productGlow" />
        <ProductGlyph category={product.category} />
        <span className="pageBadge">Catalog p. {product.page}</span>
      </div>
      <div className="productCardBody">
        <span className="eyebrow">{category?.name}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="productCardMeta">
          <span>{product.variants.length} {product.variants.length === 1 ? "variant" : "variants"}</span>
          {minPrice !== null && <span>From {minPrice}</span>}
        </div>
        <span className="textLink">View details <ArrowIcon /></span>
      </div>
    </Link>
  );
}

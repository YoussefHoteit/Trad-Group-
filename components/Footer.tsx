import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { categories } from "@/data/catalog";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div className="footerBrand">
          <BrandMark />
          <p>{company.shortDescription}</p>
          <span>{company.serviceArea}</span>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href="/products">All products</Link>
          <Link href="/about">About Trad Group</Link>
          <Link href="/contact">Request a quote</Link>
        </div>
        <div>
          <h4>Popular categories</h4>
          {categories.slice(0, 6).map((category) => (
            <Link key={category.slug} href={`/products?category=${category.slug}`}>{category.name}</Link>
          ))}
        </div>
      </div>
      <div className="footerBottom">
        <span>© {new Date().getFullYear()} Trad Group.</span>
        <span>Lighting • Electrical utilities</span>
      </div>
    </footer>
  );
}

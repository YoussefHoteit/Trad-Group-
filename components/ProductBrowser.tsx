"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, products } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { FilterIcon, SearchIcon } from "./Icons";

export function ProductBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [mobileFilters, setMobileFilters] = useState(false);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("category");
    if (requested && categories.some((item) => item.slug === requested)) setCategory(requested);
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      if (!matchesCategory) return false;
      if (!normalized) return true;
      const haystack = [
        product.name,
        product.description,
        product.category,
        ...product.variants.flatMap((variant) => [variant.code, variant.secondaryCode, variant.color, variant.watt, variant.size, variant.notes]),
      ].filter(Boolean).join(" ").toLowerCase();
      return haystack.includes(normalized);
    });
  }, [category, query]);

  return (
    <section className="catalogBrowser">
      <div className="catalogControls">
        <label className="searchBox">
          <SearchIcon />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search product name, code, wattage…" />
        </label>
        <button className="filterToggle" onClick={() => setMobileFilters(!mobileFilters)}>
          <FilterIcon /> Categories
        </button>
      </div>
      <div className={`catalogLayout ${mobileFilters ? "showFilters" : ""}`}>
        <aside className="categorySidebar">
          <div className="sidebarHeading">
            <span>Category</span>
            <button onClick={() => setMobileFilters(false)}>Done</button>
          </div>
          <button className={category === "all" ? "selected" : ""} onClick={() => { setCategory("all"); setMobileFilters(false); }}>
            <span>All products</span><b>{products.length}</b>
          </button>
          {categories.map((item) => {
            const count = products.filter((product) => product.category === item.slug).length;
            return (
              <button key={item.slug} className={category === item.slug ? "selected" : ""} onClick={() => { setCategory(item.slug); setMobileFilters(false); }}>
                <span>{item.name}</span><b>{count}</b>
              </button>
            );
          })}
        </aside>
        <div className="catalogResults">
          <div className="resultsBar">
            <div>
              <span>Showing</span>
              <strong>{filtered.length} product families</strong>
            </div>
            {(category !== "all" || query) && (
              <button onClick={() => { setCategory("all"); setQuery(""); }}>Clear filters</button>
            )}
          </div>
          {filtered.length ? (
            <div className="productGrid">
              {filtered.map((product) => <ProductCard key={product.slug} product={product} />)}
            </div>
          ) : (
            <div className="emptyState">
              <h3>No products match that search.</h3>
              <p>Try a product code, a simpler term, or a different category.</p>
              <button onClick={() => { setCategory("all"); setQuery(""); }}>Reset catalog</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

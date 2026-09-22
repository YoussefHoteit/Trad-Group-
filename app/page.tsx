import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { ProductGlyph } from "@/components/ProductGlyph";
import { categories, products } from "@/data/catalog";
import { company } from "@/data/company";

export default function HomePage() {
  const featured = [
    "round-slim-panel-light-x3-51",
    "flood-light-x3f60",
    "dc-led-strip-family",
    "smart-magnetic-grill-lights",
  ].map((slug) => products.find((product) => product.slug === slug)!).filter(Boolean);

  return (
    <>
      <section className="heroSection heroGraphic">
        <div className="heroOverlay" />
        <div className="heroNoise" />
        <div className="heroContent pageShell">
          <div className="heroCopy">
            <span className="heroKicker"><i /> Lighting that works as hard as your project.</span>
            <h1>Indoor. Outdoor.<br /><em>Everything in between.</em></h1>
            <p>{company.tagline}</p>
            <div className="heroActions">
              <Link href="/products" className="primaryButton">Explore products <ArrowIcon /></Link>
              <Link href="/contact" className="secondaryButton">Request a quote</Link>
            </div>
            <div className="heroTrust">
              <span><CheckIcon /> Konnice Electric catalog range</span>
              <span><CheckIcon /> Lebanon & West Africa</span>
              <span><CheckIcon /> Indoor + outdoor solutions</span>
            </div>
          </div>
          <div className="heroCard">
            <span>2026 product catalog</span>
            <strong>{categories.length}</strong>
            <p>categories across lighting, ventilation, magnetic systems, strip lighting and electrical utilities.</p>
            <Link href="/products">Browse all categories <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="metricStrip">
        <div className="pageShell metricGrid">
          <div><strong>{categories.length}</strong><span>Product categories</span></div>
          <div><strong>{products.length}</strong><span>Product families</span></div>
          <div><strong>2026</strong><span>Catalog edition</span></div>
          <div><strong>21</strong><span>Catalog pages</span></div>
        </div>
      </section>

      <section className="section pageShell">
        <div className="sectionHeading splitHeading">
          <div>
            <span className="eyebrow">Shop by category</span>
            <h2>One source for the full lighting setup.</h2>
          </div>
          <p>From bulbs and panels to garden fixtures, smart magnetic tracks, strip systems and cable management.</p>
        </div>
        <div className="categoryGrid">
          {categories.slice(0, 8).map((category) => <CategoryCard key={category.slug} category={category} />)}
        </div>
        <div className="centerAction"><Link className="secondaryButton dark" href="/products">View all {categories.length} categories <ArrowIcon /></Link></div>
      </section>

      <section className="darkSection">
        <div className="pageShell">
          <div className="sectionHeading light splitHeading">
            <div>
              <span className="eyebrow">Featured range</span>
              <h2>Products for every layer of the project.</h2>
            </div>
            <p>Selected catalog families covering architectural, outdoor, strip and magnetic lighting systems.</p>
          </div>
          <div className="productGrid featuredGrid">
            {featured.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="section pageShell storyGrid">
        <div className="storyImageWrap storyGraphic" aria-hidden="true">
          <div className="storyGraphicBrand">TRAD GROUP</div>
          <ProductGlyph category="magnetic-track-lights" />
          <strong>Lighting & electrical solutions</strong>
          <span>Indoor • Outdoor • Utilities</span>
        </div>
        <div className="storyCopy">
          <span className="eyebrow">Trad Group</span>
          <h2>A practical catalog for real lighting projects.</h2>
          <p>Trad Group specializes in indoor and outdoor lighting and electrical utilities. The supplied catalog presents Trad Group as an authorized Konnice agent for Lebanon and West African countries.</p>
          <div className="featureList">
            <span><CheckIcon /> Indoor lighting and panel systems</span>
            <span><CheckIcon /> Garden, wall, step and solar lighting</span>
            <span><CheckIcon /> LED strips, drivers and aluminium profiles</span>
            <span><CheckIcon /> Magnetic track lights and accessories</span>
          </div>
          <Link href="/about" className="textLink">More about Trad Group <ArrowIcon /></Link>
        </div>
      </section>

      <section className="ctaSection pageShell">
        <div>
          <span className="eyebrow">Need a quote?</span>
          <h2>Send the product code. We’ll take it from there.</h2>
          <p>Search by code or category, then send your required products and quantities through the quote form.</p>
        </div>
        <Link href="/contact" className="primaryButton">Request a quote <ArrowIcon /></Link>
      </section>
    </>
  );
}

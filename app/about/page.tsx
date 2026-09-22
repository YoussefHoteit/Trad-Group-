import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { ProductGlyph } from "@/components/ProductGlyph";
import { categories } from "@/data/catalog";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "About", description: "About Trad Group and its indoor, outdoor and electrical catalog range." };

export default function AboutPage() {
  return (
    <>
      <section className="innerHero aboutHero">
        <div className="pageShell innerHeroGrid">
          <div><span className="eyebrow">About Trad Group</span><h1>Lighting supply with a catalog built for choice.</h1><p>{company.shortDescription}</p></div>
          <div className="heroIndex"><strong>{categories.length}</strong><span>catalog categories</span></div>
        </div>
      </section>
      <section className="section pageShell storyGrid aboutStory">
        <div className="storyImageWrap storyGraphic" aria-hidden="true">
          <div className="storyGraphicBrand">TRAD GROUP</div>
          <ProductGlyph category="garden-lighting" />
          <strong>Indoor & outdoor lighting</strong>
          <span>Electrical utilities • Konnice Electric</span>
        </div>
        <div className="storyCopy">
          <span className="eyebrow">What we supply</span>
          <h2>From the first lamp to the final connector.</h2>
          <p>Trad Group’s catalog spans everyday LED bulbs, panels and downlights, linear lighting, floodlights, solar fixtures, fans, LED strip systems, drivers, aluminium profiles, garden and wall lights, magnetic track systems and cable trunking.</p>
          <p>The catalog identifies Trad Group as an authorized Konnice agent serving Lebanon and West African countries.</p>
          <div className="featureList">
            <span><CheckIcon /> Indoor lighting</span>
            <span><CheckIcon /> Outdoor & garden lighting</span>
            <span><CheckIcon /> Electrical utilities & accessories</span>
            <span><CheckIcon /> Konnice Electric catalog products</span>
          </div>
          <Link href="/products" className="primaryButton">Explore catalog <ArrowIcon /></Link>
        </div>
      </section>
      <section className="darkSection aboutDark">
        <div className="pageShell valuesGrid">
          <div><span>01</span><h3>Broad range</h3><p>{categories.length} categories organized for quick product discovery.</p></div>
          <div><span>02</span><h3>Project-ready detail</h3><p>Model codes, wattage, dimensions, carton quantities and catalog pricing where provided.</p></div>
          <div><span>03</span><h3>Easy quotation</h3><p>Search by code, find the correct variant, and send the requirement to the sales team.</p></div>
        </div>
      </section>
    </>
  );
}

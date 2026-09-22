import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Contact", description: "Request a quote from Trad Group." };

export default function ContactPage({ searchParams }: { searchParams: { product?: string } }) {
  return (
    <>
      <section className="innerHero contactHero">
        <div className="pageShell innerHeroGrid">
          <div><span className="eyebrow">Sales & quotations</span><h1>Tell us what the project needs.</h1><p>Send a product code, category, quantity or project requirement. The form is ready for your final email, CRM or WhatsApp integration.</p></div>
          <div className="heroIndex"><strong>01</strong><span>quote request</span></div>
        </div>
      </section>
      <section className="section pageShell contactGrid">
        <div className="contactIntro">
          <span className="eyebrow">Trad Group</span>
          <h2>Start with a code. Or start with an idea.</h2>
          <p>Use the 2026 catalog to identify the exact model, or simply describe the lighting requirement and preferred application.</p>
          <div className="contactFacts">
            <div><span>Service area</span><strong>{company.serviceArea}</strong></div>
            <div><span>Phone</span><strong>{company.phone || "Add business phone"}</strong></div>
            <div><span>Email</span><strong>{company.email || "Add sales email"}</strong></div>
            <div><span>Address</span><strong>{company.address || "Add showroom / office address"}</strong></div>
          </div>
        </div>
        <QuoteForm product={searchParams.product} />
      </section>
    </>
  );
}

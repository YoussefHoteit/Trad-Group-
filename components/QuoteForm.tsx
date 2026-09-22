"use client";

import { FormEvent, useState } from "react";
import { company } from "@/data/company";

export function QuoteForm({ product }: { product?: string }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <form className="quoteForm" onSubmit={submit}>
      <div className="formRow">
        <label>Name<input name="name" required placeholder="Your name" /></label>
        <label>Company<input name="company" placeholder="Company / project" /></label>
      </div>
      <div className="formRow">
        <label>Phone<input name="phone" required placeholder="Phone number" /></label>
        <label>Email<input type="email" name="email" placeholder="Email address" /></label>
      </div>
      <label>Product / requirement<input name="product" defaultValue={product || ""} placeholder="Product code, category or project type" /></label>
      <label>Message<textarea name="message" rows={5} placeholder="Tell us what you need, quantities, preferred color temperature, or project details." /></label>
      <button className="primaryButton" type="submit">Send quote request</button>
      {sent && (
        <p className="formNote">
          Form captured successfully in the interface. Connect this form to your preferred email, CRM or WhatsApp endpoint before launch{company.email ? ` (${company.email})` : ""}.
        </p>
      )}
    </form>
  );
}

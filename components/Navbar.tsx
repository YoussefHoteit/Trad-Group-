"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark } from "./BrandMark";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="siteHeader">
      <div className="navShell">
        <BrandMark />
        <nav className="desktopNav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="navActions">
          <Link className="catalogButton desktopOnly" href="/contact">Request quote</Link>
          <button className="menuButton" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobileMenu">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>Request a quote</Link>
        </div>
      )}
    </header>
  );
}

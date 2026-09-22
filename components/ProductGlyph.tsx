export function ProductGlyph({ category }: { category: string }) {
  const common = { viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (category.includes("bulb") || category.includes("spot")) {
    return <svg {...common}><path d="M21 31a15 15 0 1 1 22 0c-4 3-6 7-6 11H27c0-4-2-8-6-11Z"/><path d="M27 47h10M28 52h8"/><path d="M32 5V1M12 13 9 10M52 13l3-3M8 31H3M61 31h-5"/></svg>;
  }
  if (category.includes("panel") || category.includes("downlight")) {
    return <svg {...common}><rect x="10" y="14" width="44" height="36" rx="8"/><circle cx="32" cy="32" r="11"/><path d="M18 8h28M18 56h28"/></svg>;
  }
  if (category.includes("strip") || category.includes("profile")) {
    return <svg {...common}><path d="M8 20h36c8 0 12 4 12 10s-4 10-12 10H20c-8 0-12 4-12 10"/><circle cx="16" cy="20" r="2"/><circle cx="28" cy="20" r="2"/><circle cx="40" cy="20" r="2"/><circle cx="24" cy="40" r="2"/><circle cx="36" cy="40" r="2"/><circle cx="48" cy="40" r="2"/></svg>;
  }
  if (category.includes("fan")) {
    return <svg {...common}><circle cx="32" cy="32" r="5"/><path d="M32 27c-2-12 4-19 10-18 6 1 8 8 4 13-3 4-8 5-14 5ZM37 33c12-2 19 4 18 10-1 6-8 8-13 4-4-3-5-8-5-14ZM31 37c2 12-4 19-10 18-6-1-8-8-4-13 3-4 8-5 14-5ZM27 31c-12 2-19-4-18-10 1-6 8-8 13-4 4 3 5 8 5 14Z"/></svg>;
  }
  if (category.includes("magnetic") || category.includes("tube") || category.includes("linear")) {
    return <svg {...common}><path d="M10 18h44v8H10zM18 38h28v8H18z"/><path d="M14 26v12M50 26v12"/></svg>;
  }
  if (category.includes("garden") || category.includes("outdoor") || category.includes("step") || category.includes("solar") || category.includes("flood")) {
    return <svg {...common}><path d="M25 8h14l5 12H20l5-12ZM24 20h16v15H24zM31 35h2v20h-2zM20 55h24"/><path d="m11 16-5-5M53 16l5-5M8 28H2M62 28h-6"/></svg>;
  }
  if (category.includes("cable") || category.includes("power")) {
    return <svg {...common}><path d="M11 20h42v24H11z"/><path d="M19 28h26M19 36h18"/><path d="M3 32h8M53 32h8"/></svg>;
  }
  return <svg {...common}><circle cx="32" cy="32" r="20"/><path d="m35 10-12 24h11l-5 20 14-26H32l3-18Z"/></svg>;
}

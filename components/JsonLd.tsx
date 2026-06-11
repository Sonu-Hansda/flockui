"use client";

/**
 * Injects JSON-LD structured data into the page.
 * Usage: <JsonLd id="unique-id" json={...} />
 */
export default function JsonLd({
  id,
  json,
}: {
  id: string;
  json: Record<string, unknown>;
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

"use server";

// Markate lead API integration.
//
// Markate's REST API v1 (`POST /v1/leads`) is gated behind an approval
// process — request access at https://www.markate.com/developer or by
// emailing api@markate.com, describing this integration. Once approved
// they issue an API key; set it as MARKATE_API_KEY in your environment
// (e.g. .env.local, and in your host's env var settings for production).
// Never expose that key to the browser — this file only runs server-side.

const MARKATE_API_URL = "https://api.markate.com/v1/leads";

export type PropertyType = "residential" | "commercial";

export type QuoteRequestInput = {
  propertyType: PropertyType;
  name: string;
  phone: string;
  email: string;
  address: string;
  suiteUnit: string;
  message: string;
  preferredContactTime: string;
  hearAboutUs: string;
  // TODO: wire up once Markate confirms how their API accepts attachments
  // (likely multipart/form-data or pre-signed upload URLs, not plain JSON).
  // images: File[];
};

export type QuoteRequestResult = { ok: true } | { ok: false; error: string };

export async function submitQuoteRequest(input: QuoteRequestInput): Promise<QuoteRequestResult> {
  const apiKey = process.env.MARKATE_API_KEY;

  if (!apiKey) {
    // No key configured yet — API access hasn't been approved/wired up.
    console.error(
      "MARKATE_API_KEY is not set. Request API access at https://www.markate.com/developer " +
        "or email api@markate.com, then add the key to your environment.",
    );
    return { ok: false, error: "not_configured" };
  }

  try {
    const res = await fetch(MARKATE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      // NOTE: field names are placeholders — confirm the exact request
      // schema against Markate's docs once access is granted, and adjust
      // this payload to match. Modeled on the fields their own public
      // widget collects (property type, name, phone, email, address,
      // suite/unit, message, preferred contact time, referral source).
      body: JSON.stringify({
        property_type: input.propertyType,
        name: input.name,
        phone: input.phone,
        email: input.email,
        address: input.address,
        suite_unit: input.suiteUnit,
        message: input.message,
        preferred_contact_time: input.preferredContactTime,
        hear_about_us: input.hearAboutUs,
        source: "website",
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`Markate lead submission failed (${res.status}): ${body}`);
      return { ok: false, error: "request_failed" };
    }

    return { ok: true };
  } catch (err) {
    console.error("Markate lead submission errored:", err);
    return { ok: false, error: "network_error" };
  }
}

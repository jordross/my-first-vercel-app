// Business details shown on the site. Anything left empty is hidden rather than
// rendered as a placeholder, so the site never shows fake contact info or credentials.

const env = (value: string | undefined) => (value && value.trim() ? value.trim() : undefined);

export const contact = {
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  phone: env(process.env.NEXT_PUBLIC_CONTACT_PHONE),
  formEndpoint: env(process.env.NEXT_PUBLIC_FORM_ENDPOINT),
};

export const phoneHref = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : undefined;

// Set once the lead partner agrees to be featured. Only state experience that can be verified.
export const leadPartner: {
  name: string;
  role: string;
  bio: string;
  photo?: string;
} | null = null;

// Only list credentials that are actually held, e.g. "BCLNA member", "Red Seal Landscape Horticulturist".
export const credentials: string[] = [];

// Flip to true once insurance certificates and the WorkSafeBC clearance letter exist.
export const complianceInPlace = false;

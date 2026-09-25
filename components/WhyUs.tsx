import { ShieldCheck, ClipboardCheck, Camera, UserCheck, Award } from "lucide-react";
import { complianceInPlace, credentials, leadPartner } from "@/lib/site";

const complianceText = complianceInPlace
  ? "Commercial general liability with your strata named as additional insured, WorkSafeBC clearance letter, and Vancouver business licence. Certificates are sent with our vendor package."
  : "Commercial general liability (strata named as additional insured), WorkSafeBC clearance and Vancouver business licensing are being finalized for January 2027 starts. Certificates are provided before any contract is signed.";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Paperwork your onboarding needs",
    description: complianceText,
  },
  {
    icon: ClipboardCheck,
    title: "Scopes council can compare",
    description:
      "Every proposal spells out visit frequency, what's included and excluded, irrigation, and snow priced separately, so councils can compare bids line by line and invoices hold no surprises.",
  },
  {
    icon: Camera,
    title: "Proof of every visit",
    description:
      "A photo log after each visit shows what was done and flags issues such as irrigation leaks, damaged plants or trip hazards, so you can answer resident questions without a site visit.",
  },
  {
    icon: UserCheck,
    title: "The owners on your site",
    description:
      "We're a small owner-run partnership, not a rotating subcontractor crew. One partner leads the work on site; the other is your single contact for scheduling, reporting and invoices across all your buildings.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">Why property managers choose Happy Bee</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Grounds contracts are won on reliability and paperwork, not the lowest hourly rate. We&apos;re built around both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex gap-4 p-6 bg-happy-green-50 rounded-lg border border-happy-green-100">
                <div className="flex-shrink-0">
                  <div className="bg-happy-green-600 text-white p-3 rounded-lg">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-happy-green-700 mb-2">{reason.title}</h3>
                  <p className="text-earth-700 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {leadPartner && (
          <div className="mt-12 max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 items-center sm:items-start bg-earth-50 border border-earth-200 rounded-lg p-8">
            {leadPartner.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={leadPartner.photo} alt={leadPartner.name} className="w-28 h-28 rounded-full object-cover flex-shrink-0" />
            )}
            <div>
              <p className="text-sm uppercase tracking-wider text-earth-600 mb-1">Who you&apos;ll work with</p>
              <h3 className="text-xl font-bold text-happy-green-700">
                {leadPartner.name} · <span className="font-medium text-earth-700">{leadPartner.role}</span>
              </h3>
              <p className="mt-2 text-earth-700 leading-relaxed">{leadPartner.bio}</p>
            </div>
          </div>
        )}

        {credentials.length > 0 && (
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {credentials.map((credential) => (
              <li key={credential} className="flex items-center gap-2 rounded-full border border-happy-green-200 bg-white px-4 py-2 text-sm font-medium text-happy-green-700">
                <Award className="w-4 h-4" aria-hidden="true" />
                {credential}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

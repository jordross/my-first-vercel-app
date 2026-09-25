import { ChevronDown } from "lucide-react";
import { complianceInPlace } from "@/lib/site";

const faqs = [
  {
    q: "Do you take residential yards?",
    a: "No. We only maintain common-property grounds for stratas, property-managed buildings and commercial sites. That focus is what keeps our routes and schedules dependable.",
  },
  {
    q: "Are you insured and WorkSafeBC registered?",
    a: complianceInPlace
      ? "Yes. We carry commercial general liability and can name your strata as additional insured, and we provide a current WorkSafeBC clearance letter. Both come with our vendor package."
      : "Our commercial general liability (with your strata named as additional insured), WorkSafeBC clearance and business licensing are being finalized for January 2027 starts. You'll receive the certificates before any contract is signed.",
  },
  {
    q: "How is pricing structured?",
    a: "Each site gets a written annual package based on its scope and visit frequency, not an open-ended hourly rate. Extra work outside the scope is quoted and approved in writing before we do it.",
  },
  {
    q: "Is snow removal included?",
    a: "Snow is quoted as a separate add-on so it never inflates your base maintenance price. You choose whether and how much coverage you need.",
  },
  {
    q: "How do you handle irrigation and water restrictions?",
    a: "We handle spring start-up, routine checks and adjustments, and set watering schedules to match current Metro Vancouver restriction stages. Leaks and broken heads are photographed and reported.",
  },
  {
    q: "What happens when a resident complains?",
    a: "Concerns come to one contact, get checked on the next visit or sooner if urgent, and are closed out in the photo log so you can show council what was done.",
  },
  {
    q: "What if we're not happy?",
    a: "Our agreements include a clear termination clause with the notice period written into the scope before you sign. If you'd rather test us first, start with a single building.",
  },
  {
    q: "When can you start?",
    a: "We're scheduling January 2027 starts for Vancouver sites now. Ask us about seasonal cleanups before then.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">Questions property managers ask</h2>
          <p className="text-lg text-earth-600">Don&apos;t see yours? Ask it in the form below.</p>
        </div>
        <div className="divide-y divide-earth-200 border-y border-earth-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-happy-green-700 [&::-webkit-details-marker]:hidden">
                {faq.q}
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-earth-600 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-earth-700 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

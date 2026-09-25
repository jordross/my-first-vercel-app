import { CheckCircle2, Calendar, FileCheck, Building } from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    title: "1. Vendor package",
    text: "Insurance and WorkSafeBC documents, a sample scope and a sample visit report. Everything your onboarding checklist asks for, in one email.",
  },
  {
    icon: Calendar,
    title: "2. Free site walk",
    text: "We walk the property with you or the council, then send a written scope and annual price council can compare against other bids.",
  },
  {
    icon: Building,
    title: "3. Start with one building",
    text: "Try us on a single Vancouver site. If we earn it, add more buildings; if not, you've risked one contract, not your portfolio.",
  },
];

const packageContents = [
  "Certificate of insurance with your strata named as additional insured",
  "WorkSafeBC clearance letter",
  "Sample scope: visit frequency, inclusions, exclusions, irrigation, separate snow pricing",
  "Sample photo visit report",
  "Contact details for one person handling all your buildings",
];

export default function ForPropertyManagers() {
  return (
    <section id="property-managers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">For property managers</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            We&apos;re taking on a limited number of Vancouver sites for January 2027 starts. Here&apos;s how getting started works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-lg border border-happy-green-100 bg-happy-green-50 p-6">
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-7 h-7 text-happy-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-happy-green-700 mb-2">{step.title}</h3>
                <p className="text-earth-700 text-sm leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-happy-green-50 to-earth-50 rounded-lg shadow-lg p-8 md:p-10 border border-happy-green-100">
          <h3 className="text-xl font-bold text-happy-green-700 mb-4">What&apos;s in the vendor package</h3>
          <ul className="space-y-3 text-earth-700">
            {packageContents.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-happy-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="text-center bg-happy-green-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-happy-green-700 transition-colors shadow"
            >
              Request the vendor package
            </a>
            <a
              href="#contact"
              className="text-center border-2 border-happy-green-600 text-happy-green-700 px-7 py-3.5 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Ask about a single-site pilot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";

const proofPoints = [
  "Commercial & strata grounds only",
  "Written scopes council can compare",
  "Photo log after every visit",
  "Single-site pilots welcome",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-happy-green-50 via-white to-earth-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-happy-green-100/70 px-4 py-1.5 text-sm font-semibold text-happy-green-700 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#e0a526]" aria-hidden="true" />
            Now quoting January 2027 starts · City of Vancouver
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-happy-green-700 tracking-tight leading-[1.1] mb-6">
            Commercial grounds maintenance your council won&apos;t have to chase.
          </h1>

          <p className="text-lg sm:text-xl text-earth-700 mb-8 max-w-2xl leading-relaxed">
            Happy Bee Landscaping maintains common-property grounds for stratas, property managers and
            commercial buildings in Metro Vancouver: clear written scopes, the same crew each visit, and a
            photo report after every visit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-happy-green-600 text-white px-7 py-4 rounded-lg font-semibold text-lg text-center hover:bg-happy-green-700 transition-colors shadow-lg"
            >
              Request our vendor package
            </a>
            <a
              href="#contact"
              className="border-2 border-happy-green-600 text-happy-green-700 px-7 py-4 rounded-lg font-semibold text-lg text-center hover:bg-happy-green-50 transition-colors"
            >
              Book a free site walk
            </a>
          </div>
          <p className="mt-4 text-sm text-earth-600">
            Budgets for 2027 are being set now. Get a comparable written scope before your AGM.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 rounded-lg bg-white/80 border border-earth-200 px-4 py-3 text-sm font-medium text-earth-800">
              <CheckCircle2 className="w-5 h-5 text-happy-green-600 flex-shrink-0" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

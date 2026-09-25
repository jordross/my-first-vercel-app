import { MapPin, ArrowRight } from "lucide-react";

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-gradient-to-br from-happy-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">
            Service Area
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Starting focused, expanding thoughtfully.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-happy-green-600 text-white p-3 rounded-full flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-happy-green-700 mb-3">
                  City of Vancouver (Primary Focus)
                </h3>
                <p className="text-earth-700 leading-relaxed mb-4">
                  Our routes are concentrated in the City of Vancouver, so crews are never far from your building.
                  That means dependable visit days, quicker responses to issues, and less travel time built into your price.
                </p>
              </div>
            </div>

            <div className="border-t border-earth-200 pt-8">
              <div className="flex items-start gap-4">
                <div className="bg-earth-100 text-earth-700 p-3 rounded-full flex-shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-earth-700 mb-3">
                    Metro Vancouver Corridor (Expanding)
                  </h3>
                  <p className="text-earth-700 leading-relaxed">
                    As capacity grows, we&apos;ll expand into Burnaby, New Westminster, and other Metro Vancouver 
                    communities. Multi-site property managers with buildings across the region are encouraged to reach out—we&apos;ll 
                    work with you to plan phased service expansion.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-happy-green-50 border-l-4 border-happy-green-600 p-6 rounded">
              <p className="text-earth-700 font-medium">
                <strong className="text-happy-green-700">Managing buildings outside Vancouver?</strong> Tell us where they are.
                We&apos;ll say honestly which sites we can serve well now and which we&apos;d add as our routes grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

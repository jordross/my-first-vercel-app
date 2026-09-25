import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-happy-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo inverted />
            </div>
            <p className="text-happy-green-100 leading-relaxed">
              Commercial grounds & property maintenance for stratas and property managers across Metro Vancouver.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-happy-green-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#who-we-serve" className="text-happy-green-100 hover:text-white transition-colors">
                  Who We Serve
                </a>
              </li>
              <li>
                <a href="#services" className="text-happy-green-100 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#property-managers" className="text-happy-green-100 hover:text-white transition-colors">
                  For Property Managers
                </a>
              </li>
              <li>
                <a href="#faq" className="text-happy-green-100 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-happy-green-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Service Area</h4>
            <ul className="space-y-2 text-happy-green-100">
              <li>City of Vancouver (Primary)</li>
              <li>Burnaby</li>
              <li>New Westminster</li>
              <li>Metro Vancouver Corridor</li>
            </ul>
            <div className="mt-6">
              <a 
                href="#contact" 
                className="inline-block bg-white text-happy-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-happy-green-50 transition-colors"
              >
                Request vendor package
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-happy-green-700 pt-8 text-center text-happy-green-100">
          <p className="mb-2">
            &copy; {currentYear} Happy Bee Landscaping. All rights reserved.
          </p>
          <p className="text-sm">
            Commercial landscape maintenance · Stratas & property managers · Metro Vancouver, BC
          </p>
        </div>
      </div>
    </footer>
  );
}

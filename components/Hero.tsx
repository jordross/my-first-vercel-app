import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-happy-green-50 via-white to-earth-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTVjM2EiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0xMiAyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="text-5xl" role="img" aria-label="bee">🐝</div>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-happy-green-700 mb-4 tracking-tight">
          Happy Bee Landscaping
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-earth-700 font-medium mb-6">
          Commercial Grounds & Property Maintenance
        </p>
        <p className="text-lg sm:text-xl text-earth-600 mb-8 max-w-2xl mx-auto">
          Serving stratas and property managers across Metro Vancouver
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
            Get a Quote
          </a>
          <a href="#services" className="border-2 border-happy-green-600 text-happy-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-50 transition-colors">
            Our Services
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#who-we-serve" className="text-happy-green-600" aria-label="Scroll down">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

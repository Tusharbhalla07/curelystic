import { ArrowRight, Play } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
              Next-Gen Healthcare SaaS Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Transform Patient Waiting Experience
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Streamline your healthcare facility with our intelligent **SaaS queue management**.
              Reduce wait times, improve patient satisfaction, and optimize staff efficiency directly from the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-semibold text-gray-900">Better</div>
                <div className="text-sm text-gray-600">Patient Flow</div>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-semibold text-gray-900">Faster</div>
                <div className="text-sm text-gray-600">Care Delivery</div>
              </div>
              <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
              <div>
                <div className="text-3xl font-semibold text-gray-900">Reduced</div>
                <div className="text-sm text-gray-600">Wait Times</div>
              </div>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[400px] border border-blue-200">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
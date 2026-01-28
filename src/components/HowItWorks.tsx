import { Calendar, Ticket, Armchair } from 'lucide-react';
import { JourneyAnimation } from './JourneyAnimation';

const steps = [
  {
    step: '01',
    icon: Calendar,
    title: 'Patient Booking',
    description: 'Patients book appointments online or at the facility through an intuitive interface.',
  },
  {
    step: '02',
    icon: Ticket,
    title: 'Token Generation',
    description: 'System automatically generates a digital token and sends confirmation with queue details.',
  },
  {
    step: '03',
    icon: Armchair,
    title: 'Calm Waiting Experience',
    description: 'Patients receive real-time updates and can wait comfortably anywhere with live queue tracking.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-semibold">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Three simple steps to transform your patient queue management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            return (
              <div key={index} className="relative group">
                {/* Connector Line - Hidden on mobile, shown on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-1/2 w-full h-0.5 bg-blue-200 z-0 group-hover:bg-blue-300 transition-colors">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-blue-100 h-full flex flex-col group/card">
                  {/* Step Number */}
                  <div className="text-6xl font-black text-blue-50 mb-6 group-hover:text-blue-100 transition-colors drop-shadow-sm">{item.step}</div>

                  {/* SVG Animation Container */}
                  <div className="bg-gradient-to-br from-blue-50/50 to-white rounded-xl mb-8 flex items-center justify-center min-h-[160px] border border-blue-50 shadow-inner group-hover/card:scale-105 transition-transform duration-500">
                    <JourneyAnimation step={item.step} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

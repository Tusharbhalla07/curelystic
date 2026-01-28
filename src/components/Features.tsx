import { Calendar, Clock, Bell, BarChart3, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Appointment Booking',
    description: 'Intelligent scheduling system that optimizes appointment slots and reduces no-shows with automated reminders.',
  },
  {
    icon: Clock,
    title: 'Real-Time Queue Updates',
    description: 'Keep patients informed with live wait time updates and queue position tracking through mobile notifications.',
  },
  {
    icon: Bell,
    title: 'Automated Notifications',
    description: 'Send SMS and email alerts to patients when their turn is approaching, reducing crowding in waiting areas.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights into patient flow, peak hours, and staff performance with comprehensive analytics dashboards.',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'We prioritize patient privacy with enterprise-grade encryption and secure data handling practices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Seamless experience across all devices, allowing patients to manage appointments from anywhere.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Everything You Need to Manage Patient Flow
          </h2>
          <p className="text-lg text-gray-600">
            A comprehensive **Enterprise SaaS platform** designed to streamline operations and enhance patient experience from the cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group bg-white"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

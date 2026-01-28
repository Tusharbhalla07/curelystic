import { BookingIcon, QueueIcon, CalendarIcon, BellIcon, HospitalIcon } from './icons';

export function IconShowcase() {
  const icons = [
    { Component: BookingIcon, name: 'Booking', description: 'Appointment scheduling' },
    { Component: QueueIcon, name: 'Queue', description: 'Patient flow management' },
    { Component: CalendarIcon, name: 'Calendar', description: 'Schedule tracking' },
    { Component: BellIcon, name: 'Notification', description: 'Real-time alerts' },
    { Component: HospitalIcon, name: 'Hospital', description: 'Healthcare facility' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-semibold">
            Built for Hospital Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Every interaction is designed with precision to serve your facility's needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {icons.map(({ Component, name, description }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <Component size={96} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

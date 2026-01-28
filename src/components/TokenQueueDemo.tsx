import { TokenQueueAnimation } from './TokenQueueAnimation';

export function TokenQueueDemo() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Real-Time Queue Management
          </h2>
          <p className="text-lg text-gray-600">
            Watch how our system seamlessly manages patient flow with automated token generation and queue updates.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <TokenQueueAnimation />
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              Instant
            </div>
            <div className="text-sm text-gray-600">
              Token Generation
            </div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">
              Live
            </div>
            <div className="text-sm text-gray-600">
              Queue Updates
            </div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              Smart
            </div>
            <div className="text-sm text-gray-600">
              Flow Management
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

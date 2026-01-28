import { motion } from 'motion/react';

export function Trust() {
    const points = [
        {
            label: "01",
            title: 'Radical Transparency',
            description: 'Unlike traditional systems, we show patients their exact position and live updates, reducing anxiety and uncertainty.',
            bg: 'from-blue-50 to-white'
        },
        {
            label: "02",
            title: 'Instant Integration',
            description: 'Our prototype is designed to work alongside your existing workflow without requiring complex IT overhaul.',
            bg: 'from-blue-50/50 to-white'
        },
        {
            label: "03",
            title: 'Empathy-Driven Tech',
            description: 'We focus on the "human experience" of waiting, not just the numbers. Every feature is tested for stress reduction.',
            bg: 'from-blue-50 to-white'
        },
        {
            label: "04",
            title: 'Honest Partnership',
            description: "As an early-stage startup, we offer dedicated support and custom tailoring for our first group of partners.",
            bg: 'from-blue-50/50 to-white'
        }
    ];

    return (
        <section id="trust" className="py-16 md:py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl text-gray-900 mb-6 font-semibold tracking-tight">
                        How we are <span className="text-blue-600">different</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                        Visionary healthcare leaders chose Curelystics for our unique SaaS approach to the patient experience—scalable, secure, and instant.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className={`group p-8 md:p-10 bg-gradient-to-b ${point.bg} border-r border-b border-gray-100 last:border-r-0 transition-all duration-500 hover:bg-blue-600 hover:text-white hover:-translate-y-2 hover:shadow-xl hover:z-10`}
                        >
                            <div className="relative mb-12">
                                <span className="text-6xl font-black text-blue-100 group-hover:text-blue-500/30 transition-colors duration-500 select-none">
                                    {point.label}
                                </span>
                                <div className="absolute bottom-0 left-0 w-8 h-1 bg-blue-600 group-hover:bg-white transition-colors duration-500"></div>
                            </div>

                            <h3 className="text-xl font-bold mb-4 transition-colors duration-500">
                                {point.title}
                            </h3>

                            <p className="text-gray-600 group-hover:text-blue-50 leading-relaxed text-sm transition-colors duration-500">
                                {point.description}
                            </p>

                            <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                                    <span className="text-xs">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold group"
                    >
                        Join our early-access partnership
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

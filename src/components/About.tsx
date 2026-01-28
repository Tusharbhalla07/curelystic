import { Target, Users, Sparkles } from 'lucide-react';
import { AboutAnimation } from './AboutAnimation';

export function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl text-gray-900 font-semibold leading-tight">
                            Pioneering the Future of <span className="text-blue-600">Patient Flow</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Curelystics Technologies is an early-stage startup born out of a simple observation:
                            the traditional waiting room experience is broken. We're on a mission to transform
                            how healthcare facilities manage their most valuable asset—time.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our prototype is built on the belief that technology should humanize healthcare,
                            not complicate it. By creating a seamless, transparent connection between patients
                            and providers, we're making "waiting" a relic of the past.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Target className="text-blue-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Our Mission</h4>
                                    <p className="text-sm text-gray-600">To eliminate physical waiting lines through intelligent automation.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Users className="text-blue-600" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">User First</h4>
                                    <p className="text-sm text-gray-600">Designed with both doctors and patients in mind for maximum ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-100 bg-white">
                            <AboutAnimation />
                            <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-lg flex items-center justify-center shadow-sm">
                                        <Sparkles size={20} className="text-blue-600" />
                                    </div>
                                    <span className="font-semibold tracking-wider uppercase text-xs text-blue-800 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">Innovation in Progress</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

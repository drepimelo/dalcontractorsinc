
import React from 'react';
import { SERVICES, TESTIMONIALS, PROJECTS } from '../constants';
import type { Page } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white text-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    poster="https://picsum.photos/seed/herobg/1920/1080"
                >
                    {/* Placeholder video */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-with-a-brewing-coffee-pot-34673-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-navy opacity-70 z-10"></div>
                <div className="relative z-20 px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-down">
                        Building & Remodeling Dreams in Watertown, MA
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        DAL Contractors Inc. delivers exceptional craftsmanship and reliable service for all your home renovation needs.
                    </p>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-lg animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        Get a Free Quote Today
                    </button>
                </div>
            </section>
            
            {/* Services Section */}
            <AnimatedSection className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Services</h2>
                    <p className="max-w-2xl mx-auto text-slate-600 mb-12">From concept to completion, we offer a comprehensive range of construction services.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SERVICES.map((service, index) => (
                            <div key={service.id} className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center`}>
                                <div className="inline-block p-4 bg-green/10 rounded-full mb-4">
                                    <service.icon className="h-8 w-8 text-green" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                                <p className="text-slate-600 text-sm mb-4">{service.shortDescription}</p>
                                <button onClick={() => setCurrentPage('services')} className="text-green font-semibold hover:underline">Learn More &rarr;</button>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Why Choose Us Section */}
            <AnimatedSection className="py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/seed/chooseus/800/600" alt="Construction workers planning" className="rounded-lg shadow-2xl"/>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Your Trusted Local Contractors</h2>
                        <p className="text-slate-600 mb-6">Choosing the right contractor is the most important step of any renovation project. At DAL Contractors, we're committed to making your experience smooth, transparent, and rewarding.</p>
                        <ul className="space-y-4">
                            <li className="flex items-start"><span className="text-green font-bold text-2xl mr-3">&check;</span><div><h4 className="font-bold">Local Expertise</h4><p className="text-slate-600">Deeply familiar with Watertown's building codes and community standards.</p></div></li>
                            <li className="flex items-start"><span className="text-green font-bold text-2xl mr-3">&check;</span><div><h4 className="font-bold">Quality Guarantee</h4><p className="text-slate-600">We use premium materials and stand by the quality of our work on every project.</p></div></li>
                            <li className="flex items-start"><span className="text-green font-bold text-2xl mr-3">&check;</span><div><h4 className="font-bold">Transparent Pricing</h4><p className="text-slate-600">Receive a detailed, honest quote with no hidden fees. We believe in clear communication.</p></div></li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>

            {/* Testimonials Section */}
            <AnimatedSection className="py-20 bg-navy text-white">
                <div className="container mx-auto px-6 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map(testimonial => (
                            <div key={testimonial.name} className="bg-white/10 p-8 rounded-lg text-left">
                                <p className="text-slate-200 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-sm text-slate-300">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </AnimatedSection>

            {/* Gallery Preview */}
            <AnimatedSection className="py-20">
                 <div className="container mx-auto px-6 text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Recent Work</h2>
                    <p className="max-w-2xl mx-auto text-slate-600 mb-12">A glimpse into the quality and craftsmanship we bring to every project.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {PROJECTS.slice(0, 4).map(project => (
                             <div key={project.id} className="overflow-hidden rounded-lg group">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setCurrentPage('gallery')} className="mt-12 bg-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-lg">
                        View Full Gallery
                    </button>
                 </div>
            </AnimatedSection>

            {/* CTA / Contact Form Section */}
            <AnimatedSection id="contact" className="py-20 bg-slate-50">
                 <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Ready to Start Your Project?</h2>
                        <p className="text-slate-600 mb-8">Contact us today for a free, no-obligation consultation and quote. Let's build something amazing together.</p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl">
                        <ContactForm />
                    </div>
                 </div>
            </AnimatedSection>
        </div>
    );
};

export default HomePage;

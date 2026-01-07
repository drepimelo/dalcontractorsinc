
import React from 'react';
import { SERVICES } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-navy pt-32 pb-16 text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Construction Services</h1>
                    <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">
                        Delivering comprehensive solutions with quality, integrity, and a commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <div className="divide-y divide-slate-100">
                {SERVICES.map((service, index) => (
                    <AnimatedSection key={service.id} className="py-16 lg:py-24">
                        <div className="container mx-auto px-6">
                            <div
                                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                                    index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''
                                }`}
                            >
                                <div className={`w-full ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                    <div className="inline-flex items-center bg-green/10 text-green py-1 px-3 rounded-full text-sm font-semibold mb-3">
                                        <service.icon className="h-5 w-5 mr-2" />
                                        {service.title}
                                    </div>
                                    <h2 className="text-3xl font-bold text-navy mb-4">{service.title}</h2>
                                    <p className="text-slate-600 mb-6">{service.longDescription}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {service.details.map(detail => (
                                            <li key={detail} className="flex items-center text-slate-600">
                                                <svg className="h-5 w-5 mr-2 text-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`w-full ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                                    <img src={service.image} alt={service.title} className="rounded-lg shadow-2xl object-cover w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
            
            {/* Contact CTA */}
            <AnimatedSection className="py-20 bg-slate-50">
                 <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Get a Quote for Your Project</h2>
                        <p className="text-slate-600 mb-8">Have a specific project in mind? Fill out the form below, and our team will get back to you with a detailed, no-pressure estimate.</p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl">
                        <ContactForm />
                    </div>
                 </div>
            </AnimatedSection>
        </div>
    );
};

export default ServicesPage;

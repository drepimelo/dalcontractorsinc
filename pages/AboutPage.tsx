
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <section className="bg-navy pt-32 pb-16 text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">About DAL Contractors Inc.</h1>
                    <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">
                        A Local Business Built on Trust, Quality, and Community.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <AnimatedSection className="py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-navy mb-4">Our Story</h2>
                        <p className="text-slate-600 mb-4">
                            Founded in Watertown with a passion for building and a commitment to our neighbors, DAL Contractors Inc. started as a small team dedicated to exceptional home renovations. For over 15 years, we've grown our business on a foundation of honest work, transparent communication, and a deep respect for the homes and families we work with.
                        </p>
                        <p className="text-slate-600">
                            We're not just builders; we're craftsmen, designers, and problem-solvers who take immense pride in turning your vision into a reality. Our roots in the community are deep, and we believe in building lasting relationships with our clients, one successful project at a time.
                        </p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/seed/aboutus/800/600" alt="Team of contractors" className="rounded-lg shadow-2xl"/>
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Our Values */}
            <AnimatedSection className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-navy mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="inline-block p-4 bg-green/10 rounded-full mb-4">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Quality Craftsmanship</h3>
                            <p className="text-slate-600">We use only the best materials and techniques to ensure our work is beautiful, durable, and built to last.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-block p-4 bg-green/10 rounded-full mb-4">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Client-First Approach</h3>
                            <p className="text-slate-600">Your satisfaction is our top priority. We listen, we collaborate, and we keep you informed every step of the way.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-block p-4 bg-green/10 rounded-full mb-4">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-2">Honesty & Integrity</h3>
                            <p className="text-slate-600">We operate with complete transparency, providing fair pricing and realistic timelines for every project we undertake.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

             {/* Meet the Team Placeholder */}
            <AnimatedSection className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-navy mb-12">Meet Our Leadership</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Team Member 1 */}
                        <div className="text-center">
                            <img src="https://picsum.photos/seed/team1/400/400" alt="Team member" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"/>
                            <h3 className="text-xl font-bold text-navy">David A. Lewis</h3>
                            <p className="text-green font-semibold">Founder & Lead Contractor</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="text-center">
                             <img src="https://picsum.photos/seed/team2/400/400" alt="Team member" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"/>
                            <h3 className="text-xl font-bold text-navy">Maria Garcia</h3>
                            <p className="text-green font-semibold">Project Manager</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="text-center">
                            <img src="https://picsum.photos/seed/team3/400/400" alt="Team member" className="w-40 h-40 mx-auto rounded-full mb-4 shadow-lg"/>
                            <h3 className="text-xl font-bold text-navy">Brian O'Connell</h3>
                            <p className="text-green font-semibold">Head of Operations</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default AboutPage;


import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import type { ProjectCategory } from '../types';
import AnimatedSection from '../components/AnimatedSection';

const CATEGORIES: ProjectCategory[] = ['All', 'Kitchens', 'Bathrooms', 'Additions', 'Exteriors'];

const GalleryPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') {
            return PROJECTS;
        }
        return PROJECTS.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div>
            {/* Page Header */}
            <section className="bg-navy pt-32 pb-16 text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
                    <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">
                        Explore a collection of our completed projects and find inspiration for your own home transformation.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <AnimatedSection className="py-16">
                <div className="container mx-auto px-6">
                    {/* Filters */}
                    <div className="flex justify-center flex-wrap gap-2 mb-12">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                    activeCategory === category
                                        ? 'bg-navy text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg relative">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <p className="text-sm">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default GalleryPage;

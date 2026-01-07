
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };
    
    if (isSubmitted) {
        return (
            <div className="text-center p-8 bg-green/10 rounded-lg">
                <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-slate-600">Your request has been sent. We'll be in touch with you shortly.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green focus:outline-none transition" />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green focus:outline-none transition" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green focus:outline-none transition" />
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green focus:outline-none transition bg-white">
                    <option value="">Select a Service</option>
                    {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                     <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <textarea name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green focus:outline-none transition"></textarea>
            </div>
            <div>
                <button type="submit" className="w-full bg-green text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105 shadow-lg">
                    Request My Free Quote
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

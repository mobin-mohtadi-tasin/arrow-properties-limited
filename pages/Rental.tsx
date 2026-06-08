import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Rental: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buy',
    location: '',
    bedrooms: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    console.log("Submitting Rental/Sales Inquiry:", formData);
    setTimeout(() => {
      if (formData.email.includes('@')) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: 'Buy', location: '', bedrooms: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 animate-fade-in" id="rental-sales-page">
      {/* Mini-Hero Page Banner */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        <div className="relative z-10 px-6 max-w-3xl mx-auto mt-10">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Exquisite Spaces</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1 mb-3 tracking-tight">Rental / Sales</h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Tailored Search</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Acquire Your Signature Address</h2>
            <p className="text-slate-600 mt-4 leading-relaxed max-w-xl mx-auto">
              Tell us your structural requirements, preferred sector, or rental budget. Our dedicated property consultants will match you with listings matching your parameters.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="name@domain.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="e.g. +880 1..." 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">I am looking to</label>
                  <select 
                    name="interest" 
                    value={formData.interest} 
                    onChange={handleChange} 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none"
                  >
                    <option value="Buy">Buy Premium Apartment</option>
                    <option value="Rent">Rent Luxury Apartment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Preferred Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    placeholder="e.g., Gulshan, Banani, Uttara" 
                    value={formData.location} 
                    onChange={handleChange} 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Number of Bedrooms</label>
                  <input 
                    type="number" 
                    name="bedrooms" 
                    placeholder="e.g., 3, 4" 
                    value={formData.bedrooms} 
                    onChange={handleChange} 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Additional Requirements or Comments</label>
                <textarea 
                  name="message" 
                  placeholder="Outline key size preferences, lake views, high floor, duplex or swimming facilities..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4} 
                  className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold py-4 px-10 rounded-xl shadow-lg shadow-blue-200 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50"
                >
                  {isSubmitting ? 'Consulting Portfolio...' : 'Submit Inquiry'}
                </button>
              </div>

              {submissionStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center font-semibold text-sm animate-fade-in">
                  🎉 Inquiry sent successfully! An elite sales representative will contact you with matched catalog slides shortly.
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-center font-semibold text-sm animate-fade-in">
                  ⚠️ An error occurred. Please review your email structure and try again.
                </div>
              )}
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Rental;

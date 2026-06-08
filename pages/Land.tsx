import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Land: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    size: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    console.log("Submitting Land Development Proposal:", formData);
    setTimeout(() => {
      if (formData.email.includes('@')) { 
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', size: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 animate-fade-in" id="land-page">
      {/* Mini-Hero Page Banner */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        <div className="relative z-10 px-6 max-w-3xl mx-auto mt-10">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Joint Ventures</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1 mb-3 tracking-tight">Land Development</h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Form Content */}
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs font-sans">Maximize Value</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Submit Your Property Proposal</h2>
            <p className="text-slate-600 mt-4 leading-relaxed max-w-xl mx-auto">
              Partner with Arrow Properties Limited to convert your high-potential acreage into a majestic landmark of luxury. Outsource structural integrity, licensing, and marketing to Dhaka's finest.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Your Name</label>
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
                    placeholder="e.g. +880 17..." 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Land Size</label>
                  <input 
                    type="text" 
                    name="size" 
                    placeholder="e.g., 5 Katha / 0.1 Acre" 
                    value={formData.size} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Land Address / Location</label>
                <input 
                  type="text" 
                  name="address" 
                  placeholder="Street details, Thana, District" 
                  value={formData.address} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400" 
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-2">Additional Description</label>
                <textarea 
                  name="message" 
                  placeholder="Outline key selling points or development terms..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  className="w-full bg-white text-slate-800 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-4 rounded-xl transition-all focus:outline-none placeholder-slate-400 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold py-4 px-10 rounded-xl shadow-lg shadow-blue-200 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying Proposal...
                    </>
                  ) : "Submit Partnership Proposal"}
                </button>
              </div>

              {submissionStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center font-semibold text-sm animate-fade-in flex items-center justify-center gap-2">
                  <span>✅</span> Thank you! Proposal submitted successfully. A joint-venture analyst will contact you within 24 hours.
                </div>
              )}
              {submissionStatus === 'error' && (
                <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-center font-semibold text-sm animate-fade-in flex items-center justify-center gap-2">
                  <span>❌</span> Something went wrong. Please check your contact details or email format and try again.
                </div>
              )}
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Land;

import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MailIcon, PhoneIcon } from '../components/icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

    console.log("Submitting General Inquiry:", formData);
    setTimeout(() => {
      if (formData.email.includes('@')) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 animate-fade-in" id="contact-page">
      {/* Mini-Hero Page Banner */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        <div className="relative z-10 px-6 max-w-3xl mx-auto mt-10">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Reach Out</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1 mb-3 tracking-tight">Contact Us</h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Content Info + Form */}
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Concierge Desk</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Get In Touch With Our Representatives</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              We are committed to providing top-quality customer support. Please feel free to call our hotlines, send an email, or leave a brief message.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Contact Details Card */}
          <AnimatedSection>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-lg h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Office HQ</span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-xl">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">Direct Hotlines</h3>
                      <p className="text-slate-600 text-base mt-0.5 font-medium">+880 123 456 7890</p>
                      <p className="text-slate-500 text-xs">Available Mon-Sat, 9AM to 6PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
                      <MailIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">Corporate Email</h3>
                      <p className="text-slate-600 text-base mt-0.5 font-medium">contact@arrowproperties.com</p>
                      <p className="text-slate-500 text-xs">Expect a response within 12 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-100 text-amber-700 rounded-xl text-xl leading-none">
                      📍
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm">Dhaka Head Office</h3>
                      <p className="text-slate-600 text-base mt-0.5 leading-relaxed font-medium">
                        123 Arrow Tower, Gulshan-2, Dhaka 1212, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Map Placeholder Image (Sleek & Visual) */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                  alt="City high-rise design map placeholder" 
                  className="w-full h-40 object-cover opacity-85 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Contact Form */}
          <AnimatedSection>
            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl h-full">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Enquiry Form</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-6">Leave a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-slate-50 text-slate-800 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-lg transition-all focus:outline-none placeholder-slate-400 text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="name@domain.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-slate-50 text-slate-800 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-lg transition-all focus:outline-none placeholder-slate-400 text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-1.5">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Topic of interest" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-slate-50 text-slate-800 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-lg transition-all focus:outline-none placeholder-slate-400 text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold text-xs uppercase tracking-wider mb-1.5">Your Message</label>
                  <textarea 
                    name="message" 
                    placeholder="How can we assist you today?" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={4} 
                    required
                    className="w-full bg-slate-50 text-slate-800 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-lg transition-all focus:outline-none placeholder-slate-400 resize-none text-sm"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold py-3 px-8 rounded-xl shadow-lg shadow-blue-100 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 text-xs uppercase tracking-wider disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </div>

                {submissionStatus === 'success' && (
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center font-semibold text-xs animate-fade-in">
                    📨 Inbound message loaded successfully. A representative will contact you shortly!
                  </div>
                )}
                {submissionStatus === 'error' && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-center font-semibold text-xs animate-fade-in">
                    ⚠️ Delivery failed. Please review your email structure.
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;

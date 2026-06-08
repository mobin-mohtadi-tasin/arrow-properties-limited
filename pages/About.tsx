import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 animate-fade-in" id="about-page">
      {/* Mini-Hero Page Banner */}
      <section 
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
        <div className="relative z-10 px-6 max-w-3xl mx-auto mt-10">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Architects of Tomorrow</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1 mb-3 tracking-tight">
            About Arrow Properties
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Mission Statement */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Our Blueprint</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Mission</h2>
              <div className="h-1.5 w-12 bg-amber-500 rounded-full"></div>
              
              <p className="text-slate-600 leading-relaxed text-base">
                To redefine urban living in Bangladesh by developing iconic, sustainable, and high-quality residential and commercial properties. We are committed to innovation, integrity, and customer satisfaction, ensuring every project we undertake becomes a lasting landmark of excellence.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                We believe in building more than just structures; we build communities where people can thrive. Our focus is on creating environments that are not only beautiful and functional but also foster a sense of belonging in Dhaka's fastest-growing sectors.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern collaborative office planning" 
                className="relative rounded-2xl shadow-xl w-full h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Core Values Section */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Built on Trust</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">Our Core Values</h2>
            <div className="h-1.5 w-16 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed mt-4">
              We hold ourselves to the highest ethical and professional indices inside Dhaka's property development sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Integrity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Upholding the highest standards of honesty and transparency in all land developments and transactions.</p>
            </div>
            
            <div className="p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Quality</h3>
              <p className="text-slate-600 text-sm leading-relaxed">An unwavering commitment to superior concrete mix designs, robust piling, and hand-finished premium materials.</p>
            </div>
            
            <div className="p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Innovation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Integrating smart home automation, energy-efficient fixtures, and modern structural shapes.</p>
            </div>
            
            <div className="p-8 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Customer Focus</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Putting landowner partnerships and apartment buyers at the core of our bespoke operations.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;

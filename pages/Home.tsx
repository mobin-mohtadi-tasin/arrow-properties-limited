import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import AnimatedSection from '../components/AnimatedSection';
import BuildingSlideshow from '../components/BuildingSlideshow';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 110);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize state right away
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-fade-in text-slate-800">
      {/* Hero Section */}
      <section
        className="relative min-h-[720px] sm:min-h-[800px] md:h-[90vh] md:min-h-[850px] pt-36 pb-28 sm:py-36 flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920')" }}
      >
        {/* Crisp Gradient Overlay for high-end cinematic contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-950/80"></div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          {/* Logo & Motto Transition Group */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 text-center select-none">
            {/* Centered Large Logo with smooth shrink/fly-up transition */}
            <motion.div
              animate={{
                opacity: isScrolled ? 0 : 1,
                y: isScrolled ? -60 : 0,
                scale: isScrolled ? 0.75 : 1,
                filter: isScrolled ? 'blur(4px)' : 'none'
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="bg-slate-950/45 backdrop-blur-md p-6 sm:p-8 mb-4 sm:mb-5 rounded-[2.5rem] border border-white/10 shadow-2xl w-56 sm:w-64 md:w-72 h-28 sm:h-36 md:h-40 pointer-events-auto flex items-center justify-center"
            >
              {!isScrolled && (
                <motion.div
                  layoutId="main-logo"
                  transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Logo isScrolled={false} className="h-16 sm:h-20 md:h-24 w-auto mx-auto" />
                </motion.div>
              )}
            </motion.div>

            {/* Aesthetic, minimal motto */}
            <motion.div
              animate={{
                opacity: isScrolled ? 0.15 : 1,
                y: isScrolled ? -10 : 0,
                scale: isScrolled ? 0.95 : 1
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] sm:text-xs font-extralight italic tracking-[0.45em] text-slate-400 uppercase font-serif">
                Signature of Sophistication
              </span>
              <div className="w-12 h-[1px] bg-white/20"></div>
            </motion.div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight text-white drop-shadow-lg">
            Crafting Exceptional Spaces, <br className="hidden md:inline" />Defining Elegant Lifestyles
          </h1>

          <p className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 text-slate-200/95 leading-relaxed font-light">
            <span className="font-semibold text-amber-400">Arrow Properties Limited</span> is Bangladesh's premier real estate developer, delivering ultra-modern residential and commercial landmarks built with superior craftsmanship and global standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Link
              to="/projects"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 block text-center"
              id="hero-explore-btn"
            >
              Explore Landmark Projects
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-xl border border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 block text-center"
              id="hero-contact-btn"
            >
              Consult an Expert
            </Link>
          </div>
        </div>

        {/* Hero Bottom Curve or Decorator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Trust Counters / Stat Section (Responsive vertical layout shifting on mobile, overlapping on desktop) */}
      <section className="relative z-20 mt-10 md:-mt-12 max-w-5xl mx-auto px-6 mb-20" id="trust-stats-section">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="pt-4 md:pt-0">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-600">12+</div>
            <div className="text-xs md:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wide">Years Excellence</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-600">150+</div>
            <div className="text-xs md:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wide">Premium Units</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-600 font-sans">100%</div>
            <div className="text-xs md:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wide">On-Time Handover</div>
          </div>
          <div className="pt-4 md:pt-0">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-600">4.9★</div>
            <div className="text-xs md:text-sm font-semibold text-slate-500 mt-2 uppercase tracking-wide">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Building Slideshow Section (Sample Constructed Buildings) */}
      <section className="py-16 bg-white overflow-hidden" id="constructed-buildings-section">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Exquisite Craftsmanship</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">
                Our Constructed Masterpieces
              </h2>
              <div className="h-1.5 w-16 bg-amber-500 mx-auto rounded-full mb-4"></div>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Take an exclusive tour of our completed high-rise landmarks across Dhaka. These award-winning architectural designs stand as pillars of robust engineering and sheer luxury.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <BuildingSlideshow />
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100" id="services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Tailored Offerings</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4 tracking-tight">Our Premium Real Estate Services</h2>
              <div className="h-1.5 w-16 bg-amber-500 mx-auto rounded-full mb-4"></div>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We present a comprehensive array of expert real estate and architectural solutions crafted around your unique residential and investment plans.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl mb-6">
                  🏗️
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Land Development</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  Form joint ventures with Arrow Properties Limited. We convert your high-potential plot into an iconic structural marvel, handling design, municipal permissions, and flawless execution.
                </p>
                <Link
                  to="/land"
                  className="text-blue-600 font-semibold mt-6 inline-flex items-center gap-1 group-hover:text-blue-800 transition-colors hover:underline"
                  id="srv-land-link"
                >
                  Partner With Us &rarr;
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl mb-6">
                  🔑
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Apartment Sales</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  Unlock key ownership of exquisite residences inside Dhaka's most desired zones. Complete with seismic-resistant engineering and luxurious materials.
                </p>
                <Link
                  to="/rental"
                  className="text-blue-600 font-semibold mt-6 inline-flex items-center gap-1 group-hover:text-blue-800 transition-colors hover:underline"
                  id="srv-buy-link"
                >
                  Inquire Now &rarr;
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-6">
                  🏢
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Rental Services</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  Browse modern ready-to-move corporate offices and cozy serviced penthouses featuring 100% backup power generator systems and private layouts.
                </p>
                <Link
                  to="/rental"
                  className="text-blue-600 font-semibold mt-6 inline-flex items-center gap-1 group-hover:text-blue-800 transition-colors hover:underline"
                  id="srv-rental-link"
                >
                  Find a Property &rarr;
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Vibrant, high energy) */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-gunmetal text-white" id="cta-info-bar">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="p-10 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
              {/* Subtle visual lighting grids in background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.15),transparent_50%)]"></div>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 relative z-10 leading-tight drop-shadow-md">
                Let's Build Your Dream Landmark
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
                Whether you own prime land in Dhaka or are looking for a reliable developer to bring customized design standards into a premier home, our consultants are ready to assist.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link
                  to="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3.5 px-8 rounded-xl shadow-lg transition-all duration-300 text-sm transform hover:-translate-y-0.5"
                  id="final-contact-btn"
                >
                  Schedule A Consultation
                </Link>
                <Link
                  to="/projects"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl border border-white/25 backdrop-blur-sm shadow-md transition-all duration-300 text-sm transform hover:-translate-y-0.5"
                  id="final-portfolio-btn"
                >
                  View Active Properties
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;

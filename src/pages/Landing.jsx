import React, { useEffect, useRef } from 'react';
import { FaUpload, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import SplitType from 'split-type';
import Navbar from '../components/Navbar';

const Landing = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const featuresRef = useRef(null);
  const overlayRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    // Split text for character animation
    const titleText = new SplitType(titleRef.current, { types: 'chars' });
    const subtitleText = new SplitType(subtitleRef.current, { types: 'words' });

    // Create main timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(buttonsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    )
    .fromTo(featuresRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      '-=0.5'
    );

    // Testimonial animation on scroll
    const testimonialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(entry.target,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      testimonialObserver.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        testimonialObserver.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-x-hidden" ref={heroRef}>
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob delay-2000"></div>
          <div className="absolute bottom-1/2 right-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob delay-4000"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <div ref={titleRef} className="mb-6">
              <h1 className="text-7xl md:text-8xl font-bold leading-tight">
                <span className="text-blue-400">Transform</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Your Resume
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div ref={subtitleRef} className="mb-12">
              <p className="text-2xl text-purple-200">
                Create a stunning portfolio in minutes
              </p>
            </div>

            {/* Action Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap gap-6 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                <FaUpload className="text-xl" />
                Upload Resume
              </button>
            </div>

            {/* Features Grid */}
            <div ref={featuresRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: "⚡", title: "Instant" },
                { icon: "🎨", title: "Custom" },
                { icon: "📱", title: "Responsive" },
                { icon: "🔄", title: "Easy Updates" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </section>

      {/* Testimonial Section */}
      <section ref={testimonialRef} className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                What People Say
              </h2>
              <p className="text-purple-200 text-lg">
                Join thousands of satisfied professionals who've transformed their careers
              </p>
            </div>

            {/* Testimonial Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Software Engineer",
                  image: "https://randomuser.me/api/portraits/women/1.jpg",
                  text: "This portfolio generator completely transformed my job search. The modern design and seamless experience helped me land my dream role!"
                },
                {
                  name: "Michael Chen",
                  role: "UX Designer",
                  image: "https://randomuser.me/api/portraits/men/2.jpg",
                  text: "I was amazed by how quickly I could create a professional portfolio. The customization options are exactly what I needed."
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-900/50 to-transparent"></div>
          <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] animate-blob delay-2000"></div>
        </div>

        {/* Top Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
          <svg className="relative w-full h-24 text-[#0A0118]" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 74">
            <path fill="currentColor" d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              {/* Brand Section */}
              <div className="col-span-1 md:col-span-5">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
                  Portfolio Generator
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
                  Transform your resume into a stunning portfolio website in minutes. Stand out from the crowd and showcase your work professionally.
                </p>
                <div className="flex gap-6">
                  {[
                    { icon: FaGithub, link: "#" },
                    { icon: FaTwitter, link: "#" },
                    { icon: FaLinkedin, link: "#" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="text-xl text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-span-1 md:col-span-3">
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-4">
                  {['Home', 'Features', 'Templates', 'Pricing'].map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="col-span-1 md:col-span-4">
                <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
                <ul className="space-y-4">
                  {[
                    { text: 'FAQ', link: '#' },
                    { text: 'Contact Us', link: '#' },
                    { text: 'Privacy Policy', link: '#' },
                    { text: 'Terms of Service', link: '#' }
                  ].map((item) => (
                    <li key={item.text}>
                      <a 
                        href={item.link} 
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="border-t border-white/10 pt-12 pb-8">
              <div className="max-w-2xl mx-auto text-center">
                <h4 className="text-xl font-semibold mb-4 text-white">Stay Updated</h4>
                <p className="text-gray-400 mb-6">Subscribe to our newsletter for updates and exclusive offers</p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400">
                {new Date().getFullYear()} Portfolio Generator. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

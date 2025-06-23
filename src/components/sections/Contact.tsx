import React, { useState } from 'react';
import { AnimatedElement } from '../animations/AnimatedElement';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <AnimatedElement type="fadeIn">
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="section-subtitle text-center mx-auto">
            Have a project in mind or want to learn more about our services? Reach out to us today.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedElement type="slideIn">
            <div className="bg-gray-50 p-8 rounded-lg shadow-card h-full">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-4">Thank You!</h3>
                  <p className="text-lg mb-8">
                    Your message has been received. Our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                      >
                        Your Name
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="subject"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                      >
                        Subject
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent peer"
                        placeholder=" "
                        required
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                      >
                        Your Message
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="slideUp" delay={0.2}>
            <div className="h-full flex flex-col">
              <div className="bg-primary-600 text-white p-8 rounded-lg shadow-card mb-6">
                <h3 className="text-xl font-bold mb-6">Corporate Headquarters</h3>
                <p className="mb-4">
                  Plot 123, Sector 5, CBD Belapur<br />
                  Navi Mumbai, Maharashtra 400614<br />
                  India
                </p>
                <p className="mb-4">
                  <strong>Phone:</strong> +91 (22) 6789 0123<br />
                  <strong>Email:</strong> info@lavitsolution.com
                </p>
                <p>
                  <strong>Hours:</strong> Monday - Friday: 9am - 6pm
                </p>
              </div>
              
              <div className="flex-grow bg-gray-200 rounded-lg overflow-hidden shadow-card">
                {/* Embedded map iframe would go here */}
                <div className="w-full h-full min-h-[300px] bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 p-4 text-center">
                    Interactive map would be embedded here<br />
                    (Google Maps or similar service)
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};
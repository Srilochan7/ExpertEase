import React, { useState } from 'react';
import {
  GraduationCap,
  Brain,
  Trophy,
  Layout,
  PenTool,
  Code
} from 'lucide-react';
import axios from 'axios';


const Hero = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('https://expert-ease-b.vercel.app/api/waitlist/', { email });

      if (response.data.success) {
        setSuccess(true);
        setEmail('');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id='section1 mt-12'>
      <div className="mb-12 bg-gray-500 ">
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            .animate-float-delayed {
              animation: float 3s ease-in-out infinite;
              animation-delay: 1.5s;
            }
          `}
        </style>
        <section className="relative  bg-gradient-to-b from-gray-50 to-white pb-1">
          {/* Grid Pattern - More responsive */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-50"></div>
          </div>

          {/* Floating Elements - Better mobile optimization */}
          <div className="absolute top-[40px] inset-0 overflow-hidden">
            {/* Academic/Learning Elements */}
            <div className="absolute top-8 left-2 sm:top-10 sm:left-4 md:top-20 md:left-10 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
              <GraduationCap className="w-5 h-5 sm:w-5 sm:h-5 md:w-8 md:h-8 text-blue-600" />
            </div>
            <div className="absolute top-20 left-1/16 sm:top-24 md:top-40 md:left-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center animate-float-delayed">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-green-600" />
            </div>
            <div className="hidden sm:flex absolute bottom-24 left-12 sm:bottom-32 sm:left-20 w-10 h-10 sm:w-14 sm:h-14 bg-yellow-100 rounded-lg items-center justify-center animate-float">
              <Trophy className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
            </div>

            {/* Tech/Development Elements */}
            <div className="absolute top-[40px] right-2 sm:top-12 sm:right-4 md:top-24 md:right-16 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-purple-100 rounded-lg flex items-center justify-center animate-float-delayed">
              <Layout className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-purple-600" />
            </div>
            <div className="absolute top-24 right-1/16 sm:top-32 md:top-48 md:right-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center animate-float">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-indigo-600" />
            </div>
            <div className="hidden sm:flex absolute bottom-32 right-12 sm:bottom-40 sm:right-20 w-10 h-10 sm:w-14 sm:h-14 bg-red-100 rounded-lg items-center justify-center animate-float-delayed">
              <PenTool className="w-5 h-5 sm:w-7 sm:h-7 text-red-600" />
            </div>

            {/* Center Elements */}
            <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-6 sm:gap-10 md:gap-20">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-blue-900/5 rounded-full blur-xl"></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-purple-900/5 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container top-[70px] mx-auto px-4 md:px-6 pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-32 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-gray-900">
                Expert Mentorship
                <br />
                <span className="relative inline-block">
                  That Delivers Results
                  <div className="absolute bottom-0.5 sm:bottom-1 md:bottom-2 left-0 w-full h-0.5 sm:h-1 md:h-2"></div>
                  <svg className='ml-7 -mt-1 w-[300px] h-7 md:w-[800px]' viewBox="0 0 500 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10 Q10 5, 100 10 T20 30 T300 19 T300 30 T600 49"
                      stroke="yellow" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
              </h1>

              {/* Waitlist Section */}
              <div className="max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-15">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl sm:shadow-2xl transition-shadow duration-300 ease-in-out">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Join Our Waitlist</h2>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                    Sign up to be the first to know when we launch. <br/>(For both mentors and learners)
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-xl mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gray-300 text-black placeholder-black text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    />
                    <button
                      type="submit"
                      className="relative inline-flex overflow-hidden rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 
                        text-sm sm:text-base font-medium text-black shadow-lg 
                        transition-all duration-300 ease-in-out
                        hover:text-white
                        disabled:opacity-50 disabled:cursor-not-allowed
                        before:absolute before:inset-0 
                        before:z-0 before:translate-x-[-100%] before:bg-gray-900
                        before:transition-transform before:duration-300 before:ease-in-out
                        hover:before:translate-x-0 text-center justify-center border-2"
                      disabled={loading}
                    >
                      <span className="text-md md:text-xl z-10 flex justify-center">
                        {loading ? "Processing..." : "Join Waitlist"}
                      </span>
                    </button>
                  </form>
                  {error && <p className="text-red-500 mt-2 text-sm sm:text-base">{error}</p>}
                  {success && <p className="text-green-500 mt-2 text-sm sm:text-base">Successfully added to waitlist!</p>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;

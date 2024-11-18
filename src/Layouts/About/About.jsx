import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
        <Helmet>
            <title>About</title>
        </Helmet>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">About Us</h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Welcome to NextStep Navigator, where we empower individuals to make informed career choices and achieve their professional goals. Our platform provides personalized counseling, expert advice, and comprehensive resources to help you navigate your career journey with confidence.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide accessible and reliable career guidance, enabling individuals to unlock their full potential and thrive in their chosen fields.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Approach</h2>
            <p className="text-gray-700">
              We combine expert insights, innovative tools, and a personalized approach to help you explore career options, set goals, and create actionable plans.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Team</h2>
            <p className="text-gray-700">
              Our team of career counselors, industry experts, and coaches is dedicated to supporting you every step of the way, from discovering your passions to landing your dream job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

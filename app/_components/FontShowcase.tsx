"use client";

import React from 'react';

const FontShowcase: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-heading text-center mb-12 text-gray-800 dark:text-white">
          Typography Showcase
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Playfair Display - Serif */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-serif font-bold text-gray-800 dark:text-white mb-4">
                Playfair Display
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Elegant serif font for headings</p>
              <div className="font-serif space-y-2">
                <p className="text-4xl font-bold text-blue-600">Aa Bb Cc</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-gray-500">Perfect for elegant titles and sophisticated headings</p>
              </div>
            </div>

            {/* Poppins - Heading */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-heading font-bold text-gray-800 dark:text-white mb-4">
                Poppins
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Modern geometric sans-serif</p>
              <div className="font-heading space-y-2">
                <p className="text-4xl font-bold text-green-600">Aa Bb Cc</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-gray-500">Clean and friendly for modern headings</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Inter - Body Text */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-sans font-bold text-gray-800 dark:text-white mb-4">
                Inter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Highly readable body text</p>
              <div className="font-sans space-y-2">
                <p className="text-4xl font-bold text-purple-600">Aa Bb Cc</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                <p className="text-sm text-gray-500">Optimized for digital interfaces and long-form reading</p>
              </div>
            </div>

            {/* JetBrains Mono - Code */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-mono font-bold text-gray-800 dark:text-white mb-4">
                JetBrains Mono
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Developer-friendly monospace</p>
              <div className="font-mono space-y-2">
                <p className="text-4xl font-bold text-orange-600">Aa Bb Cc</p>
                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                <div className="bg-gray-900 dark:bg-black text-green-400 p-4 rounded-lg text-sm">
                  <code>
                    {`const greeting = "Hello, World!";`}<br/>
                    {`console.log(greeting);`}<br/>
                    {`// Perfect for code blocks`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Font Usage Examples */}
        <div className="mt-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-800 dark:text-white mb-8">
            Font Combination Examples
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-2xl font-serif font-bold text-blue-600 mb-2">Elegant</h4>
              <h5 className="text-lg font-heading font-semibold text-gray-700 dark:text-gray-300 mb-2">Modern Touch</h5>
              <p className="font-sans text-gray-600 dark:text-gray-400">Clean body text for readability</p>
              <code className="font-mono text-sm text-green-600 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font-serif + font-heading</code>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl font-heading font-bold text-green-600 mb-2">Professional</h4>
              <h5 className="text-lg font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">Business Ready</h5>
              <p className="font-sans text-gray-600 dark:text-gray-400">Corporate-friendly design</p>
              <code className="font-mono text-sm text-green-600 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font-heading + font-sans</code>
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl font-heading font-bold text-purple-600 mb-2">Technical</h4>
              <h5 className="text-lg font-sans font-medium text-gray-700 dark:text-gray-300 mb-2">Developer Focus</h5>
              <p className="font-mono text-gray-600 dark:text-gray-400 text-sm">Perfect for dev portfolios</p>
              <code className="font-mono text-sm text-green-600 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">font-heading + font-mono</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FontShowcase;

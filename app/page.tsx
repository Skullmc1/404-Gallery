'use client';

import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ScrollContainer from './components/ScrollContainer';

// Main Page Component
const Page: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <main className="absolute inset-0">
        <ScrollContainer scrollsNeeded={4}>
          <Hero />
          <Gallery />
          <Footer />
        </ScrollContainer>
      </main>
    </div>
  );
};

export default Page;
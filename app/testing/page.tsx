'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4 text-center">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className="text-6xl md:text-8xl font-bold text-red-600 mb-4">
          <span className="inline-block transform rotate-12">!</span>
          <span className="inline-block transform -rotate-6">4</span>
          <span className="inline-block transform rotate-12">0</span>
          <span className="inline-block transform -rotate-6">4</span>
        </div>
      </motion.div>

      <motion.h1
        className="text-3xl md:text-4xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        This link is on our dev team's to-do list.
      </motion.h1>

      <motion.p
        className="text-md md:text-lg text-gray-600 mb-6 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        It seems we've misplaced this page. We're on it! In the meantime, you can help us by letting us know what you were looking for.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Go Home
        </Link>
        <Link href="/contact" className="px-6 py-3 border-2 border-gray-300 text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Report Broken Link
        </Link>
      </motion.div>
    </div>
  );
}
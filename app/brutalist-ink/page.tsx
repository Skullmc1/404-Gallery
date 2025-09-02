import React from 'react';
import { motion } from 'framer-motion';

const App = () => {

  const dotCount = 10;

  const generateRandomDotPosition = () => ({
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    scale: [1, 1.2, 0.9, 1],
    rotate: [0, 360],
  });

  const dots = [...Array(dotCount)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-10 h-10 md:w-16 md:h-16 rounded-full bg-black shadow-lg"
      initial={{ 
        x: Math.random() * window.innerWidth - window.innerWidth / 2, 
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
      }}
      animate={{
        ...generateRandomDotPosition(),
      }}
      transition={{
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.3,
        ease: "easeInOut",
      }}
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  ));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4 font-inter text-center overflow-hidden relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Tilt+Prism&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f9fafb;
          }
          
          .gooey-effect {
            filter: url("#gooey");
          }
        `}
      </style>
      
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
          </filter>
        </defs>
      </svg>
      
      <div className="absolute inset-0 z-0 gooey-effect">
        {dots}
      </div>
      
      <div className="relative z-10 p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-9xl md:text-[15rem] font-extrabold text-black select-none font-['Tilt_Prism']"
        >
          404
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6"
        >
          Page Not Found
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-lg text-gray-500 mb-8 max-w-md mx-auto"
        >
          It seems the page you were looking for doesn't exist. Let's get you back on track.
        </motion.p>
        <motion.a 
          href="#"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 1.1 }}
          className="inline-block px-8 py-3 bg-black text-white rounded-full font-bold shadow-lg transition-transform transform hover:scale-105"
        >
          Go Home
        </motion.a>
      </div>
      
    </div>
  );
};

export default App;
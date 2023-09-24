"use client"
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { AppProps } from 'next/app';
import Navbar from '@/components/custom/navbar';
import Footer from '../components/custom/footer';

export default function Home({ Component, pageProps }: AppProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = '/assets/1.png';
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 via-white to-pink-400 flex justify-center h-[30vh]">
        <Navbar />
      </div>
      <div className="bg-gradient-to-r from-blue-400 via-white to-pink-400 min-h-screen">
        <div className="flex justify-between items-center h-[40vh] mx-6">
          <div className="text-3xl font-bold text-blue">
            <Typewriter
              options={{
                cursor: '', // Set the cursor to an empty string to hide it
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Boost your customer support')
                  .pauseFor(100)
                  .typeString(' productivity with ChatGPT-4')
                  .pauseFor(200)
                  .callFunction(() => {
                    // After typing is completed, hide the cursor
                  
                  })
                  .start();
              }}
            />
          </div>
          <div className={`transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img src="/assets/1.png" alt="Your Image" className="h-[60vh]" />
          </div>
         
         
      </div>
    
        </div>
      <Footer />
    </div>
  );
}

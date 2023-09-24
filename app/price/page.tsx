"use client"
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { AppProps } from 'next/app';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
import {Button, buttonVariants } from "@/components/ui/button"

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
      <div className="bg-gradient-to-r from-orange-400 via-white to-red-400 min-h-screen">
      <div className="text-3xl font-bold text-center">
  Pricing Plans
</div>
        <div className="flex justify-center mt-6 space-x-6">
        
          <div className="bg-white rounded-lg p-6 shadow-md w-80">
            <div className="text-xl font-bold text-blue mb-4">Basic</div>
            <div className="text-sm text-gray-600">Free Beta</div>
            <div className="text-3xl font-bold text-blue mt-4">$29.00/mo</div>
            <ul className="mt-4 list-disc list-inside">
              <li>Up to 1000 AI-generated responses</li>
              <li>0.20 USD per each additional auto response</li>
              <li>Up to 100 Guide AI responses</li>
              <li>Free trial</li>
            
              <Button variant="outline" className="rounded-full bg-blue-400 text-white hover:bg-blue-500">
        Click here
      </Button>
            </ul>
           
          </div>
          

          {/* Advanced Plan */}
          <div className="bg-white rounded-lg p-6 shadow-md w-80">
            <div className="text-xl font-bold text-blue mb-4">Advanced</div>
            <div className="text-sm text-gray-600">Free Beta</div>
            <div className="text-3xl font-bold text-blue mt-4">$69.00 USD/mo</div>
            <ul className="mt-4 list-disc list-inside">
              <li>Up to 5000 AI-generated responses</li>
              <li>0.15 USD per each additional auto response</li>
              <li>Up to 500 Guide AI responses</li>
              <li>General Ticket Management</li>
              <li>Multilanguage</li>
              <li>Free trial</li>
            </ul>
            <Button variant="outline" className="rounded-full bg-blue-400 text-white hover:bg-blue-500">
        Click here
      </Button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white rounded-lg p-6 shadow-md w-80">
            <div className="text-xl font-bold text-blue mb-4">Professional</div>
            <div className="text-sm text-gray-600">Custom</div>
            <div className="text-3xl font-bold text-blue mt-4">Custom/mo</div>
            <ul className="mt-4 list-disc list-inside">
              <li>Custom number of AI-generated responses</li>
              <li>Custom price per each additional auto response</li>
              <li>Custom number of guide AI responses</li>
              <li>General Ticket Management</li>
              <li>Multilanguage + Personal Manager</li>
              <li>Feature new</li>
              <li>Free trial</li>
              
         
            </ul>
            <Button variant="outline" className="rounded-full bg-blue-400 text-white hover:bg-blue-500">
        Click here
      </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

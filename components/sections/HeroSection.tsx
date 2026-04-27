'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { brandAssets } from '@/lib/site-data';

const heroBullets = [
  'Tailored Solutions',
  'Industry Insights',
  'Expert Guidance',
];

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-[#f2f7ff] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)]">
          {/* Background Decorative Blur */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-100/50 to-transparent blur-3xl" />
          
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
            <div className="px-8 py-10 sm:px-12 lg:py-16 lg:pl-16 lg:pr-0">
              <div className="space-y-6">
                <div className="space-y-5">
                  <h1 className="font-display text-[2.8rem] font-bold tracking-tight text-slate-900 sm:text-[3.5rem] sm:leading-[1.1] xl:text-[4rem]">
                    Next-Gen <span className="text-[#1a73e8]">Expertise</span>
                    <br />
                    For Your <span className="text-[#1a73e8]">Enterprise</span>
                  </h1>

                  <p className="max-w-xl text-[1.1rem] leading-relaxed text-slate-700 sm:text-[1.2rem]">
                    Cultivate high-performance teams through expert learning.
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {heroBullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2">
                      <CheckCircle2 strokeWidth={2.5} className="h-5 w-5 text-emerald-500" />
                      <span className="text-[14px] font-bold text-slate-800 xl:text-[15px]">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button className="rounded-[12px] bg-[#1a73e8] px-10 py-4 text-[17px] font-bold text-white shadow-[0_10px_20px_rgba(26,115,232,0.3)] transition-all hover:scale-[1.03] hover:bg-[#1557b0] active:scale-[0.98]">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] lg:h-full lg:min-h-[480px] w-full self-end transform transition-transform translate-y-[-10px]">
              <Image
                src={brandAssets.hero}
                alt="Accredian professionals"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
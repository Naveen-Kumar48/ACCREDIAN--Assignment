import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {/* Logo and Socials */}
          <div className="space-y-4">
            <Image 
              src="/Accredian/logo.webp" 
              alt="Accredian Logo" 
              width={140} 
              height={40} 
              className="h-auto w-36"
            />
            <div className="flex items-center gap-3">
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (4).svg" alt="Facebook" className="h-4 w-4" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (3).svg" alt="LinkedIn" className="h-4 w-4" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (2).svg" alt="Twitter" className="h-4 w-4" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default (1).svg" alt="Instagram" className="h-4 w-4" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-70">
                <img src="/Accredian/default.svg" alt="YouTube" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Enquire Button Section - Matches user reference image */}
          <div className="flex flex-col items-center gap-3 sm:items-end w-full lg:w-auto">
            <Button 
              href="#lead-form" 
              className="h-11 w-full rounded-[12px] border-none bg-[#1a73e8] px-10 text-[16px] font-bold text-white transition-all hover:bg-[#1557b0] active:scale-95 sm:w-auto shadow-none"
            >
              Enquire Now
            </Button>
            <p className="text-[14px] font-medium text-slate-600 sm:pr-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-6 h-[1px] w-full bg-slate-200" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-md font-bold text-slate-950">Accredian</h3>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#" className="hover:text-[#1a73e8]">About</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Blog</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Why Accredian</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-md font-bold text-slate-950">Contact Us</h3>
            <div className="space-y-3 text-[14px] leading-relaxed">
              <p>Email: <a href="mailto:enterprise@accredian.com" className="text-[#1a73e8] hover:underline font-semibold">enterprise@accredian.com</a></p>
              <div className="max-w-md text-slate-500">
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-[12px] font-medium text-slate-400">
          <p>© {currentYear} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
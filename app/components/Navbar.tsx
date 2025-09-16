'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Cosmic Verify</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Verify
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/verify/all-in-one" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    All-in-One Verification
                  </Link>
                  <Link href="/verify/aadhaar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Aadhaar Verification
                  </Link>
                  <Link href="/verify/pan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    PAN Verification
                  </Link>
                  <Link href="/verify/gst" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    GST Verification
                  </Link>
                  <Link href="/verify/passport" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Passport Verification
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/verify/all-in-one" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              All-in-One Verification
            </Link>
            <Link href="/verify/aadhaar" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Aadhaar Verification
            </Link>
            <Link href="/verify/pan" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              PAN Verification
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/dashboard" className="block px-3 py-2 bg-blue-600 text-white rounded-md mx-3">
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
import Link from 'next/link';
import { Shield, CheckCircle, Zap, Lock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Secure Document
            <span className="text-blue-600"> Verification</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Verify Aadhaar, PAN, GST, Passport, and other documents instantly with our 
            secure, reliable, and lightning-fast verification platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/verify/all-in-one" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Verification
            </Link>
            <Link 
              href="/pricing" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">99.9% Accuracy</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="h-6 w-6 text-yellow-500" />
              <span className="text-gray-700">Instant Results</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Lock className="h-6 w-6 text-blue-500" />
              <span className="text-gray-700">Bank-Grade Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
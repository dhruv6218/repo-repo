'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield, CheckCircle, AlertCircle, Building2 } from 'lucide-react';

export default function CINVerification() {
  const [formData, setFormData] = useState({
    cinNumber: '',
    companyName: ''
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    setTimeout(() => {
      const mockResult = {
        status: 'success',
        verified: true,
        details: {
          companyName: formData.companyName || 'Tech Solutions Private Limited',
          cinNumber: formData.cinNumber.toUpperCase(),
          incorporationDate: '12/03/2015',
          companyStatus: 'Active',
          companyCategory: 'Company limited by shares',
          authorizedCapital: '₹10,00,000',
          paidUpCapital: '₹5,00,000',
          registeredOffice: 'Mumbai, Maharashtra',
          verifiedAt: new Date().toISOString()
        }
      };
      
      setVerificationResult(mockResult);
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">CIN Verification</h1>
          <p className="text-gray-600">
            Verify Corporate Identification Number details instantly.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {!verificationResult ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CIN Number
                </label>
                <input
                  type="text"
                  required
                  maxLength={21}
                  placeholder="Enter 21-character CIN number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                  value={formData.cinNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, cinNumber: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter company name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                />
              </div>
              
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isVerifying ? 'Verifying...' : 'Verify CIN'}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              {verificationResult.verified ? (
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              ) : (
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
              )}
              
              <h2 className="text-2xl font-bold">
                {verificationResult.verified ? 'Verification Successful' : 'Verification Failed'}
              </h2>
              
              {verificationResult.verified && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-left">
                  <h3 className="font-semibold text-green-800 mb-4">Verified Details:</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <p><strong>Company Name:</strong> {verificationResult.details.companyName}</p>
                    <p><strong>CIN Number:</strong> {verificationResult.details.cinNumber}</p>
                    <p><strong>Incorporation Date:</strong> {verificationResult.details.incorporationDate}</p>
                    <p><strong>Company Status:</strong> {verificationResult.details.companyStatus}</p>
                    <p><strong>Company Category:</strong> {verificationResult.details.companyCategory}</p>
                    <p><strong>Authorized Capital:</strong> {verificationResult.details.authorizedCapital}</p>
                    <p><strong>Paid-up Capital:</strong> {verificationResult.details.paidUpCapital}</p>
                    <p><strong>Registered Office:</strong> {verificationResult.details.registeredOffice}</p>
                    <p><strong>Verified At:</strong> {new Date(verificationResult.details.verifiedAt).toLocaleString()}</p>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => {
                  setVerificationResult(null);
                  setFormData({ cinNumber: '', companyName: '' });
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Verify Another CIN
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield, CheckCircle, AlertCircle, FileText } from 'lucide-react';

export default function PANVerification() {
  const [formData, setFormData] = useState({
    panNumber: '',
    fullName: ''
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        status: 'success',
        verified: true,
        details: {
          name: formData.fullName || 'John Doe',
          panNumber: formData.panNumber.toUpperCase(),
          category: 'Individual',
          status: 'Active',
          lastUpdated: '15/03/2024',
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
          <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">PAN Verification</h1>
          <p className="text-gray-600">
            Verify PAN card details instantly with our secure verification system.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {!verificationResult ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PAN Number
                </label>
                <input
                  type="text"
                  required
                  maxLength={10}
                  placeholder="Enter 10-character PAN number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                  value={formData.panNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, panNumber: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name (as per PAN)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                />
              </div>
              
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isVerifying ? 'Verifying...' : 'Verify PAN'}
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
                    <p><strong>Name:</strong> {verificationResult.details.name}</p>
                    <p><strong>PAN Number:</strong> {verificationResult.details.panNumber}</p>
                    <p><strong>Category:</strong> {verificationResult.details.category}</p>
                    <p><strong>Status:</strong> {verificationResult.details.status}</p>
                    <p><strong>Last Updated:</strong> {verificationResult.details.lastUpdated}</p>
                    <p><strong>Verified At:</strong> {new Date(verificationResult.details.verifiedAt).toLocaleString()}</p>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => {
                  setVerificationResult(null);
                  setFormData({ panNumber: '', fullName: '' });
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Verify Another PAN
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield, CheckCircle, AlertCircle, UserCheck } from 'lucide-react';

export default function DINVerification() {
  const [formData, setFormData] = useState({
    dinNumber: '',
    directorName: ''
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
          directorName: formData.directorName || 'Rajesh Kumar',
          dinNumber: formData.dinNumber,
          allotmentDate: '25/08/2018',
          status: 'Active',
          surrenderDate: null,
          companies: [
            'Tech Solutions Private Limited',
            'Digital Innovations Pvt Ltd'
          ],
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
          <UserCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">DIN Verification</h1>
          <p className="text-gray-600">
            Verify Director Identification Number details instantly.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {!verificationResult ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  DIN Number
                </label>
                <input
                  type="text"
                  required
                  maxLength={8}
                  placeholder="Enter 8-digit DIN number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.dinNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, dinNumber: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Director Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter director name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.directorName}
                  onChange={(e) => setFormData(prev => ({ ...prev, directorName: e.target.value }))}
                />
              </div>
              
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isVerifying ? 'Verifying...' : 'Verify DIN'}
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
                    <p><strong>Director Name:</strong> {verificationResult.details.directorName}</p>
                    <p><strong>DIN Number:</strong> {verificationResult.details.dinNumber}</p>
                    <p><strong>Allotment Date:</strong> {verificationResult.details.allotmentDate}</p>
                    <p><strong>Status:</strong> {verificationResult.details.status}</p>
                    <p><strong>Associated Companies:</strong></p>
                    <ul className="ml-4 list-disc">
                      {verificationResult.details.companies.map((company: string, index: number) => (
                        <li key={index}>{company}</li>
                      ))}
                    </ul>
                    <p><strong>Verified At:</strong> {new Date(verificationResult.details.verifiedAt).toLocaleString()}</p>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => {
                  setVerificationResult(null);
                  setFormData({ dinNumber: '', directorName: '' });
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Verify Another DIN
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
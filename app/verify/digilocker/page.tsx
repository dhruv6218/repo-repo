'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield, CheckCircle, AlertCircle, Smartphone, FileText, CreditCard, User } from 'lucide-react';

export default function DigiLockerVerification() {
  const [selectedDocument, setSelectedDocument] = useState('');
  const [formData, setFormData] = useState({
    documentNumber: '',
    fullName: '',
    dateOfBirth: ''
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const documentTypes = [
    { id: 'aadhaar', name: 'Aadhaar Card', icon: CreditCard },
    { id: 'pan', name: 'PAN Card', icon: FileText },
    { id: 'driving_license', name: 'Driving License', icon: User },
    { id: 'voter_id', name: 'Voter ID', icon: Shield }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    setTimeout(() => {
      const mockResult = {
        status: 'success',
        verified: true,
        details: {
          name: formData.fullName || 'John Doe',
          documentType: selectedDocument,
          documentNumber: formData.documentNumber,
          dateOfBirth: formData.dateOfBirth || '01/01/1990',
          issueDate: '15/06/2020',
          status: 'Valid',
          issuer: 'Government of India',
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
          <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">DigiLocker Verification</h1>
          <p className="text-gray-600">
            Verify documents from DigiLocker instantly with our secure verification system.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {!verificationResult ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {documentTypes.map((doc) => {
                    const Icon = doc.icon;
                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setSelectedDocument(doc.id)}
                        className={`p-3 border rounded-lg flex items-center space-x-2 transition-colors ${
                          selectedDocument === doc.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{doc.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter document number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.documentNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, documentNumber: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name (as per Document)
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                />
              </div>
              
              <button
                type="submit"
                disabled={isVerifying || !selectedDocument}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isVerifying ? 'Verifying...' : 'Verify Document'}
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
                    <p><strong>Document Type:</strong> {verificationResult.details.documentType.replace('_', ' ').toUpperCase()}</p>
                    <p><strong>Document Number:</strong> {verificationResult.details.documentNumber}</p>
                    <p><strong>Date of Birth:</strong> {verificationResult.details.dateOfBirth}</p>
                    <p><strong>Issue Date:</strong> {verificationResult.details.issueDate}</p>
                    <p><strong>Status:</strong> {verificationResult.details.status}</p>
                    <p><strong>Issuer:</strong> {verificationResult.details.issuer}</p>
                    <p><strong>Verified At:</strong> {new Date(verificationResult.details.verifiedAt).toLocaleString()}</p>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => {
                  setVerificationResult(null);
                  setFormData({ documentNumber: '', fullName: '', dateOfBirth: '' });
                  setSelectedDocument('');
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Verify Another Document
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';
import { Shield, CheckCircle, AlertCircle, FileText, User, Building } from 'lucide-react';

const verificationTypes = [
  { id: 'aadhaar', name: 'Aadhaar', icon: User, description: 'Verify Aadhaar card details' },
  { id: 'pan', name: 'PAN', icon: FileText, description: 'Verify PAN card information' },
  { id: 'gst', name: 'GST', icon: Building, description: 'Verify GST registration' },
  { id: 'passport', name: 'Passport', icon: FileText, description: 'Verify passport details' },
  { id: 'cin', name: 'CIN', icon: Building, description: 'Verify Corporate Identity Number' },
  { id: 'din', name: 'DIN', icon: User, description: 'Verify Director Identification Number' }
];

const steps = ['Select Type', 'Enter Details', 'Verify', 'Results'];

export default function AllInOneVerification() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setCurrentStep(1);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVerification = async () => {
    setIsVerifying(true);
    setCurrentStep(2);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        status: 'success',
        verified: true,
        details: {
          name: formData.name || 'John Doe',
          number: formData.number || 'XXXXX1234',
          type: selectedType.toUpperCase(),
          verifiedAt: new Date().toISOString(),
          confidence: 98.5
        }
      };
      
      setVerificationResult(mockResult);
      setIsVerifying(false);
      setCurrentStep(3);
    }, 3000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">Select Verification Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {verificationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                  >
                    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="max-w-md mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">
              Enter {selectedType.toUpperCase()} Details
            </h2>
            
            {selectedType === 'aadhaar' && (
              <>
                <input
                  type="text"
                  placeholder="Aadhaar Number (12 digits)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleInputChange('number', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </>
            )}
            
            {selectedType === 'pan' && (
              <>
                <input
                  type="text"
                  placeholder="PAN Number (10 characters)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleInputChange('number', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </>
            )}
            
            {selectedType === 'gst' && (
              <>
                <input
                  type="text"
                  placeholder="GST Number (15 characters)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleInputChange('number', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </>
            )}
            
            <button
              onClick={handleVerification}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Verify {selectedType.toUpperCase()}
            </button>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <h2 className="text-2xl font-bold">Verifying...</h2>
            <p className="text-gray-600">Please wait while we verify your {selectedType.toUpperCase()} details.</p>
          </div>
        );

      case 3:
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              {verificationResult?.verified ? (
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              ) : (
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              )}
              
              <h2 className="text-2xl font-bold mb-4">
                {verificationResult?.verified ? 'Verification Successful' : 'Verification Failed'}
              </h2>
              
              {verificationResult?.verified && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
                  <h3 className="font-semibold text-green-800 mb-2">Verified Details:</h3>
                  <div className="space-y-1 text-sm text-green-700">
                    <p><strong>Name:</strong> {verificationResult.details.name}</p>
                    <p><strong>Number:</strong> {verificationResult.details.number}</p>
                    <p><strong>Type:</strong> {verificationResult.details.type}</p>
                    <p><strong>Confidence:</strong> {verificationResult.details.confidence}%</p>
                    <p><strong>Verified At:</strong> {new Date(verificationResult.details.verifiedAt).toLocaleString()}</p>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => {
                setCurrentStep(0);
                setSelectedType('');
                setFormData({});
                setVerificationResult(null);
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Verify Another Document
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All-in-One Verification</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Verify multiple document types in one place. Our comprehensive verification 
            system supports Aadhaar, PAN, GST, Passport, and more.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={steps.length} 
            steps={steps} 
          />
          
          {renderStepContent()}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
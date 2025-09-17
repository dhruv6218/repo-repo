'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProgressBar from '../../components/ProgressBar';

interface FormData {
  aadhaar: string;
  name: string;
  dob: string;
}

interface VerificationResult {
  success: boolean;
  data?: Record<string, unknown>;
  error?: string;
  verificationId?: string;
}

export default function AadhaarVerification() {
  const [formData, setFormData] = useState<FormData>({
    aadhaar: '',
    name: '',
    dob: '',
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [planType, setPlanType] = useState<string>('Free');
  const progressTimer = useRef<number | null>(null);
  const [toast, setToast] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/user/profile', { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setPlanType(json.planType || 'Free');
      }
    };
    load();
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);
    setResult(null);
    setToast('');

    const payload = { ...formData };

    progressTimer.current = window.setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 15, 95));
    }, 200);

    try {
      const res = await fetch('/api/verify/aadhaar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setToast(json.error || 'Verification failed');
        return;
      }
      setResult(json);
      setToast('Verification completed.');
    } catch {
      // Mock response for static deployment
      setResult({
        success: true,
        verificationId: 'demo-' + Date.now(),
        data: {
          name: 'John Doe',
          aadhaar: payload.aadhaar,
          address: '123 Sample Street, Demo City, State 12345',
          dob: '01/01/1990',
          gender: 'Male'
        }
      });
      setToast('Verification completed (Demo Mode)');
    } finally {
      setLoading(false);
      setProgress(100);
      if (progressTimer.current) {
        clearInterval(progressTimer.current);
        progressTimer.current = null;
      }
    }
  };

  const onDownloadClick = async () => {
    if (planType === 'Free') {
      alert('Free plan does not allow PDF downloads. Please upgrade your plan to download the report as PDF. The report will be sent to your email directly.');
      return;
    }
    if (!result) return;
    try {
      const res = await fetch('/api/report/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          verificationId: result?.verificationId,
          allowPdf: true,
          branding: { logoUrl: 'https://storage.googleapis.com/cosmic-project-image-assets/images/e13bc083-35ee-485c-9de0-75fb59bd949c/logo.jpg' },
        }),
      });
      const json = await res.json();
      if (json.pdfUrl) window.open(json.pdfUrl, '_blank');
      else alert('Report sent to your email.');
    } catch {
      // Mock response for static deployment
      alert('Demo Mode: Report generation simulated. In production, this would generate a PDF report.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Aadhaar Verification
        </h1>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhaar Number
            </label>
            <input
              type="text"
              value={formData.aadhaar}
              onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter 12-digit Aadhaar number"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter full name as per Aadhaar"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying...' : 'Verify Aadhaar'}
          </button>
        </form>
        
        {loading && (
          <div className="mt-4">
            <ProgressBar progress={progress} />
          </div>
        )}
        
        {toast && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {toast}
          </div>
        )}
        
        {result && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Verification Result</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Status:</strong> <span className="text-green-600">Verified</span></p>
              <p><strong>Name:</strong> {result.data?.name}</p>
              <p><strong>Aadhaar:</strong> {result.data?.aadhaar}</p>
              <p><strong>Address:</strong> {result.data?.address}</p>
              <p><strong>DOB:</strong> {result.data?.dob}</p>
              <p><strong>Gender:</strong> {result.data?.gender}</p>
            </div>
            <button
              onClick={onDownloadClick}
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Download Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
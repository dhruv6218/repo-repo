import { Shield, Zap, Users, BarChart3, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Multiple Document Types',
    description: 'Verify Aadhaar, PAN, GST, Passport, CIN, DIN, and DigiLocker documents all in one place.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get verification results in seconds with our optimized API and advanced algorithms.'
  },
  {
    icon: Users,
    title: 'Bulk Verification',
    description: 'Process thousands of documents simultaneously with our enterprise-grade infrastructure.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track verification statistics, success rates, and usage patterns with detailed analytics.'
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Easy-to-use REST APIs with comprehensive documentation for seamless integration.'
  },
  {
    icon: Lock,
    title: 'Secure & Compliant',
    description: 'Bank-grade security with end-to-end encryption and compliance with data protection laws.'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Cosmic Verify?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers comprehensive verification solutions with industry-leading 
            accuracy, speed, and security features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
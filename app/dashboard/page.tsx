'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BarChart3, FileText, Users, Shield, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { name: 'Total Verifications', value: '2,847', icon: FileText, change: '+12%', changeType: 'positive' },
  { name: 'Success Rate', value: '98.5%', icon: Shield, change: '+2.1%', changeType: 'positive' },
  { name: 'API Calls', value: '15,234', icon: BarChart3, change: '+8%', changeType: 'positive' },
  { name: 'Active Users', value: '1,429', icon: Users, change: '+5%', changeType: 'positive' }
];

const recentVerifications = [
  { id: 1, type: 'Aadhaar', status: 'Success', time: '2 minutes ago', user: 'John Doe' },
  { id: 2, type: 'PAN', status: 'Success', time: '5 minutes ago', user: 'Jane Smith' },
  { id: 3, type: 'GST', status: 'Failed', time: '8 minutes ago', user: 'Bob Johnson' },
  { id: 4, type: 'Passport', status: 'Success', time: '12 minutes ago', user: 'Alice Brown' },
  { id: 5, type: 'Aadhaar', status: 'Success', time: '15 minutes ago', user: 'Charlie Wilson' }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your verifications.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                      <span className={`ml-2 text-sm ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('recent')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'recent'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Recent Activity
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a href="/verify/all-in-one" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Start Verification</h4>
                    <p className="text-sm text-gray-600">Verify documents instantly</p>
                  </a>
                  <a href="/verification-history" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Clock className="h-8 w-8 text-green-600 mb-2" />
                    <h4 className="font-medium text-gray-900">View History</h4>
                    <p className="text-sm text-gray-600">Check past verifications</p>
                  </a>
                  <a href="/settings" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Settings</h4>
                    <p className="text-sm text-gray-600">Manage your account</p>
                  </a>
                </div>
              </div>
            )}

            {activeTab === 'recent' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Recent Verifications</h3>
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentVerifications.map((verification) => (
                        <tr key={verification.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {verification.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {verification.user}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              verification.status === 'Success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {verification.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {verification.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Analytics Overview</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-4">Verification Types</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Aadhaar</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">PAN</span>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">GST</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-4">Success Rate Trend</h4>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">98.5%</div>
                      <p className="text-sm text-gray-600">Average success rate this month</p>
                      <div className="mt-4 text-sm text-green-600">↑ 2.1% from last month</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
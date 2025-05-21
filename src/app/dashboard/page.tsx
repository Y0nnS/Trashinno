'use client';

import { Home, BarChart, Settings, Database, LogIn, UserPlus, RefreshCcw } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Data Sampah', icon: Database, href: '/dashboard/data' },
  { name: 'Analytics', icon: BarChart, href: '/dashboard/analytics' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  { name: 'Login', icon: LogIn, href: '/auth/login' },
  { name: 'Register', icon: UserPlus, href: '/auth/register' },
];

export default function DashboardPage() {
  const [iotData, setIotData] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchIotData = async () => {
    setLoading(true);
    setTimeout(() => {
      const data = {
        aluminium: '2.3kg',
        plastik: '1.8kg',
        kaca: '3.0kg',
      };
      setIotData(data);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Welcome back!</h1>
          <div className="flex items-center space-x-4">
          <button
            onClick={fetchIotData}
            disabled={loading}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
            <RefreshCcw size={16} className={loading ? 'animate-spin' : ''} />
            {loading ? 'Memuat...' : 'Ambil Data dari IoT'}
          </button>

            <div className="w-9 h-9 bg-gray-200 rounded-full" />
            <span className="text-gray-700 text-sm">phion@example.com</span>
          </div>
        </header>

        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500 text-sm">Users</p>
              <h2 className="text-zinc-800 text-3xl font-semibold mt-2">1,204</h2>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500 text-sm">Revenue</p>
              <h2 className="text-zinc-800 text-3xl font-semibold mt-2">$8,320</h2>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <p className="text-gray-500 text-sm">Orders</p>
              <h2 className="text-zinc-800 text-3xl font-semibold mt-2">349</h2>
            </div>
          </div>

          {/* Live IoT Data Section */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold text-zinc-800 mb-4">Live IoT Data</h2>
            {!iotData ? (
              <p className="text-gray-500">Klik tombol "Ambil Data dari IoT" untuk melihat data terbaru.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(iotData).map(([key, value]) => (
                  <div key={key} className="bg-green-100 text-green-800 px-4 py-3 rounded-lg shadow">
                    <p className="capitalize font-medium">{key}</p>
                    <p className="text-lg font-bold">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

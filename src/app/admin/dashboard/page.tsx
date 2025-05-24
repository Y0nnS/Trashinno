'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import {
  Users, UserCheck, Mail, RefreshCcw,
} from 'lucide-react';

export default function DashboardPage() {
  const [iotData, setIotData] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<any[]>([]);

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

  const fetchUsers = async () => {
  const { data, error } = await supabase.from('accounts').select('*');

    if (error) {
      console.error('Error fetching users:', error);
    } else {
      console.log('Fetched users:', data); 
      setUsers(data || []);
    }
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);

  {users.map((user) => {
    console.log('Rendering user:', user.id, user.email);
    return (
      <tr key={user.id ?? user.email} className="border-b hover:bg-gray-50">
        ...
      </tr>
    );
  })}
  

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col flex-1">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Welcome back!</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={fetchIotData}
              disabled={loading}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}>
              <RefreshCcw size={16} className={loading ? 'animate-spin' : ''} />
              {loading ? 'Memuat...' : 'Ambil Data dari IoT'}
            </button>
            <div className="w-9 h-9 bg-gray-200 rounded-full" />
            <span className="text-gray-700 text-sm">phion@example.com</span>
          </div>
        </header>

        <main className="p-6 space-y-6">
          {/* Statistik Singkat */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
              <Users className="text-blue-500" />
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <h2 className="text-zinc-800 text-2xl font-semibold">{users.length}</h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
              <UserCheck className="text-green-500" />
              <div>
                <p className="text-gray-500 text-sm">Admin Count</p>
                <h2 className="text-zinc-800 text-2xl font-semibold">
                  {users.filter(user => user.role === 'admin').length}
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
              <Mail className="text-purple-500" />
              <div>
                <p className="text-gray-500 text-sm">Emails</p>
                <h2 className="text-zinc-800 text-2xl font-semibold">
                  {users.map(user => user.email).filter(Boolean).length}
                </h2>
              </div>
            </div>
          </div>

          {/* Live IoT Data */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold text-zinc-800 mb-4">Live IoT Data</h2>
            {!iotData ? (
              <p className="text-gray-500">Klik tombol Ambil Data dari IoT untuk melihat data terbaru.</p>
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

          {/* Tabel Data Akun */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold text-zinc-800 mb-4">Akun Terdaftar</h2>
            <div className="overflow-x-auto">
              {users.length === 0 ? (
                <p className="text-gray-500">Memuat data akun...</p>
              ) : (
                <table className="min-w-full text-left text-sm text-zinc-700">
                  <thead>
                    <tr className="border-b bg-gray-100">
                      <th className="px-4 py-2 font-semibold">Nama</th>
                      <th className="px-4 py-2 font-semibold">Email</th>
                      <th className="px-4 py-2 font-semibold">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                  {users.map((user) => (
                  <tr key={user.id ?? user.email} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{user.full_name ?? '-'}</td>
                    <td className="px-4 py-2">{user.email ?? '-'}</td>
                    <td className="px-4 py-2 capitalize">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          user.role === 'admin'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                        {user.role ?? 'user'}
                      </span>
                    </td>
                  </tr>
                ))}

                  </tbody>
                </table>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

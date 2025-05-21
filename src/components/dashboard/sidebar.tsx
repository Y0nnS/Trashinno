'use client';

import Link from "next/link";
import { Home, BarChart, Settings, Trash2, LogOut, LogIn, Database } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Data Sampah", icon: Trash2, href: "/dashboard/data" },
  { name: "Analytics", icon: BarChart, href: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
  { name: "Login", icon: LogIn, href: "/auth/login" },
  { name: "Register", icon: LogOut, href: "/auth/register" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <div className="h-full p-4">
        <h2 className="text-zinc-800 text-2xl font-bold mb-6">Trashinno</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                <item.icon size={20} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
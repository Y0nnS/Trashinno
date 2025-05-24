"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Globe, Menu, User } from "lucide-react";
import Link from "next/link";
import { getAccountProfile } from "@/utils/auth";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<{ full_name: string } | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const account = await getAccountProfile();
        if (account) {
          setUser(account); // Simpan data user
        }
      } catch (err) {
        console.error("Gagal ambil user:", err);
      }
    }
    fetchUser();
  }, []);

  return (
    <nav className="bg-[#F8F8FF] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-green-600 font-bold text-2xl">
          Trashinno.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-green-600 hover:underline">
            Beranda
          </Link>
          <Link href="/tentangKami" className="hover:text-green-600 hover:underline">
            Tentang Kami
          </Link>
          <Link href="/masalahKita" className="hover:text-green-600 hover:underline">
            Masalah Kita
          </Link>
          <Link href="/solusiKami" className="hover:text-green-600 hover:underline">
            Solusi Kita
          </Link>
          <Link href="/kontak" className="hover:text-green-600 hover:underline">
            Kontak Kami
          </Link>

          <button className="flex items-center hover:text-green-600">
            <Globe className="mr-1 h-4 w-4" />
            Indonesia
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>

          {/* Auth Section */}
          {user ? (
            <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-md text-green-800">
              <User className="h-4 w-4" />
              <span>{user.full_name}</span>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/auth/login"
                className="text-sm px-4 py-2 rounded-md border border-green-600 text-green-600 hover:bg-green-50 transition"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="text-sm px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)} className="text-gray-700">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* ...biarkan seperti sebelumnya... */}
    </nav>
  );
};

export default Navbar;

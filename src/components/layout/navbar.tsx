"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/register";

  useEffect(() => {
    if (isAuthPage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAuthPage]);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isAuthPage ? "bg-white shadow-md" : scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-green-600 font-bold text-2xl">Trashinno.</Link>

        {/* Desktop Menu */}
        <div className={clsx(
          "hidden md:flex items-center space-x-6 text-sm transition-colors duration-300",
          isAuthPage || scrolled ? "text-gray-800" : "text-white"
        )}>
          <Link href="/" className="hover:text-green-600">Beranda</Link>
          <Link href="/tentangKami" className="hover:text-green-600">Tentang Kami</Link>
          <Link href="/masalahKita" className="hover:text-green-600">Masalah Kita</Link>
          <Link href="/solusiKami" className="hover:text-green-600">Solusi Kita</Link>
          <Link href="/kontak" className="hover:text-green-600">Kontak Kami</Link>

          {/* Bahasa */}
          <button className="flex items-center hover:text-green-600">
            <Globe className="mr-1 h-4 w-4" />
            Indonesia
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>

          {/* Auth Buttons */}
          <div className="flex gap-3 ml-4">
            <Link href="/auth/login" className="text-sm px-4 py-2 rounded-md border border-green-600 text-green-600 hover:bg-white hover:border-transparent transition">Login</Link>
            <Link href="/auth/register" className="text-sm px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">Register</Link>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)} className={clsx(
            isAuthPage || scrolled ? "text-gray-700" : "text-white"
          )}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <div className="px-6 py-2 space-y-4 text-gray-700">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Beranda</Link>
          <Link href="/tentangKami" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Tentang Kami</Link>
          <Link href="/masalahKita" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Masalah Kita</Link>
          <Link href="/solusiKami" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Solusi Kita</Link>
          <Link href="/kontak" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Kontak Kami</Link>

          <div className="flex items-center gap-2 pt-2">
            <Globe className="h-4 w-4" />
            <span>Indonesia</span>
            <ChevronDown className="h-4 w-4" />
          </div>

          <div className="pt-4 space-y-2">
            <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="block text-center px-4 py-2 border border-green-600 rounded-md text-green-600 hover:bg-green-50 transition">Login</Link>
            <Link href="/auth/register" onClick={() => setMobileOpen(false)} className="block text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

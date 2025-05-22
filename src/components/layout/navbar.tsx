"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const isAuthPage = pathname === "/auth/login" || pathname === "/auth/register";

  useEffect(() => {
    if (isAuthPage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAuthPage]);

  const handleLanguageChange = (lang: string) => {
    console.log("Language changed to:", lang);
    setLangOpen(false);
    // TODO: Implement actual language switching (i18n or similar)
  };

  return (
    <nav className={clsx(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isAuthPage ? "bg-white shadow" : scrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Trashinno Logo"
            width={160}
            height={60}
            className="object-contain"
            priority/>
        </Link>

        {/* Desktop Menu */}
        <div className={clsx(
          "hidden md:flex items-center space-x-6 text-sm font-medium",
          isAuthPage || scrolled ? "text-gray-800" : "text-white"
        )}>
          <Link href="/" className="hover:text-green-600">Beranda</Link>
          <Link href="/tentangKami" className="hover:text-green-600">Tentang Kami</Link>
          <Link href="/masalahKita" className="hover:text-green-600">Masalah Kita</Link>
          <Link href="/solusiKami" className="hover:text-green-600">Solusi Kita</Link>
          <Link href="/kontak" className="hover:text-green-600">Kontak Kami</Link>

          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center hover:text-green-600 focus:outline-none">
              <Globe className="h-4 w-4" />
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {langOpen && (
              <div className="absolute mt-2 right-0 bg-white shadow-lg rounded-md py-2 text-sm text-gray-700 z-50">
                <button
                  onClick={() => handleLanguageChange("id")}
                  className="bloc w-full text-left px-4 py-2 hover:bg-gray-100">
                  🇮🇩 Indonesia
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  🇬🇧 English
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-3 ml-4">
            <Link href="/auth/login" className="text-sm px-4 py-2 rounded-md border border-green-600 text-green-600 hover:bg-white hover:border-transparent transition">Login</Link>
            <Link href="/auth/register" className="text-sm px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">Register</Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)} className={clsx(
            isAuthPage || scrolled ? "text-gray-800" : "text-white")}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "fixed top-0 right-0 h-full w-64 bg-white z-[60] shadow-md transform transition-transform duration-300 ease-in-out",
        mobileOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <div className="px-6 py-2 space-y-4 text-gray-800">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Beranda</Link>
          <Link href="/tentangKami" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Tentang Kami</Link>
          <Link href="/masalahKita" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Masalah Kita</Link>
          <Link href="/solusiKami" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Solusi Kita</Link>
          <Link href="/kontak" onClick={() => setMobileOpen(false)} className="block hover:text-green-600">Kontak Kami</Link>

          {/* Language Dropdown - Mobile */}
          <div className="pt-2">
            <div className="font-medium mb-1 text-gray-600">Bahasa</div>
            <button onClick={() => handleLanguageChange("id")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">🇮🇩 Bahasa Indonesia</button>
            <button onClick={() => handleLanguageChange("en")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">🇬🇧 English</button>
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

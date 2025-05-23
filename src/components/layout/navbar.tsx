"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  Home,
  Info,
  Users,
  Lightbulb,
  Phone,
  LogIn,
  UserPlus,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const isAuthPage =
    pathname === "/auth/login" || pathname === "/auth/register";

    const iconColorTheme = isAuthPage || scrolled ? "text-gray-800" : "text-white";
    
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
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAuthPage]);

  // Sync theme from localStorage or prefers-color-scheme
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (
        savedTheme === "dark" ||
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleLanguageChange = (lang: string) => {
    console.log("Language changed to:", lang);
    setLangOpen(false);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isAuthPage
          ? "bg-white shadow"
          : scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      )}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Trashinno Logo"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={clsx(
            "hidden md:flex items-center space-x-6 text-sm font-medium",
            isAuthPage || scrolled ? "text-gray-800" : "text-white"
          )}>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-green-600">
            <Home className="w-4 h-4" />
            Beranda
          </Link>

          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 hover:text-green-600 focus:outline-none">
              <Info className="w-4 h-4" />
              Tentang Kami
              <ChevronDown className="h-4 w-4" />
            </button>
            {aboutOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 text-sm text-gray-700 z-50 min-w-[200px]">
                <Link
                  href="/aboutUs"
                  onClick={() => setAboutOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <Info className="w-4 h-4" />
                  Tentang Trashinno
                </Link>
                <Link
                  href="/aboutUs/aboutProject"
                  onClick={() => setAboutOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <Lightbulb className="w-4 h-4" />
                  Tentang Project
                </Link>
                <Link
                  href="/aboutUs/aboutTeam"
                  onClick={() => setAboutOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <Users className="w-4 h-4" />
                  Tentang Team
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/ourProblem"
            className="flex items-center gap-2 hover:text-green-600">
            <Info className="w-4 h-4" />
            Masalah Kita
          </Link>
          <Link
            href="/ourSolution"
            className="flex items-center gap-2 hover:text-green-600">
            <Lightbulb className="w-4 h-4" />
            Solusi Kita
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-green-600">
            <Phone className="w-4 h-4" />
            Kontak Kami
          </Link>

          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center hover:text-green-600 focus:outline-none cursor-pointer">
              <Globe className="h-4 w-4" />
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {langOpen && (
              <div className="absolute mt-2 right-0 bg-white shadow-lg rounded-md py-2 text-sm text-gray-700 z-50 min-w-[150px]">
                <button
                  onClick={() => handleLanguageChange("id")}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                  🇮🇩 <span>Indonesia</span>
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                  🇬🇧 <span>English</span>
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-1 rounded-md transition cursor-pointer ${iconColorTheme}`}
            aria-label="Toggle Dark Mode">
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>


          <div className="flex gap-3 ml-4">
            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-green-600 text-green-600 hover:bg-white hover:border-transparent transition">
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              href="/auth/register"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
              <UserPlus className="w-4 h-4" />
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={clsx(
            "md:hidden focus:outline-none",
            isAuthPage || scrolled ? "text-gray-800" : "text-white"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu">
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={clsx(
            "md:hidden bg-white shadow-md px-4 py-6 text-gray-800 font-medium text-sm"
          )}>
          <Link
            href="/"
            className="flex items-center gap-2 py-2 border-b border-gray-200"
            onClick={() => setMobileOpen(false)}>
            <Home className="w-5 h-5" />
            Beranda
          </Link>

          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex items-center gap-2 w-full py-2 border-b border-gray-200">
            <Info className="w-5 h-5" />
            Tentang Kami
            <ChevronDown
              className={clsx(
                "ml-auto w-4 h-4 transition-transform",
                aboutOpen ? "rotate-180" : "rotate-0"
              )}/>
          </button>
          {aboutOpen && (
            <div className="pl-6 border-b border-gray-200">
              <Link
                href="/aboutUs"
                onClick={() => setMobileOpen(false)}
                className="block py-1">
                Tentang Trashinno
              </Link>
              <Link
                href="/aboutUs/AboutProject"
                onClick={() => setMobileOpen(false)}
                className="block py-1">
                Tentang Project
              </Link>
              <Link
                href="/aboutUs/aboutTeam"
                onClick={() => setMobileOpen(false)}
                className="block py-1">
                Tentang Team
              </Link>
            </div>
          )}

          <Link
            href="/ourProblem"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2 border-b border-gray-200">
            <Info className="w-5 h-5" />
            Masalah Kita
          </Link>
          <Link
            href="/ourSolution"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2 border-b border-gray-200">
            <Lightbulb className="w-5 h-5" />
            Solusi Kita
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 py-2 border-b border-gray-200">
            <Phone className="w-5 h-5" />
            Kontak Kami
          </Link>

          {/* Language dropdown mobile */}
          <div className="border-b border-gray-200 py-2">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 w-full">
              <Globe className="w-5 h-5" />
              Bahasa
              <ChevronDown
                className={clsx(
                  "ml-auto w-4 h-4 transition-transform",
                  langOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
            {langOpen && (
              <div className="pl-6 mt-1">
                <button
                  onClick={() => {
                    handleLanguageChange("id");
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left py-1">
                  🇮🇩 Indonesia
                </button>
                <button
                  onClick={() => {
                    handleLanguageChange("en");
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left py-1">
                  🇬🇧 English
                </button>
              </div>
            )}
          </div>

          {/* Theme toggle mobile */}
          <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              toggleTheme();
              setMobileOpen(false);
            }}
            className="p-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
            {isDark ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
          </div>

          <div className="flex gap-3 mt-6">
            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-green-600 text-green-600 hover:bg-white hover:border-transparent transition flex-1 justify-center"
              onClick={() => setMobileOpen(false)}>
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              href="/auth/register"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition flex-1 justify-center"
              onClick={() => setMobileOpen(false)}>
              <UserPlus className="w-4 h-4" />
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

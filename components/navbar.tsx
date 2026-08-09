"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Code2,
  FileText,
  FileCode2,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Open Source", href: "#open-source" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-100 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base leading-tight">
              Akash Roshan <span className="text-cyan-400">Chaurasia</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              Team Lead 2 • SR. SWE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        {pathname === "/" && (
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <Link href="/ats">
            <Button
              variant="outline"
              size="sm"
              className={`text-xs border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-cyan-300 text-slate-300 ${
                pathname === "/ats" ? "border-cyan-500/50 text-cyan-400" : ""
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
              ATS Resume
            </Button>
          </Link>

          <Link href="/cover">
            <Button
              variant="outline"
              size="sm"
              className={`text-xs border-slate-800 bg-slate-900/50 hover:bg-slate-800 hover:text-cyan-300 text-slate-300 ${
                pathname === "/cover" ? "border-cyan-500/50 text-cyan-400" : ""
              }`}
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
              Cover Letter
            </Button>
          </Link>

          <a
            href="https://github.com/akashrc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-roshan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-cyan-400 bg-slate-900/80 rounded-lg border border-slate-800"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1019]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {pathname === "/" && (
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-2 pt-2">
            <Link href="/ats" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start border-slate-800 bg-slate-900 text-slate-200"
              >
                <FileCode2 className="w-4 h-4 mr-2 text-cyan-400" />
                ATS Resume View
              </Button>
            </Link>

            <Link href="/cover" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start border-slate-800 bg-slate-900 text-slate-200"
              >
                <FileText className="w-4 h-4 mr-2 text-indigo-400" />
                Cover Letter
              </Button>
            </Link>

            <div className="flex items-center justify-around pt-3 border-t border-slate-800/60">
              <a
                href="https://github.com/akashrc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-100"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akash-roshan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:akashroshanchaurasia@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-400"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

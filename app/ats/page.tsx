"use client";

import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, FileText, Chrome as Home, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { differenceInYears, differenceInMonths } from "date-fns";

export default function ATSResume() {
  const calculateYearMonthExperience = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const years = differenceInYears(end, start);
    const totalMonths = differenceInMonths(end, start);
    const months = totalMonths - years * 12;

    const yearText = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
    const monthText = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

    return [yearText, monthText].filter(Boolean).join(" and ") || "0 month";
  };

  const handleDownload = () => {
    window.print();
  };

  const totalExperience = calculateYearMonthExperience("2019-01-01");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto p-6 sm:p-8 space-y-6">
        {/* Navigation and Download Button */}
        <div className="flex justify-between items-center flex-wrap gap-3 print:hidden mb-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          <div className="flex gap-2 flex-wrap">
            <Link href="/">
              <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                <Home className="w-4 h-4 mr-2 text-cyan-400" />
                Portfolio
              </Button>
            </Link>
            <Button variant="secondary" size="sm" className="bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400">
              <FileText className="w-4 h-4 mr-2" />
              ATS Resume
            </Button>
            <Link href="/cover">
              <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                <FileText className="w-4 h-4 mr-2 text-indigo-400" />
                Cover Letter
              </Button>
            </Link>
          </div>
          <Button onClick={handleDownload} variant="default" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* ATS Resume Sheet Container */}
        <div className="bg-white text-black p-8 rounded-xl shadow-2xl border border-slate-200 space-y-6 font-sans">
          {/* Header */}
          <div className="text-center space-y-2 border-b-2 border-black pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-black">AKASH ROSHAN CHAURASIA</h1>
            <p className="text-lg font-semibold text-slate-800">Team Lead 2 — Software Development</p>
            
            <div className="flex justify-center gap-4 text-sm flex-wrap text-slate-700 pt-1">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Gurgaon, Haryana, India 122016
              </span>
              <span>•</span>
              <a href="tel:+918802076664" className="inline-flex items-center gap-1 text-blue-700 hover:underline font-medium">
                <Phone className="w-3.5 h-3.5" /> +91-8802076664
              </a>
              <span>•</span>
              <a href="mailto:akashroshanchaurasia@gmail.com" className="inline-flex items-center gap-1 text-blue-700 hover:underline font-medium">
                <Mail className="w-3.5 h-3.5" /> akashroshanchaurasia@gmail.com
              </a>
            </div>

            <div className="flex justify-center gap-4 text-sm flex-wrap pt-1 font-mono">
              <a href="https://www.linkedin.com/in/akash-roshan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:underline">
                <Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/akash-roshan
              </a>
              <span>•</span>
              <a href="https://github.com/akash-roshan-chaurasia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:underline">
                <Github className="w-3.5 h-3.5" /> github.com/akash-roshan-chaurasia
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-black border-b border-black pb-1 uppercase tracking-wide">
              EXECUTIVE &amp; TECHNICAL LEADERSHIP SUMMARY
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-900">
              Team Lead 2 at Real Time Data Services with {totalExperience} of progressive software engineering and technical leadership experience. Proven track record in leading developer and QA teams, implementing AI-driven development workflows, establishing architectural code reviews, executing zero-downtime production releases, and building high-availability cloud disaster recovery infrastructure. Author of 5 verified OpenStack core patches across Cinder &amp; Nova infrastructure. Proficient in Next.js, NestJS, React Query, MySQL, MongoDB, BullMQ, NetApp Snapmirror, Commvault, and OpenStack cloud environments.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-black border-b border-black pb-1 uppercase tracking-wide">
              CORE COMPETENCIES &amp; TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-900">
              <div>
                <span className="font-bold">Leadership &amp; Governance:</span> Team Management, Mentorship, AI-Driven Development Workflows, Code Reviews, Release Execution, CI/CD Strategy
              </div>
              <div>
                <span className="font-bold">Frontend Architecture:</span> Next.js, React, React Query, Redux, TypeScript, Tailwind CSS, jQuery, Electron
              </div>
              <div>
                <span className="font-bold">Backend &amp; Microservices:</span> NestJS, Node.js, BullMQ, REST APIs, Webhooks, Asterisk PBX
              </div>
              <div>
                <span className="font-bold">Cloud Native &amp; DR:</span> OpenStack Cloud (Cinder / Nova), NetApp Snapmirror &amp; ONTAP, Commvault Disaster Recovery, Docker, Sentry
              </div>
              <div>
                <span className="font-bold">Databases &amp; Storage:</span> MySQL, MongoDB, Volume Auto-Scaling, Automated Backups
              </div>
              <div>
                <span className="font-bold">Open Source Evidence:</span> 5 OpenStack Core Patches (Cinder &amp; Nova on OpenDev Gerrit), Model Context Protocol (swagger-mcp PR #7)
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-black border-b border-black pb-1 uppercase tracking-wide">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Team Lead 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-sm sm:text-base">Team Lead 2 — Software Development</h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold">Real Time Data Services (AceCloud), Gurgaon, India</p>
                </div>
                <div className="text-xs font-bold text-black">Oct 2025 – Present</div>
              </div>
              <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-1">
                <li>Supervise and lead cross-functional development and QA teams, aligning technical milestones with Scrum Masters and Product Owners.</li>
                <li>Pioneer AI-driven development workflows and automated prompt engineering practices across the team to increase sprint velocity and code quality.</li>
                <li>Conduct rigorous peer code reviews, enforce architectural quality gates, static analysis checks, and technical debt reduction.</li>
                <li>Oversee production release management, CI/CD pipeline deployments, risk mitigation, and zero-downtime release executions.</li>
                <li>Architected customer Disaster Recovery offerings using Commvault best practices and NetApp Snapmirror integration.</li>
                <li>Implemented OpenStack volume Auto Scaling and Automated Scheduled Volume Backups for cloud compute instances.</li>
                <li>Tech Stack: Next.js, NestJS, React Query, MySQL, MongoDB, BullMQ, NetApp, Commvault, Sentry, OpenStack.</li>
              </ul>
            </div>

            {/* Assistant Team Lead */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-sm sm:text-base">Assistant Team Lead — Software Development</h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold">Real Time Data Services (AceCloud), Gurgaon, India</p>
                </div>
                <div className="text-xs font-bold text-black">Nov 2022 – Oct 2025</div>
              </div>
              <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-1">
                <li>Guided developer teams, performed code reviews, and resolved complex production infrastructure issues.</li>
                <li>Built Auto Scaling microservices and scheduled volume backup integrations for OpenStack instances.</li>
                <li>Formulated enterprise Disaster Recovery architecture using Commvault deployment guidelines.</li>
                <li>Tech Stack: Next.js, NestJS, React Query, MySQL, MongoDB, Sentry, OpenStack.</li>
              </ul>
            </div>

            {/* Software Engineer - Acefone */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-sm sm:text-base">Software Engineer</h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold">Real Time Data Services (Acefone), Gurgaon, India</p>
                </div>
                <div className="text-xs font-bold text-black">May 2021 – Oct 2022</div>
              </div>
              <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-1">
                <li>Implemented IVR broadcast call solutions with inbound/outbound call routing logic and webhook integrations.</li>
                <li>Developed Customized Dial Plan flow (CDP) for enterprise call center clients on Asterisk PBX.</li>
              </ul>
            </div>

            {/* Software Engineer - Velocity */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-sm sm:text-base">Software Developer</h3>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold">Velocity Software Solutions, Noida, India</p>
                </div>
                <div className="text-xs font-bold text-black">Jan 2019 – May 2021</div>
              </div>
              <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-1">
                <li>Engineered core e-commerce modules for uksoccershop.com including Supplier Delivery, Order Processing, and Inventory Sync.</li>
                <li>Built PDF generation modules (WKHTMLTOPDF, TCPDF) and integrated Amazon MWS bulk feed APIs.</li>
                <li>Integrated major international shipping carriers including DHL, Spring Global, Norsk Global, and Royal Mail.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-black border-b border-black pb-1 uppercase tracking-wide">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-black">Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering</h3>
                <p className="text-slate-800">IMS Engineering College, Ghaziabad, India (Final Grade: 69%)</p>
              </div>
              <div className="font-bold text-black whitespace-nowrap">2015 – 2019</div>
            </div>
          </div>

          {/* Open Source Evidence */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-black border-b border-black pb-1 uppercase tracking-wide">
              PUBLIC OPEN SOURCE CONTRIBUTIONS
            </h2>
            <ul className="text-xs sm:text-sm space-y-1 text-slate-900 leading-relaxed">
              <li><strong className="font-bold">OpenDev Gerrit (5 Verified OpenStack Patches):</strong> Authored 5 patches across OpenStack Cinder &amp; Nova: 1) NetApp ONTAP LUN name preservation, 2) HTTP 409 backup conflict handling, 3) Nova network cleanup retries (Bug #2161972), 4) NetApp ONTAP SSC refresh interval, 5) Invalid host startup fail-fast.</li>
              <li><strong className="font-bold">GitHub (swagger-mcp):</strong> Merged Pull Request #7 (&quot;swaggerV3Support&quot;) adding OpenAPI 3.0 support to Model Context Protocol (MCP) server repository.</li>
              <li><strong className="font-bold">npm Registry:</strong> Verified maintainer profile (~akash_roshan) for open-source Node.js package distribution.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Download as DownloadIcon,
  FileText,
  Chrome as Home,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GitBranch,
  Layers,
  Server,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { differenceInYears, differenceInMonths } from "date-fns";

type ResumeVariant = "cloud-platform" | "backend-staff" | "product-engineering";

export default function ATSResume() {
  const [variant, setVariant] = useState<ResumeVariant>("cloud-platform");

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
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Navigation & Controls (Hidden on Print) */}
        <div className="print:hidden space-y-4 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 shadow-xl">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="flex gap-2 flex-wrap items-center">
              <Link href="/">
                <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                  <Home className="w-4 h-4 mr-2 text-cyan-400" />
                  Portfolio
                </Button>
              </Link>
              <Button variant="secondary" size="sm" className="bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400">
                <FileText className="w-4 h-4 mr-2" />
                ATS Resumes (3 Variants)
              </Button>
              <Link href="/cover">
                <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                  <FileText className="w-4 h-4 mr-2 text-indigo-400" />
                  Cover Letter
                </Button>
              </Link>
            </div>
            
            <Button onClick={handleDownload} variant="default" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold shadow-lg shadow-cyan-500/20">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download / Print PDF
            </Button>
          </div>

          {/* 3 ATS Resume Switcher */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">SELECT RESUME VARIANT:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setVariant("cloud-platform")}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left sm:text-center border ${
                  variant === "cloud-platform"
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-sm"
                    : "bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
              >
                <span className="font-bold block">Variant 1</span>
                <span className="text-[10px] opacity-80">Cloud Platform / Backend</span>
              </button>

              <button
                type="button"
                onClick={() => setVariant("backend-staff")}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left sm:text-center border ${
                  variant === "backend-staff"
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-sm"
                    : "bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
              >
                <span className="font-bold block">Variant 2</span>
                <span className="text-[10px] opacity-80">Backend / Staff</span>
              </button>

              <button
                type="button"
                onClick={() => setVariant("product-engineering")}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left sm:text-center border ${
                  variant === "product-engineering"
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-sm"
                    : "bg-slate-800/60 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
              >
                <span className="font-bold block">Variant 3</span>
                <span className="text-[10px] opacity-80">MNC / Product Engineering</span>
              </button>
            </div>
          </div>
        </div>

        {/* ATS Resume Sheet Container (Printable Clean Paper) */}
        <div className="bg-white text-black p-6 sm:p-10 rounded-xl shadow-2xl border border-slate-200 space-y-6 font-sans text-slate-900 leading-normal">
          
          {/* =================================================================== */}
          {/* HEADER */}
          {/* =================================================================== */}
          <div className="text-center space-y-1.5 border-b-2 border-black pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black uppercase">
              AKASH ROSHAN CHAURASIA
            </h1>

            {/* Dynamic Headline Based on Variant */}
            {variant === "cloud-platform" && (
              <p className="text-sm sm:text-base font-semibold text-slate-900">
                Cloud Platform &amp; Backend Engineering Lead | Node.js/NestJS | OpenStack APIs | DR | Cloud Automation
              </p>
            )}
            {variant === "backend-staff" && (
              <p className="text-sm sm:text-base font-semibold text-slate-900">
                Lead / Staff Backend Engineer | Node.js | NestJS | TypeScript | Cloud Platforms
              </p>
            )}
            {variant === "product-engineering" && (
              <p className="text-sm sm:text-base font-semibold text-slate-900">
                Lead Software Engineer | Backend &amp; Cloud Platforms | Node.js/NestJS | Distributed Systems
              </p>
            )}

            <div className="flex justify-center gap-3 text-xs sm:text-sm flex-wrap text-slate-700 pt-1">
              <span>Gurgaon, Haryana, India 122016</span>
              <span>•</span>
              <a href="tel:+918802076664" className="text-slate-900 hover:underline font-medium">
                +91-8802076664
              </a>
              <span>•</span>
              <a href="mailto:akashroshanchaurasia@gmail.com" className="text-slate-900 hover:underline font-medium">
                akashroshanchaurasia@gmail.com
              </a>
            </div>

            <div className="flex justify-center gap-3 text-xs sm:text-sm flex-wrap pt-0.5 font-mono text-slate-700">
              <a href="https://github.com/akash-roshan-chaurasia" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/akash-roshan-chaurasia
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/akash-roshan/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/akash-roshan
              </a>
              <span>•</span>
              <a href="https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                review.opendev.org (OpenDev)
              </a>
            </div>
          </div>

          {/* =================================================================== */}
          {/* PROFESSIONAL SUMMARY */}
          {/* =================================================================== */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-bold text-black border-b border-black pb-0.5 uppercase tracking-wider">
              PROFESSIONAL SUMMARY
            </h2>

            {variant === "cloud-platform" && (
              <p className="text-xs sm:text-sm leading-relaxed text-slate-900">
                Hands-on Engineering Lead with ~7.5 years of software development experience architecting cloud platform products and backend microservices on top of OpenStack APIs. Leads cross-functional engineering teams of developers and QA engineers while building high-throughput Node.js/NestJS services, automated Disaster Recovery systems (Commvault + NetApp SnapMirror, 40% RTO cut), OpenStack Heat autoscaling across 500+ instances, and capacity-aware GPU flavor scheduling. Author of 5 verified OpenStack core patches across Cinder and Nova on OpenDev Gerrit, with a record of 50+ zero-downtime production releases (99.99% SLA) and conducting 200+ technical interviews for team hiring.
              </p>
            )}

            {variant === "backend-staff" && (
              <p className="text-xs sm:text-sm leading-relaxed text-slate-900">
                Lead / Staff Backend Engineer with ~7.5 years of experience architecting distributed backend systems, high-throughput microservices, and asynchronous processing pipelines using Node.js, NestJS, TypeScript, and Docker. Proven technical leadership managing cross-functional engineering teams, conducting code reviews for 100+ PRs/mo, executing 50+ zero-downtime releases (99.99% SLA), and conducting 200+ technical interviews for engineering hiring. Deep expertise in REST APIs, BullMQ asynchronous message queues, relational/NoSQL databases (MySQL, MongoDB), and cloud platform API integrations (OpenStack APIs, multi-region storage replication).
              </p>
            )}

            {variant === "product-engineering" && (
              <p className="text-xs sm:text-sm leading-relaxed text-slate-900">
                Lead Software Engineer with ~7.5 years of experience delivering scalable backend products, cloud platforms, and distributed microservices at enterprise scale. Track record of technical ownership and team leadership: directing developers and QA engineers, driving AI-assisted development practices (+35% sprint velocity), reviewing 100+ PRs/month, executing 50+ zero-downtime production releases with 99.99% SLA uptime, and conducting 200+ candidate interviews for engineering hiring. Specialized in Node.js, NestJS, TypeScript, Next.js, distributed task queues (BullMQ), database architecture (MySQL, MongoDB), and cloud platform integrations with 5 verified open-source contributions to OpenStack core repositories.
              </p>
            )}
          </div>

          {/* =================================================================== */}
          {/* CORE SKILLS */}
          {/* =================================================================== */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-bold text-black border-b border-black pb-0.5 uppercase tracking-wider">
              TECHNICAL SKILLS &amp; COMPETENCIES
            </h2>

            {variant === "cloud-platform" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-900">
                <div>
                  <span className="font-bold">Cloud Platform &amp; APIs:</span> OpenStack APIs (Nova, Cinder, Heat, Glance, Neutron, Keystone), Cloud Provisioning, Instance Lifecycle Automation, Multi-Region Architecture, Smart GPU Flavor Scheduling
                </div>
                <div>
                  <span className="font-bold">Disaster Recovery &amp; Storage:</span> Commvault, NetApp SnapMirror, NetApp ONTAP, DR Orchestration, RPO/RTO Optimization, Planned/Unplanned Failover, Automated DR Drills
                </div>
                <div>
                  <span className="font-bold">Backend &amp; Queues:</span> Node.js, NestJS, TypeScript, REST APIs, Microservices, BullMQ Task Queues, Asynchronous Workflows
                </div>
                <div>
                  <span className="font-bold">Databases &amp; Tooling:</span> MySQL, MongoDB, Docker Containerization, CI/CD Pipelines, Sentry Telemetry, Model Context Protocol (MCP), OpenAPI 3.0
                </div>
                <div className="sm:col-span-2">
                  <span className="font-bold">Technical Leadership:</span> Engineering Team Coordination (Dev &amp; QA), Architecture, Code Reviews (100+ PRs/mo), Zero-Downtime Releases (50+ releases, 99.99% SLA), Technical Hiring (200+ Interviews)
                </div>
              </div>
            )}

            {variant === "backend-staff" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-900">
                <div>
                  <span className="font-bold">Backend Architecture:</span> Node.js, NestJS, TypeScript, JavaScript, REST APIs, Microservices, Distributed Systems, Asynchronous Pipelines
                </div>
                <div>
                  <span className="font-bold">Queues &amp; Messaging:</span> BullMQ, Background Job Scheduling, Event-Driven Architecture, Task Telemetry, Rate Limiting
                </div>
                <div>
                  <span className="font-bold">Databases &amp; Data:</span> MySQL (Schema Design, Query Optimization, Indexing), MongoDB (Document Store), State Synchronization
                </div>
                <div>
                  <span className="font-bold">Cloud Platform Integrations:</span> OpenStack APIs (Nova, Cinder), NetApp SnapMirror Storage Replication, Commvault DR, Docker
                </div>
                <div className="sm:col-span-2">
                  <span className="font-bold">Engineering Leadership:</span> Technical Leadership, Architecture Reviews, Code Reviews (100+ PRs/mo), Production Release Management (50+ Zero-Downtime Releases, 99.99% SLA), Technical Hiring (200+ Interviews), Mentoring
                </div>
              </div>
            )}

            {variant === "product-engineering" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-900">
                <div>
                  <span className="font-bold">Platform &amp; Backend Engineering:</span> Node.js, NestJS, TypeScript, Next.js, React, REST APIs, Microservices, Distributed Systems
                </div>
                <div>
                  <span className="font-bold">Resilience &amp; Scalability:</span> Automated Disaster Recovery, Cross-Region Storage Replication, Autoscaling, RPO/RTO Optimization, Failover Orchestration
                </div>
                <div>
                  <span className="font-bold">Data &amp; Infrastructure:</span> MySQL, MongoDB, Docker Containerization, OpenStack APIs (Compute &amp; Block Storage), CI/CD Automation
                </div>
                <div>
                  <span className="font-bold">Execution &amp; Innovation:</span> AI-Assisted Development (+35% Velocity), Sentry Telemetry, OpenAPI 3.0, Model Context Protocol (MCP)
                </div>
                <div className="sm:col-span-2">
                  <span className="font-bold">Leadership &amp; Talent:</span> Engineering Team Coordination, Sprint Delivery, Code Reviews (100+ PRs/mo), Zero-Downtime Releases (50+, 99.99% SLA), Technical Hiring (200+ Interviews across Intern to ASDM 2)
                </div>
              </div>
            )}
          </div>

          {/* =================================================================== */}
          {/* PROFESSIONAL EXPERIENCE */}
          {/* =================================================================== */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-bold text-black border-b border-black pb-0.5 uppercase tracking-wider">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Team Lead 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-xs sm:text-sm">
                    Team Lead 2 — Software Development
                  </h3>
                  <p className="text-xs text-slate-800 font-semibold">
                    AceCloud | Real Time Data Services — Gurgaon, Haryana, India
                  </p>
                </div>
                <div className="text-xs font-bold text-black">10/2025 – Present</div>
              </div>

              {/* Variant-Tailored Bullets (Action + Technology + Problem + Ownership + Impact) */}
              {variant === "cloud-platform" && (
                <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-0.5">
                  <li>
                    <strong>Cloud Platform Engineering:</strong> Architected and built platform microservices in Node.js/NestJS integrating OpenStack APIs (Nova, Cinder, Neutron, Keystone) for automated cloud provisioning and instance lifecycle management across multiple availability zones.
                  </li>
                  <li>
                    <strong>Disaster Recovery Orchestration:</strong> Designed and implemented automated Disaster Recovery orchestration software integrating Commvault APIs and NetApp SnapMirror storage replication, delivering planned failover, emergency unplanned failover, failback, and automated DR drills with a 40% reduction in failover RTO.
                  </li>
                  <li>
                    <strong>Cloud Autoscaling &amp; Automation:</strong> Engineered automated workload scaling using OpenStack Heat stacks to dynamically scale compute instances alongside policy-based scheduled volume snapshot workflows managing 500+ cloud instances.
                  </li>
                  <li>
                    <strong>Smart GPU Flavor Scheduling:</strong> Implemented smart GPU flavor scheduling based on available GPU capacity to identify suitable launchable options, eliminating provisioning failures for AI/ML workloads.
                  </li>
                  <li>
                    <strong>Technical Leadership &amp; Releases:</strong> Directed engineering execution across developers and QA engineers, conducted code reviews across 100+ PRs/month, and executed 50+ zero-downtime production releases with 99.99% SLA uptime compliance.
                  </li>
                  <li>
                    <strong>Technical Hiring:</strong> Conducted 200+ technical interviews for AceCloud engineering hiring across roles including Intern, SDE 1, SDE 2, SDE 3, Frontend, Backend Lead, and Associate Software Development Manager 2 (ASDM 2).
                  </li>
                </ul>
              )}

              {variant === "backend-staff" && (
                <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-0.5">
                  <li>
                    <strong>Backend Architecture &amp; Microservices:</strong> Engineered high-throughput, resilient backend services in NestJS and TypeScript handling multi-region tenant provisioning, API validations, and state synchronization across distributed services.
                  </li>
                  <li>
                    <strong>Asynchronous Pipelines &amp; Queues:</strong> Built distributed background task execution pipelines utilizing BullMQ to process scheduled volume backups, replication health monitoring, and automated lifecycle operations for 500+ cloud compute instances.
                  </li>
                  <li>
                    <strong>Resilience &amp; Storage Integrations:</strong> Designed and delivered automated Disaster Recovery backend services integrating enterprise storage replication (NetApp SnapMirror) and Commvault APIs, reducing recovery time objectives (RTO) by 40%.
                  </li>
                  <li>
                    <strong>Capacity Assessment Scheduling:</strong> Implemented backend capacity discovery services in NestJS evaluating real-time cluster hardware availability to provide optimal launchable resource options.
                  </li>
                  <li>
                    <strong>Technical Leadership &amp; Releases:</strong> Led cross-functional developer and QA squads, enforced strict architectural quality gates across 100+ PRs monthly, and executed 50+ zero-downtime releases maintaining 99.99% SLA compliance.
                  </li>
                  <li>
                    <strong>Technical Hiring:</strong> Interviewed 200+ candidates for AceCloud engineering positions across Intern, SDE 1, SDE 2, SDE 3, Frontend, Backend Lead, and ASDM 2.
                  </li>
                </ul>
              )}

              {variant === "product-engineering" && (
                <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-0.5">
                  <li>
                    <strong>Platform Product Engineering:</strong> Spearheaded backend platform software development for AceCloud public cloud, building scalable Node.js/NestJS APIs that power customer self-service provisioning, compute lifecycle, and storage automation.
                  </li>
                  <li>
                    <strong>Business Continuity &amp; DR Product:</strong> Productized an automated cloud Disaster Recovery offering on top of OpenStack, Commvault, and NetApp SnapMirror replication, decreasing failover recovery time (RTO) by 40%.
                  </li>
                  <li>
                    <strong>Workload Scaling &amp; Data Protection:</strong> Built automated compute workload scaling using Heat orchestration stacks and scheduled volume snapshot protection services safeguarding data across 500+ cloud compute instances.
                  </li>
                  <li>
                    <strong>AI-Driven Velocity &amp; Code Quality:</strong> Pioneered AI-assisted development workflows across team practices, boosting sprint velocity by 35%+ while conducting architectural code reviews across 100+ pull requests monthly.
                  </li>
                  <li>
                    <strong>Production Excellence:</strong> Managed production release execution, delivering 50+ zero-downtime releases with 99.99% SLA uptime compliance and real-time Sentry telemetry.
                  </li>
                  <li>
                    <strong>Engineering Team Growth:</strong> Conducted 200+ technical interviews for AceCloud hiring across diverse engineering roles: Intern, SDE 1, SDE 2, SDE 3, Frontend, Backend Lead, and ASDM 2.
                  </li>
                </ul>
              )}
            </div>

            {/* Assistant Team Lead */}
            <div className="space-y-1">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-xs sm:text-sm">
                    Assistant Team Lead — Software Development
                  </h3>
                  <p className="text-xs text-slate-800 font-semibold">
                    AceCloud | Real Time Data Services — Gurgaon, Haryana, India
                  </p>
                </div>
                <div className="text-xs font-bold text-black">11/2022 – 10/2025</div>
              </div>
              <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-0.5">
                <li>
                  Guided 8+ developers in engineering cloud microservices and scheduled volume snapshot backup workflows for 300+ OpenStack cloud instances using NestJS and MySQL.
                </li>
                <li>
                  Formulated enterprise Disaster Recovery architecture using Commvault deployment guidelines and NetApp storage APIs, cutting manual operational recovery overhead by 50%.
                </li>
                <li>
                  Resolved 100+ production infrastructure incidents, introduced structured telemetry with Sentry, and collaborated on cross-regional storage replication pipelines.
                </li>
              </ul>
            </div>

            {/* Software Engineer - Acefone */}
            <div className="space-y-1">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-xs sm:text-sm">Software Engineer</h3>
                  <p className="text-xs text-slate-800 font-semibold">
                    Real Time Data Services (Acefone) — Gurgaon, Haryana, India
                  </p>
                </div>
                <div className="text-xs font-bold text-black">05/2021 – 10/2022</div>
              </div>
              <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-0.5">
                <li>
                  Implemented IVR broadcast call solutions and Customized Dial Plan flows (CDP) on Asterisk PBX, processing 100,000+ daily inbound/outbound calls with dynamic webhook routing for 500+ CRM clients.
                </li>
                <li>
                  Improved call queue delivery efficiency by 25% through optimized API dialplan handlers and automated CRM webhook dispatchers.
                </li>
              </ul>
            </div>

            {/* Software Developer - Velocity */}
            <div className="space-y-1">
              <div className="flex justify-between items-start flex-wrap">
                <div>
                  <h3 className="font-bold text-black text-xs sm:text-sm">Software Developer</h3>
                  <p className="text-xs text-slate-800 font-semibold">
                    Velocity Software Solutions — Noida, Uttar Pradesh, India
                  </p>
                </div>
                <div className="text-xs font-bold text-black">01/2019 – 05/2021</div>
              </div>
              <ul className="text-xs sm:text-sm space-y-1 list-disc list-inside text-slate-900 leading-relaxed pl-0.5">
                <li>
                  Engineered core e-commerce modules for uksoccershop.com handling 50,000+ monthly orders, Supplier Delivery Management, and multi-channel marketplace feeds (Amazon MWS).
                </li>
                <li>
                  Integrated 4 major international shipping carriers (DHL, Spring Global, Norsk Global, Royal Mail), automating 95%+ of shipping label dispatch and 10,000+ daily PDF invoices.
                </li>
              </ul>
            </div>
          </div>

          {/* =================================================================== */}
          {/* SELECTED PROJECTS */}
          {/* =================================================================== */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold text-black border-b border-black pb-0.5 uppercase tracking-wider">
              SELECTED PLATFORM &amp; BACKEND PROJECTS
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-slate-900">
              <div>
                <p className="font-bold text-black">
                  1. Multi-Region Cloud Platform Provisioning &amp; Lifecycle Engine
                </p>
                <p className="leading-relaxed">
                  Architected Node.js/NestJS platform microservices integrating OpenStack Nova compute, Cinder block storage, and Neutron networking APIs. Engineered idempotent provisioning workflows, automated quota enforcement, and state synchronization across multiple availability zones.
                </p>
              </div>

              <div>
                <p className="font-bold text-black">
                  2. Enterprise Disaster Recovery Orchestration Engine
                </p>
                <p className="leading-relaxed">
                  Built an automated DR orchestration engine combining Commvault backup APIs and NetApp SnapMirror volume replication on OpenStack. Developed BullMQ asynchronous workers for non-disruptive DR drills, one-click planned failover, and emergency failover, cutting RTO by 40%.
                </p>
              </div>

              <div>
                <p className="font-bold text-black">
                  3. OpenStack Heat Autoscaling &amp; Automated Volume Backup Service
                </p>
                <p className="leading-relaxed">
                  Engineered dynamic compute scaling orchestration using OpenStack Heat stack templates alongside a policy-driven automated snapshot retention service managing 500+ cloud instances with zero I/O disruption.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================================== */}
          {/* OPEN SOURCE CONTRIBUTIONS */}
          {/* =================================================================== */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-bold text-black border-b border-black pb-0.5 uppercase tracking-wider">
              PUBLIC OPEN-SOURCE CONTRIBUTIONS
            </h2>
            <ul className="text-xs sm:text-sm space-y-1 text-slate-900 leading-relaxed list-disc list-inside pl-0.5">
              <li>
                <strong className="font-bold">OpenDev Gerrit (5 Verified OpenStack Core Patches):</strong> Authored 5 patches across OpenStack Cinder &amp; Nova: 1) NetApp ONTAP LUN name preservation, 2) HTTP 409 backup conflict handling, 3) Nova network cleanup retries (Bug #2161972), 4) NetApp ONTAP SSC refresh interval, 5) Invalid host startup fail-fast.
              </li>
              <li>
                <strong className="font-bold">GitHub (swagger-mcp):</strong> Merged Pull Request #7 (&quot;swaggerV3Support&quot;) adding OpenAPI 3.0 specification support to the Model Context Protocol (MCP) server.
              </li>
              <li>
                <strong className="font-bold">npm Registry (~akash_roshan):</strong> Verified public maintainer profile for open-source Node.js package distribution.
              </li>
            </ul>
          </div>

          {/* =================================================================== */}
          {/* EDUCATION */}
          {/* =================================================================== */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-bold text-black border-b border-black pb-0.5 uppercase tracking-wider">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <h3 className="font-bold text-black">
                  Bachelor of Technology (B.Tech) — Computer Science and Engineering
                </h3>
                <p className="text-slate-800">
                  IMS Engineering College — Ghaziabad, Uttar Pradesh, India (Final Grade: 69%)
                </p>
              </div>
              <div className="font-bold text-black whitespace-nowrap">2015 – 2019</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

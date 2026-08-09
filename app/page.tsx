"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { ProjectCard, ProjectData } from "@/components/project-card";
import { OpenSourceCard, OpenSourceItem } from "@/components/opensource-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { format, differenceInYears, differenceInMonths } from "date-fns";
import {
  Briefcase,
  GraduationCap,
  Award,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Share2,
  FileText,
  Github,
  Terminal,
  Server,
  ShieldCheck,
  Zap,
  Code,
  Layers,
  Cpu,
  Cloud,
  CheckCircle2,
  GitBranch,
  FileCode2,
  Users,
  Sparkles,
} from "lucide-react";

export default function Home() {
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

  const totalExperience = calculateYearMonthExperience("2019-01-01");

  const formatDateRange = (startDate: string, endDate?: string) => {
    const start = format(new Date(startDate), "MMM yyyy");
    const end = endDate ? format(new Date(endDate), "MMM yyyy") : "Present";
    return `${start} - ${end}`;
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Akash Roshan Chaurasia — Portfolio & Resume",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Portfolio link copied to clipboard!");
      }
    } catch (error) {
      toast.error("Failed to share link.");
    }
  };

  // Categorized Technical Skills (Modern Stack - PHP/Laravel/WHMCS removed as requested)
  const skillCategories = [
    {
      title: "Frontend Architecture & UI",
      skills: [
        { name: "Next.js", exp: "7 years" },
        { name: "React Query", exp: "6 years" },
        { name: "Redux / State Management", exp: "7 years" },
        { name: "TypeScript / JavaScript", exp: "7 years" },
        { name: "Tailwind CSS / UI Components", exp: "5 years" },
        { name: "jQuery", exp: "7 years" },
      ],
    },
    {
      title: "Backend & Microservices",
      skills: [
        { name: "NestJS", exp: "7 years" },
        { name: "Node.js Ecosystem", exp: "7 years" },
        { name: "BullMQ / Task Queues", exp: "3 years" },
        { name: "REST APIs & Webhooks", exp: "7 years" },
        { name: "Asterisk / VoIP Telephony", exp: "2 years" },
        { name: "Electron", exp: "1 year" },
      ],
    },
    {
      title: "Cloud Native & DR Infrastructure",
      skills: [
        { name: "OpenStack Cloud Infrastructure", exp: "4 years" },
        { name: "Commvault Disaster Recovery", exp: "2 years" },
        { name: "NetApp Snapmirror", exp: "2 years" },
        { name: "Docker Containerization", exp: "7 years" },
        { name: "Sentry Error Tracking", exp: "4 years" },
        { name: "AI-Driven Dev Tools & LLM Workflows", exp: "2 years" },
      ],
    },
    {
      title: "Databases & Storage Architecture",
      skills: [
        { name: "MySQL", exp: "7 years" },
        { name: "MongoDB", exp: "7 years" },
        { name: "Instance Volume Backups", exp: "4 years" },
        { name: "Multi-site Inventory Sync", exp: "3 years" },
      ],
    },
  ];

  // Engineering Projects
  const projects: ProjectData[] = [
    {
      id: "dr-automation",
      title: "Enterprise Disaster Recovery Automation Engine",
      tagline: "Automated multi-region disaster recovery for cloud instances utilizing Commvault and NetApp Snapmirror integration.",
      role: "Lead Architect & Team Lead",
      category: "Cloud Infrastructure / DR",
      problem: "Customers required reliable, automated RPO/RTO disaster recovery workflows for cloud instances with complex storage replication across geographically separated infrastructure.",
      solution: "Engineered a Disaster Recovery orchestration service in NestJS & OpenStack integrating Commvault APIs and NetApp Snapmirror snapshot replication.",
      technicalApproach: "Architected asynchronous background jobs using BullMQ to handle snapshot replication, failover testing, automated volume provisioning, and health reporting. Integrated Sentry for real-time alerting.",
      impact: [
        "Delivered enterprise-grade Disaster Recovery offering for cloud customers",
        "Significantly reduced manual recovery procedures and downtime during failover tests",
        "Standardized multi-tenant DR deployment best practices across engineering teams",
      ],
      techStack: ["NestJS", "Commvault", "NetApp Snapmirror", "OpenStack", "BullMQ", "Sentry"],
      featured: true,
    },
    {
      id: "auto-scaling-backups",
      title: "OpenStack Auto-Scaling & Automated Volume Backup Service",
      tagline: "High-availability instance auto-scaling policies and automated volume snapshot orchestration.",
      role: "Team Lead 2",
      category: "Cloud Automation",
      problem: "Production workloads experienced load spikes and needed automated volume snapshotting without degrading compute instance performance.",
      solution: "Developed native auto-scaling hooks and scheduled volume backup pipelines managing compute instance scaling groups and block storage snapshots.",
      technicalApproach: "Leveraged Next.js frontends and NestJS backend microservices interfacing with OpenStack APIs, MySQL metrics storage, and BullMQ queue scheduling.",
      impact: [
        "Ensured seamless compute scaling under peak traffic spikes",
        "Automated backup lifecycle retention policies across customer instance volumes",
      ],
      techStack: ["Next.js", "NestJS", "OpenStack", "MySQL", "BullMQ", "Docker"],
      featured: true,
    },
    {
      id: "telephony-dialplan",
      title: "Enterprise Custom Dial Plan (CDP) & IVR Telephony Engine",
      tagline: "API-driven call routing, broadcast IVR flows, and dynamic webhook integrations for enterprise call centers.",
      role: "Software Engineer",
      category: "VoIP & Communications",
      problem: "Call center clients required customized call flow logic, real-time lead distribution, and webhooks for CRM integrations.",
      solution: "Implemented customized dialplan flows (CDP), IVR broadcast routing, and webhook event dispatchers on Asterisk PBX infrastructure.",
      technicalApproach: "Built API dialplan handlers and dynamic call routing triggers connecting telephony events to enterprise CRM backends.",
      impact: [
        "Enabled custom IVR and broadcast campaigns for enterprise clients",
        "Streamlined call queue management and webhooks event delivery",
      ],
      techStack: ["Asterisk", "Node.js", "MySQL", "Webhooks", "REST APIs"],
      featured: false,
    },
    {
      id: "ecommerce-logistics",
      title: "High-Volume E-Commerce Platform & Logistics Engine",
      tagline: "Multi-site order processing, supplier delivery management, and automated shipping integrations for uksoccershop.com.",
      role: "Software Developer",
      category: "E-Commerce & Logistics",
      problem: "High order volume required automated carrier dispatching, inventory sync, and multi-marketplace integrations across Amazon and Google Shopping.",
      solution: "Engineered core modules for Supplier Delivery Management, Shipment Processing, PDF documentation generation, and Amazon MWS bulk feeds.",
      technicalApproach: "Built custom extensions in CakePHP, ZenCart, and jQuery, utilizing PHPExcel, WKHTMLTOPDF, and carrier APIs (DHL, Royal Mail, Spring Global).",
      impact: [
        "Processed high-throughput daily e-commerce shipments across international carriers",
        "Integrated bulk product catalog upload feeds for Amazon Seller Central and Cratejoy",
      ],
      techStack: ["CakePHP", "ZenCart", "jQuery", "MySQL", "Amazon MWS API", "Jenkins"],
      featured: false,
    },
  ];

  // Verified Open Source Contributions (Expanded OpenDev + Fixed npm)
  const openSourceItems: OpenSourceItem[] = [
    {
      platform: "OpenDev",
      title: "OpenDev / OpenStack Infrastructure Contributions",
      subtitle: "Gerrit Code Reviewer & Uploader • OpenStack Infrastructure",
      verifiedDetails: "Authored patch: 'Retry and record fault on network cleanup failure' (OpenStack Nova Bug #2161972) handling Neutron port deletion retries during instance build/reschedule. Participated in OpenDev Gerrit reviews.",
      context: "Public open-source infrastructure contributions through code review and patches on OpenDev Gerrit, enhancing Nova compute resilience and network fault recovery.",
      technologies: ["OpenStack Nova", "Python", "Neutron Networking", "Gerrit Code Review"],
      linkUrl: "https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com",
      linkText: "View OpenDev Contributions",
      statusBadge: "Verified Patches",
    },
    {
      platform: "GitHub",
      title: "swagger-mcp Repository Contribution",
      subtitle: "Repository: danishjsheikh/swagger-mcp • Pull Request #7",
      verifiedDetails: "Authored and merged Pull Request #7 ('swaggerV3Support') adding OpenAPI 3.0 specification support to the Model Context Protocol (MCP) server.",
      context: "Contributed OpenAPI v3 spec parsing capabilities enabling LLMs and AI agents to dynamically generate tools from modern Swagger/OpenAPI endpoints.",
      technologies: ["Model Context Protocol (MCP)", "TypeScript", "OpenAPI 3.0", "Swagger"],
      linkUrl: "https://github.com/danishjsheikh/swagger-mcp",
      linkText: "View Repository & PR #7",
      statusBadge: "Merged PR #7",
    },
    {
      platform: "npm",
      title: "Open Source npm Profile",
      subtitle: "npm Account: ~akash_roshan",
      verifiedDetails: "Public open-source developer profile on npm (~akash_roshan) for JavaScript/Node.js package management and ecosystem contributions.",
      context: "Participates in the broader JavaScript package ecosystem through public npm profile tracking and open-source Node module distribution.",
      technologies: ["Node.js", "npm Registry", "JavaScript Modules"],
      linkUrl: "https://www.npmjs.com/~akash_roshan",
      linkText: "View npm Profile",
      statusBadge: "Verified Profile",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />

      <main id="main-content" className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 w-full">
        {/* HERO SECTION */}
        <section id="hero" className="pt-8 sm:pt-14 pb-8 border-b border-slate-800/60 relative">
          {/* Subtle Background Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Team Lead 2 @ AceCloud • Gurgaon, India</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
                Architecting <span className="gradient-text">Resilient Cloud Infrastructure</span> & Leading High-Scale Engineering Teams
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                <strong className="text-slate-100 font-semibold">Team Lead 2 — Software Development</strong> with <span className="font-semibold text-cyan-300">{totalExperience} of experience</span> leading cross-functional developer teams, driving AI-driven development workflows, executing zero-downtime releases, and engineering automated Disaster Recovery cloud infrastructure.
              </p>

              {/* Leadership Capability Badges */}
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" /> Team Leadership & Mentorship
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> AI-Driven Development
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-emerald-400" /> Code Reviews & Release Execution
                </span>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#projects">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 shadow-lg shadow-cyan-500/20">
                    <Layers className="w-4 h-4 mr-2" />
                    View Featured Projects
                  </Button>
                </a>
                <a href="#open-source">
                  <Button size="lg" variant="outline" className="border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold px-6">
                    <ShieldCheck className="w-4 h-4 mr-2 text-cyan-400" />
                    Open Source Contributions
                  </Button>
                </a>
                <Button size="lg" variant="ghost" onClick={handleDownloadPDF} className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 print:hidden">
                  <Download className="w-4 h-4 mr-2" />
                  Print / Save PDF
                </Button>
              </div>

              {/* Quick Profile Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60 text-xs text-slate-400 font-mono flex-wrap">
                <a href="https://github.com/akash-roshan-chaurasia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Github className="w-4 h-4" /> github.com/akash-roshan-chaurasia
                </a>
                <span className="text-slate-700">•</span>
                <a href="https://www.linkedin.com/in/akash-roshan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-4 h-4" /> linkedin.com/in/akash-roshan
                </a>
                <span className="text-slate-700">•</span>
                <a href="mailto:akashroshanchaurasia@gmail.com" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" /> akashroshanchaurasia@gmail.com
                </a>
              </div>
            </div>

            {/* Hero Right — Code / Terminal Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 shadow-2xl relative overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> akash_profile.ts
                  </span>
                </div>

                {/* Terminal Snippet */}
                <div className="space-y-2 text-slate-300">
                  <div>
                    <span className="text-cyan-400">const</span> leadershipProfile = {"{"}
                  </div>
                  <div className="pl-4">
                    name: <span className="text-emerald-300">&quot;Akash Roshan Chaurasia&quot;</span>,
                  </div>
                  <div className="pl-4">
                    title: <span className="text-emerald-300">&quot;Team Lead 2 — Software Development&quot;</span>,
                  </div>
                  <div className="pl-4">
                    company: <span className="text-emerald-300">&quot;AceCloud | RTDS&quot;</span>,
                  </div>
                  <div className="pl-4">
                    totalExperience: <span className="text-amber-300">&quot;7+ Years&quot;</span>,
                  </div>
                  <div className="pl-4">
                    leadershipFocus: [
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &quot;AI-Driven Development Workflows&quot;,
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &quot;Code Reviews &amp; Architecture Standards&quot;,
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &quot;Release Execution &amp; CI/CD Governance&quot;,
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &quot;Disaster Recovery &amp; Cloud Systems&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    primaryStack: [
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &quot;Next.js&quot;, &quot;NestJS&quot;, &quot;OpenStack&quot;, &quot;Commvault&quot;,
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &quot;NetApp Snapmirror&quot;, &quot;BullMQ&quot;, &quot;MySQL&quot;, &quot;MongoDB&quot;
                  </div>
                  <div className="pl-4">]</div>
                  <div>{"}"};</div>
                </div>

                {/* Footer Status Pill */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Engineering Management &amp; Director Roles
                  </span>
                  <span>Gurgaon, HR, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / EXECUTIVE SUMMARY SECTION */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" /> Technical Leadership &amp; Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Leadership Summary</h2>
          </div>

          <Card className="glass-card p-6 sm:p-8 rounded-2xl border-slate-800/80 space-y-6">
            <p className="text-slate-300 text-base leading-relaxed">
              As <strong className="text-slate-100 font-semibold">Team Lead 2 at AceCloud (Real Time Data Services)</strong>, I drive end-to-end software engineering execution, supervising developer and QA teams to deliver enterprise-grade cloud native platforms. With over 7 years of engineering experience, I specialize in <span className="text-cyan-300">AI-driven development workflows</span>, <span className="text-cyan-300">architectural code reviews</span>, <span className="text-cyan-300">release execution and deployment governance</span>, and building high-availability cloud disaster recovery systems using Next.js, NestJS, MySQL, MongoDB, and OpenStack.
            </p>

            {/* Bento Grid Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100">Team Management &amp; Mentorship</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Leading developer and QA teams, aligning sprint objectives with Scrum Masters and Product Owners, and building high-performing engineering culture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/50">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100">AI-Driven Development</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrating AI tools, LLM-assisted workflows, and automated prompt engineering into team practices to increase velocity and code quality.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100">Code Reviews &amp; Release Execution</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Establishing strict code review standards, release validation pipelines, risk mitigation, and executing zero-downtime production releases.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                <div className="p-2 w-fit rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800/50">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-100">Disaster Recovery &amp; Cloud Storage</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Architected customer DR offerings leveraging Commvault best practices, NetApp Snapmirror replication, and OpenStack volume auto-scaling.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Award className="w-4 h-4" /> Technical Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills &amp; Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-4">
                <h3 className="text-base font-bold text-slate-100 border-b border-slate-800/80 pb-2 flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  {cat.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/60 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                        {skill.exp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Career Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Professional Experience</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-0.5 before:bg-slate-800">
            {/* AceCloud — Team Lead 2 */}
            <div className="relative pl-8 sm:pl-12 space-y-3">
              <div className="absolute left-1.5 sm:left-4 -top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#080b11]" />

              <div className="glass-card p-6 rounded-xl border-slate-800/80 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">Team Lead 2 — Software Development</h3>
                    <p className="text-sm text-cyan-400 font-semibold">AceCloud | Real Time Data Services, Gurgaon, India</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Experience: {calculateYearMonthExperience("2025-10-01")}
                    </p>
                  </div>
                  <Badge className="bg-cyan-950 text-cyan-300 border-cyan-800 font-mono text-xs">
                    {formatDateRange("2025-10-01")}
                  </Badge>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed">
                  <li><strong className="text-slate-100">Team Management &amp; Technical Guidance:</strong> Leading and supervising a cross-functional team of software developers and QA engineers, establishing strategic project goals, mentorship pipelines, and delivery schedules.</li>
                  <li><strong className="text-slate-100">AI-Driven Development Workflows:</strong> Driving AI-assisted development practices, automated prompt workflows, and AI coding tools across the engineering team to accelerate sprint velocity and code quality.</li>
                  <li><strong className="text-slate-100">Code Reviews &amp; Quality Governance:</strong> Enforcing strict peer code reviews, architectural guidelines, static analysis checks, and technical debt remediation to maintain high system reliability.</li>
                  <li><strong className="text-slate-100">Executing Releases &amp; CI/CD Pipelines:</strong> Managing end-to-end production release execution, deployment workflows, risk assessments, and zero-downtime deployment pipelines.</li>
                  <li><strong className="text-slate-100">Disaster Recovery &amp; Cloud Infrastructure:</strong> Architected Disaster Recovery offerings using Commvault deployment best practices, NetApp Snapmirror integration, and OpenStack instance volume Auto Scaling and Automated Backups.</li>
                  <li><strong className="text-slate-100">Core Technology Stack:</strong> Next.js, NestJS, React Query, MySQL, MongoDB, BullMQ, NetApp, Commvault, Sentry, Docker, and OpenStack.</li>
                </ul>
              </div>
            </div>

            {/* AceCloud — Assistant Team Lead */}
            <div className="relative pl-8 sm:pl-12 space-y-3">
              <div className="absolute left-1.5 sm:left-4 -top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#080b11]" />

              <div className="glass-card p-6 rounded-xl border-slate-800/80 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">Assistant Team Lead — Software Development</h3>
                    <p className="text-sm text-cyan-400 font-semibold">AceCloud | Real Time Data Services, Gurgaon, India</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Experience: {calculateYearMonthExperience("2022-11-01", "2025-09-30")}
                    </p>
                  </div>
                  <Badge variant="outline" className="border-slate-700 text-slate-300 font-mono text-xs">
                    {formatDateRange("2022-11-01", "2025-09-30")}
                  </Badge>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed">
                  <li>Supervised developer team, conducted architectural code reviews, and resolved complex production environment challenges.</li>
                  <li>Engineered Auto Scaling and Volume Backup integration services for cloud instances in OpenStack.</li>
                  <li>Formulated customer Disaster Recovery architecture using Commvault deployment best practices.</li>
                  <li>Utilized Next.js, NestJS, React Query, MySQL, MongoDB, Sentry, and OpenStack.</li>
                </ul>
              </div>
            </div>

            {/* Acefone — Software Engineer */}
            <div className="relative pl-8 sm:pl-12 space-y-3">
              <div className="absolute left-1.5 sm:left-4 -top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#080b11]" />

              <div className="glass-card p-6 rounded-xl border-slate-800/80 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">Software Engineer</h3>
                    <p className="text-sm text-cyan-400 font-semibold">Real Time Data Services (Acefone), Gurugram, India</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Experience: {calculateYearMonthExperience("2021-05-01", "2022-10-31")}
                    </p>
                  </div>
                  <Badge variant="outline" className="border-slate-700 text-slate-300 font-mono text-xs">
                    {formatDateRange("2021-05-01", "2022-10-31")}
                  </Badge>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed">
                  <li>Implemented IVR broadcast call flows, inbound/outbound call routing solutions, and webhook dispatching.</li>
                  <li>Developed Customized Dial Plan flow (CDP) for enterprise telephony clients.</li>
                  <li>Integrated API dialplans and dynamic webhook solutions for CRM software integrations.</li>
                </ul>
              </div>
            </div>

            {/* Velocity Software Solutions — Software Developer */}
            <div className="relative pl-8 sm:pl-12 space-y-3">
              <div className="absolute left-1.5 sm:left-4 -top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-[#080b11]" />

              <div className="glass-card p-6 rounded-xl border-slate-800/80 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">Software Developer</h3>
                    <p className="text-sm text-cyan-400 font-semibold">Velocity Software Solutions, Noida, India</p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      Experience: {calculateYearMonthExperience("2019-01-01", "2021-05-31")}
                    </p>
                  </div>
                  <Badge variant="outline" className="border-slate-700 text-slate-300 font-mono text-xs">
                    {formatDateRange("2019-01-01", "2021-05-31")}
                  </Badge>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 leading-relaxed">
                  <li>Engineered key e-commerce modules including Supplier Delivery Management, Shipment Processing, Order Management, and Inventory Control for uksoccershop.com.</li>
                  <li>Integrated product catalog &amp; order management with Cratejoy platform (geekgearbox.com).</li>
                  <li>Built PDF generation services utilizing WKHTMLTOPDF, TCPDF, and PHPExcel libraries.</li>
                  <li>Integrated Amazon MWS API for bulk product catalog uploads and Google Shopping feed sync.</li>
                  <li>Integrated shipping carriers including DHL, Spring Global, Norsk Global, and Royal Mail.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Systems &amp; Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Engineering Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </section>

        {/* OPEN SOURCE CONTRIBUTIONS SECTION */}
        <section id="open-source" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Verified Ecosystem Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Open Source Contributions</h2>
          </div>

          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Active participant in public software ecosystems, contributing code patches and reviews to OpenStack Nova via OpenDev Gerrit, enhancing Model Context Protocol tools on GitHub, and maintaining open-source developer profiles.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {openSourceItems.map((item) => (
              <OpenSourceCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
          </div>

          <Card className="glass-card p-6 rounded-xl border-slate-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-100">B.Tech in Computer Science and Engineering</h3>
              <p className="text-sm text-cyan-400">IMS Engineering College - Ghaziabad</p>
              <p className="text-xs text-slate-400">Final Grade: 69%</p>
            </div>
            <Badge variant="outline" className="border-slate-700 text-slate-300 font-mono text-xs">
              {formatDateRange("2015-01-01", "2019-06-30")}
            </Badge>
          </Card>
        </section>

        {/* FOOTPRINT / VERIFIED LINKS */}
        <section id="footprint" className="glass-card p-8 rounded-2xl border-slate-800/80 space-y-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">Engineering Footprint</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Direct public verification links connecting professional experience, open-source commits, pull requests, and public profiles.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
            <a href="https://github.com/akash-roshan-chaurasia" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 flex items-center gap-2 transition-colors">
              <Github className="w-4 h-4" /> GitHub: akash-roshan-chaurasia
            </a>
            <a href="https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 flex items-center gap-2 transition-colors">
              <GitBranch className="w-4 h-4 text-amber-400" /> OpenDev Gerrit Profile
            </a>
            <a href="https://www.npmjs.com/~akash_roshan" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 flex items-center gap-2 transition-colors">
              <Code className="w-4 h-4 text-rose-400" /> npm Profile (~akash_roshan)
            </a>
            <a href="https://www.linkedin.com/in/akash-roshan/" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 flex items-center gap-2 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn: akash-roshan
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Mail className="w-4 h-4" /> Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Contact &amp; Engineering Leadership Opportunities</h2>
          </div>

          <div className="glass-card p-8 rounded-2xl border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-100">Let&apos;s discuss technical leadership and engineering execution</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Available for discussions around Engineering Management, Director of Engineering, CTO roles, disaster recovery architecture, and AI-driven development leadership.
              </p>
              <div className="space-y-2.5 text-sm font-mono text-slate-300 pt-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:akashroshanchaurasia@gmail.com" className="hover:text-cyan-300 hover:underline">
                    akashroshanchaurasia@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+918802076664" className="hover:text-cyan-300 hover:underline">
                    +91-8802076664
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Gurgaon, HR, India 122016</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center bg-slate-950/60 p-6 rounded-xl border border-slate-800/80">
              <a href="mailto:akashroshanchaurasia@gmail.com" className="w-full">
                <Button size="lg" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">
                  <Mail className="w-4 h-4 mr-2" /> Send Email
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={handleShare} className="w-full border-slate-700 bg-slate-900 text-slate-200">
                <Share2 className="w-4 h-4 mr-2 text-cyan-400" /> Share Portfolio
              </Button>
              <Button size="lg" variant="ghost" onClick={handleDownloadPDF} className="w-full text-slate-400 hover:text-slate-100 print:hidden">
                <Download className="w-4 h-4 mr-2" /> Print / Save PDF Resume
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 bg-[#06080d] text-xs text-slate-400 font-mono text-center space-y-2">
        <p>© {new Date().getFullYear()} Akash Roshan Chaurasia. All rights reserved.</p>
        <p className="text-slate-400">
          Team Lead 2 (Software Development) • Deployed via GitHub Pages
        </p>
      </footer>
    </div>
  );
}
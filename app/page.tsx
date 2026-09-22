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
  Database,
  HardDrive,
  RefreshCw,
  Sliders,
  UserCheck,
  ArrowRight,
  ChevronRight,
  Activity,
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
          title: "Akash Roshan Chaurasia — Team Lead 2 | Cloud Platform & Backend Engineering",
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

  // Primary Technical Skills Categories (Clean, Modern, No Legacy Techs as Primary)
  const primarySkillCategories = [
    {
      title: "Backend Architecture & APIs",
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: "Node.js", tag: "Runtime Core" },
        { name: "NestJS", tag: "Microservices" },
        { name: "TypeScript", tag: "Type Safety" },
        { name: "REST APIs", tag: "Integration" },
        { name: "BullMQ", tag: "Asynchronous Queues" },
        { name: "Microservices", tag: "Distributed Systems" },
      ],
    },
    {
      title: "Cloud Platform & Automation",
      icon: <Cloud className="w-4 h-4 text-sky-400" />,
      skills: [
        { name: "OpenStack APIs", tag: "Platform Layer" },
        { name: "Nova Compute", tag: "Instance Lifecycle" },
        { name: "Cinder Storage", tag: "Block Storage" },
        { name: "Heat Stacks", tag: "Autoscaling & Templates" },
        { name: "Cloud Automation", tag: "Provisioning" },
        { name: "Multi-Region Architecture", tag: "Geo Redundancy" },
      ],
    },
    {
      title: "Disaster Recovery & Storage",
      icon: <HardDrive className="w-4 h-4 text-indigo-400" />,
      skills: [
        { name: "Commvault", tag: "DR Orchestration" },
        { name: "NetApp SnapMirror", tag: "Replication" },
        { name: "NetApp ONTAP", tag: "Enterprise Storage" },
        { name: "Disaster Recovery", tag: "Failover & Drills" },
        { name: "RPO / RTO Optimization", tag: "40% Cut" },
        { name: "Automated Snapshots", tag: "Volume Backups" },
      ],
    },
    {
      title: "Frontend & Web Engineering",
      icon: <Code className="w-4 h-4 text-emerald-400" />,
      skills: [
        { name: "Next.js", tag: "App Architecture" },
        { name: "React", tag: "Component UI" },
        { name: "React Query", tag: "State Sync & Cache" },
        { name: "Tailwind CSS", tag: "Design Systems" },
        { name: "Redux", tag: "Client State" },
        { name: "Responsive UI", tag: "Cross-Platform" },
      ],
    },
    {
      title: "Databases & Data Infrastructure",
      icon: <Database className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: "MySQL", tag: "Relational & Indexing" },
        { name: "MongoDB", tag: "Document Store" },
        { name: "Data Modeling", tag: "Schema Optimization" },
        { name: "Multi-Site Sync", tag: "Inventory & State" },
      ],
    },
    {
      title: "Engineering Execution & Tooling",
      icon: <Sliders className="w-4 h-4 text-rose-400" />,
      skills: [
        { name: "Docker", tag: "Containerization" },
        { name: "CI / CD Pipelines", tag: "Zero-Downtime" },
        { name: "Git & Code Reviews", tag: "Quality Gates" },
        { name: "Sentry", tag: "Telemetry & Alerting" },
        { name: "AI-Assisted Dev", tag: "+35% Velocity" },
        { name: "Model Context Protocol (MCP)", tag: "OpenAPI" },
      ],
    },
  ];

  // Engineering Projects & Platform Case Studies
  const platformProjects: ProjectData[] = [
    {
      id: "cloud-platform-provisioning",
      title: "Cloud Platform Provisioning & Lifecycle Engine",
      tagline: "High-scale multi-region instance lifecycle workflows and infrastructure APIs built on top of OpenStack APIs.",
      role: "Team Lead 2 — Software Development",
      category: "Cloud Platform Product",
      problem: "Customers required fast, automated, self-service provisioning of compute instances, network attachments, and attached block volumes across geographically distributed regions without operational friction.",
      solution: "Engineered high-throughput platform services in Node.js/NestJS that integrate with OpenStack Nova, Cinder, Neutron, and Keystone APIs to coordinate end-to-end cloud provisioning workflows.",
      technicalApproach: "Built idempotent microservices with NestJS handling multi-region tenant quota validation, stateful instance provisioning, volume attach/detach orchestration, and real-time lifecycle event hooks. Integrated BullMQ queues for asynchronous job execution and Sentry for error tracking.",
      impact: [
        "Enabled unified cloud control plane powering self-service provisioning across multiple data centers",
        "Streamlined instance creation and storage attachment workflows with automated error-recovery rollbacks",
        "Established core backend architecture serving customer portal and internal operational toolchains",
      ],
      techStack: ["Node.js", "NestJS", "TypeScript", "OpenStack APIs (Nova, Cinder)", "BullMQ", "Docker", "MySQL"],
      featured: true,
    },
    {
      id: "dr-automation-engine",
      title: "Enterprise Disaster Recovery Orchestration Engine",
      tagline: "Automated multi-region DR orchestration integrating Commvault and NetApp SnapMirror on top of OpenStack.",
      role: "Team Lead 2 — Software Development",
      category: "Disaster Recovery",
      problem: "Enterprise cloud workloads required stringent RPO and RTO compliance with automated failover, replication verification, and disaster recovery drills across geographically separate cloud availability zones.",
      solution: "Architected and built a dedicated Disaster Recovery orchestration service in NestJS on top of OpenStack APIs, integrating Commvault backup APIs and NetApp SnapMirror storage replication.",
      technicalApproach: "Designed BullMQ-driven asynchronous workflows for scheduled snapshot replication, continuous replication health telemetry, one-click planned failover, emergency unplanned failover, automated failback, and non-disruptive DR drills.",
      impact: [
        "Cut failover Recovery Time Objective (RTO) by 40% and eliminated manual recovery errors",
        "Automated continuous replication monitoring and cross-region DR drill execution",
        "Delivered enterprise-grade Disaster Recovery product offering adopted across mission-critical customer tenants",
      ],
      techStack: ["NestJS", "Commvault APIs", "NetApp SnapMirror", "OpenStack", "BullMQ", "TypeScript", "Sentry"],
      featured: true,
    },
    {
      id: "heat-autoscaling-service",
      title: "OpenStack Heat Autoscaling & Volume Backup Service",
      tagline: "Workload autoscaling via OpenStack Heat stacks and policy-based scheduled volume backup automation.",
      role: "Team Lead 2 — Software Development",
      category: "Cloud Automation",
      problem: "Dynamic customer workloads encountered traffic spikes requiring automated compute instance scaling, alongside critical needs for automated block storage snapshot retention without service interruption.",
      solution: "Engineered automated workload scaling orchestration using OpenStack Heat stacks and built a scheduled instance volume backup service managing 500+ cloud instances.",
      technicalApproach: "Implemented backend scheduling microservices interfacing with OpenStack Heat stack APIs, compute scaling groups, and Cinder volume snapshot workflows, supported by Next.js customer management interfaces.",
      impact: [
        "Automated horizontal compute scaling and snapshot retention lifecycles across 500+ cloud compute instances",
        "Reduced customer storage operations overhead through configurable automated snapshot policies",
        "Provided real-time metrics and status dashboards via Next.js and NestJS APIs",
      ],
      techStack: ["Next.js", "NestJS", "OpenStack Heat", "OpenStack Cinder", "BullMQ", "MySQL", "Docker"],
      featured: true,
    },
    {
      id: "smart-gpu-scheduling",
      title: "Smart GPU Flavor Scheduling Engine",
      tagline: "Capacity-aware GPU flavor scheduling to match available cloud capacity with suitable launchable customer options.",
      role: "Team Lead 2 — Software Development",
      category: "Cloud Resource Scheduling",
      problem: "High customer demand for GPU instances required an automated mechanism to prevent provisioning failures by discovering real-time GPU hardware availability before user launch.",
      solution: "Implemented smart GPU flavor scheduling to identify suitable GPU options based on available capacity.",
      technicalApproach: "Engineered capacity assessment routines in NestJS backend services that evaluate active resource availability across compute clusters and present only verified launchable flavor options to customers.",
      impact: [
        "Eliminated failed launch attempts and improved customer onboarding for AI/ML GPU compute workloads",
        "Optimized GPU fleet allocation and hardware utilization across cloud clusters",
      ],
      techStack: ["NestJS", "Node.js", "OpenStack APIs", "TypeScript", "REST APIs"],
      featured: false,
    },
  ];

  // Historical Career Projects (Factually Accurate)
  const historicalProjects: ProjectData[] = [
    {
      id: "telephony-dialplan",
      title: "Enterprise Custom Dial Plan (CDP) & IVR Telephony Engine",
      tagline: "High-throughput call routing, broadcast IVR flows, and CRM webhooks for 500+ enterprise clients.",
      role: "Software Engineer (Acefone)",
      category: "Communications & VoIP",
      problem: "Enterprise call centers required customized dynamic routing logic, broadcast IVR flows, and real-time CRM webhook event dispatching.",
      solution: "Implemented customized dialplan flows (CDP), IVR broadcast routing, and webhook event dispatchers on Asterisk PBX infrastructure.",
      technicalApproach: "Built API dialplan handlers connecting telephony events to enterprise CRM backends with real-time webhook delivery.",
      impact: [
        "Processed 100,000+ daily inbound/outbound calls across 500+ enterprise CRM clients",
        "Improved call queue delivery efficiency by 25%",
      ],
      techStack: ["Asterisk PBX", "Node.js", "MySQL", "Webhooks", "REST APIs"],
      featured: false,
    },
    {
      id: "ecommerce-logistics",
      title: "High-Volume E-Commerce Platform & Logistics Engine",
      tagline: "Multi-site order processing, automated dispatch, and shipping carrier integrations for uksoccershop.com.",
      role: "Software Developer (Velocity)",
      category: "E-Commerce & Logistics",
      problem: "High order volume required automated carrier dispatching, inventory synchronization, and marketplace feeds across Amazon and Google Shopping.",
      solution: "Engineered core modules for Supplier Delivery Management, Shipment Processing, invoice generation, and Amazon MWS bulk feeds.",
      technicalApproach: "Built custom extensions in CakePHP, ZenCart, and jQuery, utilizing WKHTMLTOPDF and international carrier APIs (DHL, Royal Mail, Spring Global).",
      impact: [
        "Processed 50,000+ monthly orders and 10,000+ daily PDF invoices",
        "Automated 95%+ of shipping label dispatch across 4 international carriers",
      ],
      techStack: ["CakePHP", "ZenCart", "jQuery", "MySQL", "Amazon MWS API", "Jenkins"],
      featured: false,
    },
  ];

  // Verified Open Source Contributions
  const openSourceItems: OpenSourceItem[] = [
    {
      platform: "OpenDev",
      title: "OpenStack Core Infrastructure Patches (Cinder & Nova)",
      subtitle: "5 Verified OpenStack Patches • OpenDev Gerrit Code Reviews",
      verifiedDetails: "Authored 5 key OpenStack patches: 1) Cinder NetApp ONTAP LUN name preservation, 2) Cinder backup HTTP 409 conflict handling, 3) Nova network cleanup failure retries (Bug #2161972), 4) Cinder NetApp ONTAP SSC refresh interval, 5) Cinder invalid host startup fail-fast.",
      context: "Public open-source contributions enhancing OpenStack block storage (Cinder) and compute (Nova) reliability, NetApp ONTAP driver features, and fault isolation in enterprise cloud infrastructure.",
      technologies: ["OpenStack Cinder", "OpenStack Nova", "Python", "NetApp ONTAP", "Gerrit Code Review"],
      linkUrl: "https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com",
      linkText: "View All 5 OpenDev Patches",
      statusBadge: "5 OpenStack Patches",
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
      title: "Open Source npm Developer Profile",
      subtitle: "npm Developer Account: ~akash_roshan",
      verifiedDetails: "Verified public open-source developer profile (~akash_roshan) on the official npm registry.",
      context: "Maintains an active presence in the Node.js open-source packaging and module ecosystem.",
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
        
        {/* =================================================================== */}
        {/* 1. HERO SECTION */}
        {/* =================================================================== */}
        <section id="hero" className="pt-8 sm:pt-14 pb-8 border-b border-slate-800/60 relative">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Team Lead 2 @ AceCloud • Gurgaon, India • ~7.5 Years Exp</span>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Engineering Leadership &amp; Platform Architecture
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
                  Team Lead 2 <span className="text-slate-500 font-normal">|</span>{" "}
                  <span className="gradient-text">Cloud Platform &amp; Backend Engineering</span>
                </h1>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Building cloud platforms, backend systems and automation on top of OpenStack APIs with Node.js/NestJS, Next.js, Disaster Recovery, Commvault, NetApp and cloud resource scheduling.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-400" /> Hands-on Engineering Leader
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-sky-400" /> OpenStack API Product Engineering
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <HardDrive className="w-3.5 h-3.5 text-indigo-400" /> Disaster Recovery Orchestration
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" /> 200+ Technical Interviews
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#platform">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 shadow-lg shadow-cyan-500/20">
                    <Layers className="w-4 h-4 mr-2" />
                    View Cloud Platform Work
                  </Button>
                </a>
                <Link href="/ats">
                  <Button size="lg" variant="outline" className="border-cyan-500/40 bg-slate-900/80 hover:bg-slate-800 text-cyan-300 font-semibold px-6">
                    <FileCode2 className="w-4 h-4 mr-2 text-cyan-400" />
                    View 3 ATS Resumes
                  </Button>
                </Link>
                <Button size="lg" variant="ghost" onClick={handleDownloadPDF} className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 print:hidden">
                  <Download className="w-4 h-4 mr-2" />
                  Print / Save PDF
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60 text-xs text-slate-400 font-mono flex-wrap">
                <a href="https://github.com/akash-roshan-chaurasia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Github className="w-4 h-4" /> github.com/akash-roshan-chaurasia
                </a>
                <span className="text-slate-700">•</span>
                <a href="https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <GitBranch className="w-4 h-4 text-amber-400" /> OpenDev Gerrit (5 OpenStack Patches)
                </a>
                <span className="text-slate-700">•</span>
                <a href="https://www.linkedin.com/in/akash-roshan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-4 h-4" /> linkedin.com/in/akash-roshan
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 shadow-2xl relative overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> engineering_identity.ts
                  </span>
                </div>

                <div className="space-y-2 text-slate-300">
                  <div>
                    <span className="text-cyan-400">const</span> engineeringLeader = {"{"}
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
                    corePhilosophy: <span className="text-cyan-300">&quot;I build and lead cloud software platforms.&quot;</span>,
                  </div>
                  <div className="pl-4">
                    primaryStack: [
                  </div>
                  <div className="pl-8 text-slate-400">
                    &quot;Node.js&quot;, &quot;NestJS&quot;, &quot;TypeScript&quot;, &quot;OpenStack APIs&quot;,
                  </div>
                  <div className="pl-8 text-slate-400">
                    &quot;Next.js&quot;, &quot;Commvault DR&quot;, &quot;NetApp SnapMirror&quot;, &quot;BullMQ&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    quantifiedMetrics: {"{"}
                  </div>
                  <div className="pl-8">
                    teamLeadership: <span className="text-emerald-300">&quot;Coordinating Dev &amp; QA Engineers&quot;</span>,
                  </div>
                  <div className="pl-8">
                    technicalInterviews: <span className="text-emerald-300">&quot;200+ Candidates Interviewed&quot;</span>,
                  </div>
                  <div className="pl-8">
                    zeroDowntimeReleases: <span className="text-emerald-300">&quot;50+ Releases (99.99% SLA)&quot;</span>,
                  </div>
                  <div className="pl-8">
                    rtoReduction: <span className="text-emerald-300">&quot;40% Cut via DR Automation&quot;</span>,
                  </div>
                  <div className="pl-8">
                    openStackPatches: <span className="text-emerald-300">&quot;5 Verified OpenDev Patches&quot;</span>
                  </div>
                  <div className="pl-4">{"}"}</div>
                  <div>{"}"};</div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Hands-on Engineering Leader
                  </span>
                  <span>Gurgaon, HR, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 2. PROFESSIONAL SUMMARY */}
        {/* =================================================================== */}
        <section id="summary" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" /> Professional Profile
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Professional Summary</h2>
          </div>

          <Card className="glass-card p-6 sm:p-8 rounded-2xl border-slate-800/80 space-y-6">
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                <strong className="text-slate-100 font-semibold">Team Lead 2</strong> building cloud platform products and backend systems on top of OpenStack APIs, with hands-on ownership of Node.js/NestJS services, cloud automation, Disaster Recovery, storage replication, autoscaling, smart GPU flavor scheduling, and engineering leadership.
              </p>
              <p>
                With over <span className="text-cyan-300 font-semibold">{totalExperience}</span> of software development experience at AceCloud / Real Time Data Services, my core technical focus is <em>software product and platform engineering</em>: building scalable backend microservices, developer-facing cloud provisioning workflows, and automated disaster recovery systems on top of cloud infrastructure APIs.
              </p>
              <p>
                As a hands-on technical leader, I coordinate cross-functional teams of software developers and QA engineers, conduct architectural code reviews across 100+ pull requests monthly, enforce zero-downtime release practices across 50+ production deployments (99.99% SLA), and actively contribute to technical hiring with over 200 candidate interviews conducted.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-1.5">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Experience</span>
                <p className="text-lg font-bold text-slate-100">{totalExperience}</p>
                <p className="text-xs text-slate-400">Engineering leadership &amp; platform architecture</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-1.5">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Production Releases</span>
                <p className="text-lg font-bold text-slate-100">50+ Zero-Downtime</p>
                <p className="text-xs text-slate-400">99.99% SLA uptime compliance</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-1.5">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Disaster Recovery</span>
                <p className="text-lg font-bold text-slate-100">40% RTO Cut</p>
                <p className="text-xs text-slate-400">Commvault &amp; NetApp SnapMirror orchestration</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-1.5">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Team Hiring</span>
                <p className="text-lg font-bold text-slate-100">200+ Interviews</p>
                <p className="text-xs text-slate-400">Intern, SDE 1-3, Backend Lead, ASDM 2</p>
              </div>
            </div>
          </Card>
        </section>

        {/* =================================================================== */}
        {/* 3. CORE EXPERTISE */}
        {/* =================================================================== */}
        <section id="expertise" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Award className="w-4 h-4" /> Strategic Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Core Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Cloud Platform Product Engineering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Building cloud platform software and developer APIs on top of OpenStack APIs (Nova, Cinder, Glance, Neutron, Keystone), driving multi-region provisioning and instance lifecycle automation.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800/50">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Disaster Recovery &amp; Storage</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Architecting automated Disaster Recovery orchestration integrating Commvault and NetApp SnapMirror/ONTAP with OpenStack for planned failover, unplanned failover, failback, and DR drills.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-sky-950/80 text-sky-400 border border-sky-800/50">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Backend &amp; Microservices</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Developing robust microservices in Node.js, NestJS, and TypeScript with REST APIs, BullMQ asynchronous pipelines, MySQL, MongoDB, and Docker containerization.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Cloud Automation &amp; Autoscaling</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Implementing automated workload scaling using OpenStack Heat stacks alongside policy-driven scheduled instance volume backup workflows managing 500+ cloud instances.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/50">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Smart Resource Scheduling</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Implementing smart GPU flavor scheduling based on real-time available capacity to provide customers with suitable launchable options and prevent provisioning failures.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-rose-950/80 text-rose-400 border border-rose-800/50">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Technical Leadership &amp; Hiring</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Leading developers and QA engineers, conducting architectural code reviews across 100+ PRs/mo, executing 50+ zero-downtime releases, and interviewing 200+ candidates.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 4. CURRENT ROLE */}
        {/* =================================================================== */}
        <section id="current-role" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Current Leadership Position
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Current Role</h2>
          </div>

          <Card className="glass-card p-6 sm:p-8 rounded-2xl border-slate-800/80 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 border-b border-slate-800/80 pb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/40 mb-2">
                  Hands-On Engineering Leadership
                </span>
                <h3 className="text-2xl font-bold text-slate-100">Team Lead 2 — Software Development</h3>
                <p className="text-base text-cyan-400 font-medium">AceCloud | Real Time Data Services — Gurgaon, India</p>
              </div>
              <div className="text-right sm:text-right">
                <Badge className="bg-slate-900 border-slate-700 text-slate-200 font-mono text-xs">
                  {formatDateRange("2025-10-01")}
                </Badge>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Tenure: {calculateYearMonthExperience("2025-10-01")} (Total: {totalExperience})
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                In my role as <strong className="text-slate-100">Team Lead 2</strong>, I lead and coordinate cross-functional teams of software developers and QA engineers while remaining actively hands-on with platform architecture, NestJS backend services, and cloud integrations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-400" /> Team Coordination &amp; Execution
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Directing developers and QA engineers, aligning technical milestones with Scrum Masters and Product Owners, breaking down complex platform initiatives into actionable sprint deliverables.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-emerald-400" /> Architecture &amp; Code Quality
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Conducting deep architectural code reviews across 100+ pull requests monthly, enforcing clean code standards, API contract validation, and mentoring engineers on best practices.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-amber-400" /> Zero-Downtime Release Management
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Overseeing production deployment pipelines, executing 50+ zero-downtime releases with 99.99% SLA uptime compliance, and directing telemetry/alerting with Sentry.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 space-y-2">
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-sky-400" /> Technical Hiring &amp; Growth
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Interviewed 200+ candidates for AceCloud engineering hiring across diverse roles: Intern, SDE 1, SDE 2, SDE 3, Frontend Engineer, Backend Lead, and Associate Software Development Manager 2 (ASDM 2).
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* =================================================================== */}
        {/* 5. CLOUD PLATFORM ENGINEERING */}
        {/* =================================================================== */}
        <section id="platform" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Server className="w-4 h-4" /> Platform Product Layer
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Cloud Platform Engineering</h2>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl border-slate-800/80 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                Software Platform on top of OpenStack APIs
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                Building AceCloud&apos;s Multi-Region Cloud Platform
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                My work centers on <strong>software product and platform engineering on top of OpenStack APIs</strong>. Rather than administering underlying physical clusters, I design and build the backend services, provisioning workflows, storage lifecycle pipelines, and customer-facing APIs that power AceCloud&apos;s public cloud platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">01. Provisioning APIs</span>
                <h4 className="text-sm font-bold text-slate-100">Instance Lifecycle Workflows</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered Node.js/NestJS backend services orchestrating OpenStack Nova compute workflows, security groups, floating IPs, and network attachments across multiple availability zones.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">02. Storage Workflows</span>
                <h4 className="text-sm font-bold text-slate-100">Cinder Volume Management</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Implemented automated block storage attachment, volume expansion, detachment validation, and snapshot orchestration interfacing with OpenStack Cinder APIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">03. Cloud Automation</span>
                <h4 className="text-sm font-bold text-slate-100">Multi-Region Coordination</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Developed multi-region synchronization pipelines with BullMQ task queues, ensuring reliable inventory state, tenant quotas, and centralized health telemetry.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 flex items-start gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-100 font-semibold">Engineering Positioning:</strong> All platform capabilities are delivered as scalable microservices and APIs written in Node.js/NestJS and TypeScript, strictly decoupled from low-level cluster operations.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 6. DISASTER RECOVERY */}
        {/* =================================================================== */}
        <section id="dr" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <HardDrive className="w-4 h-4" /> Enterprise Business Continuity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Disaster Recovery Orchestration</h2>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl border-slate-800/80 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-xs font-mono text-indigo-300">
                <span>Commvault + NetApp SnapMirror + OpenStack + NestJS + BullMQ</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                Automated Cloud Disaster Recovery Engine (40% RTO Reduction)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                Designed and built automated Disaster Recovery orchestration software on top of OpenStack, integrating Commvault APIs and NetApp SnapMirror / ONTAP storage replication to safeguard mission-critical enterprise tenant workloads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">Continuous Replication</span>
                <h4 className="text-sm font-bold text-slate-100">NetApp SnapMirror Sync</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automated asynchronous volume snapshot replication across geographically distributed data centers with strict RPO tracking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Failover Automation</span>
                <h4 className="text-sm font-bold text-slate-100">Planned &amp; Unplanned Failover</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Implemented one-click planned migration and rapid emergency unplanned failover orchestration, cutting RTO by 40%.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Failback &amp; Drills</span>
                <h4 className="text-sm font-bold text-slate-100">Automated DR Drills</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered non-disruptive DR test drill workflows in isolated network sandboxes and automated reverse-sync failback execution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">Queue Pipeline</span>
                <h4 className="text-sm font-bold text-slate-100">BullMQ &amp; Sentry Alerting</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Structured asynchronous BullMQ worker queues to monitor replication jobs, manage schedule triggers, and send telemetry alerts via Sentry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 7. CLOUD AUTOMATION / AUTOSCALING */}
        {/* =================================================================== */}
        <section id="autoscaling" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Workload Scaling &amp; Automation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Cloud Automation &amp; Autoscaling</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 sm:p-7 rounded-2xl border-slate-800/80 space-y-4">
              <div className="p-2.5 w-fit rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Workload Autoscaling via OpenStack Heat</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Built cloud automation services using <strong>OpenStack Heat stacks</strong> to orchestrate workload scaling based on traffic demands, dynamically launching and terminating compute instances within configured scaling group policies.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Heat template generation and stack lifecycle management</li>
                <li>Dynamic scaling group hooks triggered by telemetry thresholds</li>
                <li>Load balancer member pool registration and health verification</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 sm:p-7 rounded-2xl border-slate-800/80 space-y-4">
              <div className="p-2.5 w-fit rounded-lg bg-sky-950/80 text-sky-400 border border-sky-800/50">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Automated Scheduled Volume Backup Service</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Engineered an automated backup scheduling service managing snapshot lifecycles across <strong>500+ cloud compute instances</strong>, ensuring data protection without disrupting live disk I/O performance.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                <li>Customer-configurable backup schedules and retention rules</li>
                <li>Automated snapshot pruning and storage lifecycle cleanup</li>
                <li>Next.js management UI coupled with NestJS backend microservices</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 8. GPU SCHEDULING */}
        {/* =================================================================== */}
        <section id="gpu" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Capacity Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Smart GPU Flavor Scheduling</h2>
          </div>

          <Card className="glass-card p-6 sm:p-8 rounded-2xl border-slate-800/80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/50">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                  Capacity-Aware GPU Flavor Discovery
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Built smart GPU flavor scheduling based on available GPU capacity to provide customers with suitable launchable options.
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
              Implemented smart GPU flavor scheduling to identify suitable GPU options based on available capacity. By evaluating real-time cluster capacity prior to instance provisioning, this service guides customers to available GPU configurations, eliminating failed deployments and streamlining access to high-demand AI/ML hardware accelerators.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Capacity-Aware Selection
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Zero Provisioning Failures
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                GPU Resource Optimization
              </span>
            </div>
          </Card>
        </section>

        {/* =================================================================== */}
        {/* 9. OPEN SOURCE CONTRIBUTIONS */}
        {/* =================================================================== */}
        <section id="open-source" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Ecosystem Contributions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Open Source Contributions</h2>
          </div>

          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Active contributor to public software ecosystems, including 5 verified code patches and reviews to OpenStack Cinder &amp; Nova via OpenDev Gerrit, OpenAPI 3.0 support for Model Context Protocol tools on GitHub, and open-source npm packages.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {openSourceItems.map((item) => (
              <OpenSourceCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* =================================================================== */}
        {/* 10. LEADERSHIP & ENGINEERING IMPACT */}
        {/* =================================================================== */}
        <section id="leadership" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Users className="w-4 h-4" /> Management &amp; Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Leadership &amp; Engineering Impact</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card p-5 rounded-xl border border-slate-800/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100">Team Coordination</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Supervising developers and QA engineers, managing sprint deliverables, and fostering cross-functional alignment.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-slate-800/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100">200+ Technical Interviews</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conducted 200+ interviews for AceCloud hiring: Intern, SDE 1, 2, 3, Frontend, Backend Lead, and ASDM 2.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-slate-800/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/50">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100">AI Workflows (+35% Speed)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrated AI coding tools and prompt pipelines across engineering teams to boost sprint velocity by 35%+.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-slate-800/80 space-y-2">
              <div className="p-2 w-fit rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800/50">
                <GitBranch className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-100">50+ Releases &amp; 99.99% SLA</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Executed 50+ zero-downtime releases, reviewed 100+ PRs/mo, and maintained strict 99.99% SLA uptime.
              </p>
            </div>
          </div>

          {/* Detailed Engineering Projects / Case Studies */}
          <div className="pt-4 space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> Platform Architecture Deliverables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platformProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 11. TECHNOLOGY STACK */}
        {/* =================================================================== */}
        <section id="tech-stack" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Technology Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primarySkillCategories.map((cat) => (
              <div key={cat.title} className="glass-card p-6 rounded-xl border border-slate-800/80 space-y-4">
                <h3 className="text-sm font-bold text-slate-100 border-b border-slate-800/80 pb-2 flex items-center gap-2">
                  {cat.icon}
                  {cat.title}
                </h3>
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/60 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Secondary / Production Scripting Context */}
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 space-y-2 text-xs text-slate-300">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 font-bold block">
              Additional Production Tooling &amp; Scripting
            </span>
            <p className="leading-relaxed text-slate-400">
              <strong className="text-slate-200">Python:</strong> Leveraged in production environments for dedicated scripting services including a Flask billing application, automated backup services, and customer-defined backup scheduling routines. Primary engineering focus remains in Node.js, NestJS, and TypeScript.
            </p>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 12. EDUCATION */}
        {/* =================================================================== */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Academic Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
          </div>

          <Card className="glass-card p-6 rounded-xl border-slate-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-100">Bachelor of Technology (B.Tech) — Computer Science and Engineering</h3>
              <p className="text-sm text-cyan-400">IMS Engineering College — Ghaziabad, Uttar Pradesh, India</p>
              <p className="text-xs text-slate-400">Final Grade: 69%</p>
            </div>
            <Badge variant="outline" className="border-slate-700 text-slate-300 font-mono text-xs">
              {formatDateRange("2015-01-01", "2019-06-30")}
            </Badge>
          </Card>
        </section>

        {/* =================================================================== */}
        {/* 13. CONTACT */}
        {/* =================================================================== */}
        <section id="contact" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Mail className="w-4 h-4" /> Connect
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Contact &amp; Career Opportunities</h2>
          </div>

          <div className="glass-card p-8 rounded-2xl border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-xs font-mono text-cyan-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Open to Opportunities
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Open to Lead, Staff and senior-level Cloud Platform, Backend and Product Engineering opportunities.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Interested in connecting around technical leadership, cloud platform architecture on OpenStack APIs, high-throughput NestJS microservices, and automated disaster recovery engineering.
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
                  <span>Gurgaon, Haryana, India 122016</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono">
                <a href="https://github.com/akash-roshan-chaurasia" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <GitBranch className="w-4 h-4 text-amber-400" /> OpenDev
                </a>
                <a href="https://www.linkedin.com/in/akash-roshan/" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center bg-slate-950/60 p-6 rounded-xl border border-slate-800/80">
              <a href="mailto:akashroshanchaurasia@gmail.com" className="w-full">
                <Button size="lg" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">
                  <Mail className="w-4 h-4 mr-2" /> Send Email Directly
                </Button>
              </a>
              <Link href="/ats" className="w-full">
                <Button size="lg" variant="outline" className="w-full border-cyan-500/40 bg-slate-900 text-cyan-300 hover:bg-slate-800">
                  <FileCode2 className="w-4 h-4 mr-2 text-cyan-400" /> View 3 ATS Resumes
                </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={handleShare} className="w-full border-slate-700 bg-slate-900 text-slate-200">
                <Share2 className="w-4 h-4 mr-2 text-cyan-400" /> Share Portfolio
              </Button>
              <Button size="lg" variant="ghost" onClick={handleDownloadPDF} className="w-full text-slate-400 hover:text-slate-100 print:hidden">
                <Download className="w-4 h-4 mr-2" /> Print / Save PDF
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 bg-[#06080d] text-xs text-slate-400 font-mono text-center space-y-2">
        <p>© {new Date().getFullYear()} Akash Roshan Chaurasia. All rights reserved.</p>
        <p className="text-slate-500">
          Team Lead 2 (Cloud Platform &amp; Backend Engineering) • Deployed via GitHub Pages
        </p>
      </footer>
    </div>
  );
}
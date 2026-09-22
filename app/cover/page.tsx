"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download as DownloadIcon,
  Share as ShareIcon,
  FileCode2 as FileIcon,
  Chrome as HomeIcon,
  FileText as FileTextIcon,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GitBranch,
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import Link from "next/link";

export default function CoverLetter() {
  const currentDate = format(new Date(), "MMMM d, yyyy");

  const handleDownload = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Akash Roshan Chaurasia — Professional Cover Letter",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Cover letter link copied to clipboard!");
      }
    } catch (error) {
      toast.error("Failed to share link.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Navigation Bar (Hidden on Print) */}
        <div className="flex gap-3 print:hidden bg-slate-900/90 p-4 rounded-xl border border-slate-800 justify-between items-center flex-wrap shadow-xl">
          <div className="flex gap-2 flex-wrap items-center">
            <Link href="/">
              <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                <HomeIcon className="w-4 h-4 mr-2 text-cyan-400" />
                Portfolio
              </Button>
            </Link>
            <Link href="/ats">
              <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                <FileIcon className="w-4 h-4 mr-2 text-cyan-400" />
                ATS Resumes
              </Button>
            </Link>
            <Button variant="secondary" size="sm" className="bg-indigo-500 text-slate-950 font-bold hover:bg-indigo-400">
              <FileTextIcon className="w-4 h-4 mr-2" />
              Cover Letter
            </Button>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleDownload} variant="default" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold shadow-lg shadow-cyan-500/20">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download / Print PDF
            </Button>
            <Button onClick={handleShare} variant="outline" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
              <ShareIcon className="w-4 h-4 mr-2 text-cyan-400" />
              Share
            </Button>
          </div>
        </div>

        {/* Cover Letter Sheet */}
        <Card className="bg-white text-black p-6 sm:p-10 space-y-6 shadow-2xl border border-slate-200 font-sans text-slate-900">
          {/* Header */}
          <div className="space-y-3 border-b-2 border-black pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black uppercase">
              AKASH ROSHAN CHAURASIA
            </h1>
            <p className="text-base font-semibold text-slate-900">
              Team Lead 2 | Cloud Platform &amp; Backend Engineering
            </p>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700 pt-1">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Gurgaon, Haryana, India 122016
              </span>
              <span>•</span>
              <a href="tel:+918802076664" className="text-slate-900 hover:underline font-medium">
                +91-8802076664
              </a>
              <span>•</span>
              <a href="mailto:akashroshanchaurasia@gmail.com" className="text-slate-900 hover:underline font-medium">
                akashroshanchaurasia@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-mono text-slate-700 pt-0.5">
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

            <p className="text-xs sm:text-sm font-semibold pt-2 text-slate-800">{currentDate}</p>
          </div>

          {/* Recipient */}
          <div className="space-y-1 text-xs sm:text-sm font-medium text-slate-800">
            <p>To: Engineering Leadership &amp; Technical Hiring Teams</p>
            <p className="font-semibold text-black">
              Re: Application for Lead / Staff Cloud Platform &amp; Backend Engineering Positions
            </p>
          </div>

          <p className="font-bold text-xs sm:text-sm text-black">Dear Hiring Team,</p>

          {/* Body */}
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-900">
            <p>
              I am writing to express my interest in Lead, Staff, and senior-level Cloud Platform and Backend Engineering opportunities. With approximately 7.5 years of hands-on software development experience and my current role as <strong>Team Lead 2 — Software Development at AceCloud (Real Time Data Services)</strong>, I specialize in building cloud platforms, backend microservices, and infrastructure automation on top of OpenStack APIs.
            </p>

            <p>
              My OpenStack experience is centered on <strong>software product and platform engineering</strong>: designing and implementing high-throughput Node.js and NestJS services that integrate with OpenStack Nova, Cinder, Heat, and Neutron APIs. Rather than operating physical clusters, I architect the self-service provisioning engines, storage lifecycle pipelines, and multi-region synchronization workflows that power AceCloud&apos;s public cloud platform.
            </p>

            <p>
              A major pillar of my engineering work is automated business continuity. I architected and built an automated Disaster Recovery orchestration service on top of OpenStack, integrating Commvault APIs and NetApp SnapMirror/ONTAP storage replication to handle planned failover, emergency unplanned failover, automated failback, and non-disruptive DR drills—achieving a <strong>40% reduction in failover Recovery Time Objective (RTO)</strong>. Additionally, I implemented automated workload scaling using OpenStack Heat stacks and policy-driven volume snapshot scheduling managing <strong>500+ cloud compute instances</strong>, as well as smart GPU flavor scheduling based on real-time capacity.
            </p>

            <p>
              Alongside hands-on architecture, I bring proven technical leadership:
            </p>

            <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium">
              <li>
                <strong>Engineering Leadership:</strong> Coordinating cross-functional teams of software developers and QA engineers, conducting architectural code reviews across 100+ pull requests monthly, and mentoring engineers.
              </li>
              <li>
                <strong>Technical Hiring:</strong> Conducted 200+ technical interviews for AceCloud hiring across diverse engineering roles: Intern, SDE 1, SDE 2, SDE 3, Frontend Engineer, Backend Lead, and Associate Software Development Manager 2 (ASDM 2).
              </li>
              <li>
                <strong>Production Excellence:</strong> Executed 50+ zero-downtime production deployment releases maintaining 99.99% SLA uptime compliance with real-time Sentry telemetry.
              </li>
              <li>
                <strong>AI-Assisted Development:</strong> Pioneered AI coding workflows and prompt engineering practices across engineering teams, boosting sprint velocity by 35%+.
              </li>
              <li>
                <strong>Open-Source Contributions:</strong> Authored 5 verified OpenStack core patches in Cinder and Nova on OpenDev Gerrit, and contributed OpenAPI 3.0 specification support to the Model Context Protocol (swagger-mcp PR #7).
              </li>
            </ul>

            <p>
              I welcome the opportunity to discuss how my hands-on cloud platform engineering, backend architecture, and technical leadership can deliver immediate value to your organization. Thank you for your time and consideration.
            </p>
          </div>

          {/* Closing */}
          <div className="space-y-1 pt-4 text-xs sm:text-sm">
            <p className="font-medium text-slate-800">Sincerely,</p>
            <p className="font-bold text-black text-sm sm:text-base">Akash Roshan Chaurasia</p>
            <p className="text-xs text-slate-600 font-mono">
              Team Lead 2 — Software Development (Cloud Platform &amp; Backend Engineering)
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
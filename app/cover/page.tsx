"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, Share as ShareIcon, FileCode2 as FileIcon, Chrome as HomeIcon, FileText as FileTextIcon, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import Link from "next/link";

export default function CoverLetter() {
  const currentDate = format(new Date(), 'MMMM d, yyyy');

  const handleDownload = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile && navigator.share) {
        try {
          await navigator.share({
            title: "Akash Roshan Chaurasia - Executive Cover Letter",
            url: window.location.href
          });
        } catch (error: any) {
          if (error.name === 'SecurityError') {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Cover letter link copied to clipboard!");
          } else {
            throw error;
          }
        }
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Cover letter link copied to clipboard!");
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error("Failed to share cover letter. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Bar */}
        <div className="flex gap-3 print:hidden bg-slate-900/80 p-4 rounded-xl border border-slate-800 justify-between items-center flex-wrap">
          <div className="flex gap-2 flex-wrap">
            <Link href="/">
              <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                <HomeIcon className="w-4 h-4 mr-2 text-cyan-400" />
                Portfolio
              </Button>
            </Link>
            <Link href="/ats">
              <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
                <FileIcon className="w-4 h-4 mr-2 text-cyan-400" />
                ATS Resume
              </Button>
            </Link>
            <Button variant="secondary" size="sm" className="bg-indigo-500 text-slate-950 font-bold hover:bg-indigo-400">
              <FileTextIcon className="w-4 h-4 mr-2" />
              Cover Letter
            </Button>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleDownload} variant="default" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={handleShare} variant="outline" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700">
              <ShareIcon className="w-4 h-4 mr-2 text-cyan-400" />
              Share
            </Button>
          </div>
        </div>

        {/* Cover Letter Sheet */}
        <Card className="bg-white text-black p-8 sm:p-10 space-y-6 shadow-2xl border border-slate-200 font-sans">
          {/* Header */}
          <div className="space-y-4 border-b-2 border-black pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-black uppercase">AKASH ROSHAN CHAURASIA</h1>
            <p className="text-lg font-semibold text-slate-800">Team Lead 2 — Software Development</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-slate-700 pt-1">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-4 h-4 text-slate-900" /> Gurgaon, HR, India 122016
              </span>
              <span>•</span>
              <a href="tel:+918802076664" className="inline-flex items-center gap-1 text-blue-700 hover:underline font-medium">
                <Phone className="w-4 h-4" /> +91-8802076664
              </a>
              <span>•</span>
              <a href="mailto:akashroshanchaurasia@gmail.com" className="inline-flex items-center gap-1 text-blue-700 hover:underline font-medium">
                <Mail className="w-4 h-4" /> akashroshanchaurasia@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-700 font-mono">
              <a href="https://www.linkedin.com/in/akash-roshan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:underline">
                <Linkedin className="w-4 h-4" /> linkedin.com/in/akash-roshan
              </a>
              <span>•</span>
              <a href="https://github.com/akash-roshan-chaurasia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:underline">
                <Github className="w-4 h-4" /> github.com/akash-roshan-chaurasia
              </a>
            </div>

            <p className="text-sm font-semibold pt-2 text-slate-800">{currentDate}</p>
          </div>

          {/* Recipient Placeholder */}
          <div className="space-y-1 text-sm font-medium text-slate-800">
            <p>To: Executive Hiring Committee &amp; Engineering Leadership</p>
            <p>Re: Technical Leadership / Engineering Manager / Director of Engineering Position</p>
          </div>

          <p className="font-bold text-sm text-black">Dear Hiring Committee,</p>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-900">
            <p>
              I am writing to express my strong interest in technical leadership roles—including Engineering Manager, Director of Engineering, and CTO opportunities. With over 7 years of software development experience and my current leadership role as <strong>Team Lead 2 — Software Development at AceCloud (Real Time Data Services)</strong>, I bring a proven track record of supervising high-velocity engineering teams of 12+ developers and QA engineers, establishing architectural standards, driving AI-integrated workflows (+35% velocity boost), and executing 50+ zero-downtime production releases with 99.99% SLA compliance.
            </p>

            <p>
              In my current role as Team Lead 2, I direct cross-functional engineering teams, managing sprint delivery, architectural code reviews across 100+ PRs monthly, and release deployment pipelines. I have pioneered the adoption of <strong>AI-Driven Development workflows</strong> across my engineering unit, embedding AI coding assistants and automated prompt pipelines to significantly boost development throughput while maintaining clean, maintainable code standards.
            </p>

            <p>
              A key pillar of my leadership experience is engineering high-availability cloud infrastructure and business continuity. I architected enterprise Disaster Recovery offerings using <strong>Commvault best practices and NetApp Snapmirror integration</strong> (cutting failover RTO by 40%), and built OpenStack volume Auto-Scaling managing 500+ cloud instances. Furthermore, I am an active open-source contributor with 5 verified patches in OpenStack core repositories (Cinder &amp; Nova). My technical background spans Next.js, NestJS, React Query, BullMQ, MySQL, MongoDB, Docker, and OpenStack environments.
            </p>

            <p className="font-bold text-black pt-1">
              Core Technical Leadership &amp; Quantified Highlights:
            </p>

            <ul className="list-disc list-inside space-y-1.5 pl-2 font-medium">
              <li><strong>Managing Engineering Teams (12+ Engineers):</strong> Directing developers and QA engineers, conducting code reviews for 100+ PRs/mo, and mentoring team members.</li>
              <li><strong>AI-Driven Development Execution (+35% Velocity):</strong> Integrating AI tools and prompt workflows into team practices to increase speed and lower bug rates.</li>
              <li><strong>50+ Zero-Downtime Releases (99.99% SLA):</strong> Overseeing production release execution, deployment risk assessments, and zero-downtime release pipelines.</li>
              <li><strong>Cloud Architecture (40% RTO Reduction):</strong> Designing cloud-native disaster recovery, volume auto-scaling, and high-availability storage orchestration for 500+ cloud compute instances.</li>
              <li><strong>Public Open-Source Contributions:</strong> Author of 5 verified OpenStack core patches across Cinder &amp; Nova (NetApp ONTAP LUN preservation, HTTP 409 backup conflict, Nova network cleanup retries Bug #2161972, ONTAP SSC refresh, and startup fail-fast) and Model Context Protocol (swagger-mcp PR #7).</li>
            </ul>

            <p>
              I thrive at the intersection of technical strategy, team mentorship, and operational execution. I welcome the opportunity to discuss how my engineering leadership, AI workflow expertise, and cloud infrastructure experience can drive success for your organization.
            </p>
          </div>

          {/* Closing */}
          <div className="space-y-1 pt-4 text-sm">
            <p className="font-medium text-slate-800">Sincerely,</p>
            <p className="font-bold text-black text-base">Akash Roshan Chaurasia</p>
            <p className="text-xs text-slate-600 font-mono">Team Lead 2 — Software Development</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
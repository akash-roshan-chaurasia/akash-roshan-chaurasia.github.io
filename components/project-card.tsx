"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  Zap,
} from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  role: string;
  category: string;
  problem: string;
  solution: string;
  technicalApproach: string;
  impact?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export function ProjectCard({ project }: { project: ProjectData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`glass-card rounded-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
        project.featured
          ? "border-cyan-500/30 bg-slate-900/70 shadow-lg shadow-cyan-950/20"
          : "border-slate-800/80"
      }`}
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -right-20 -top-20 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-[11px] font-mono tracking-wider font-semibold uppercase rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 text-[11px] font-mono tracking-wider font-semibold uppercase rounded-md bg-amber-950/80 text-amber-300 border border-amber-800/50">
                Featured Architecture
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400 font-mono">{project.role}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm mb-4 leading-relaxed font-medium">
          {project.tagline}
        </p>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs">
          <div>
            <span className="text-slate-400 font-mono uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1.5 font-semibold text-rose-400">
              <AlertCircle className="w-3 h-3 text-rose-400" /> Challenge
            </span>
            <p className="text-slate-300 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-slate-400 font-mono uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1.5 font-semibold text-emerald-400">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Solution
            </span>
            <p className="text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Expandable Technical Deep Dive */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-3 animate-in fade-in duration-200">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-1 font-semibold">
                <Cpu className="w-3.5 h-3.5" /> Technical Approach & Architecture
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.technicalApproach}
              </p>
            </div>

            {project.impact && project.impact.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 mb-1 font-semibold">
                  <Zap className="w-3.5 h-3.5" /> System Deliverables & Outcomes
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
                  {project.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tech Stack Chips & Expand Toggle */}
      <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 px-2.5 h-8 font-mono"
          >
            {expanded ? (
              <>
                Less <ChevronUp className="w-3.5 h-3.5 ml-1" />
              </>
            ) : (
              <>
                Architecture Details <ChevronDown className="w-3.5 h-3.5 ml-1" />
              </>
            )}
          </Button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-md transition-colors"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-md transition-colors"
              aria-label={`Live link for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

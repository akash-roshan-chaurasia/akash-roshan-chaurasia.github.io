"use client";

import React from "react";
import { ExternalLink, GitCommit, GitPullRequest, Package, ShieldCheck, Tag } from "lucide-react";

export interface OpenSourceItem {
  platform: "OpenDev" | "GitHub" | "npm";
  title: string;
  subtitle: string;
  verifiedDetails: string;
  context: string;
  technologies: string[];
  linkUrl: string;
  linkText: string;
  statusBadge: string;
}

export function OpenSourceCard({ item }: { item: OpenSourceItem }) {
  const getIcon = () => {
    switch (item.platform) {
      case "OpenDev":
        return <GitCommit className="w-5 h-5 text-amber-400" />;
      case "GitHub":
        return <GitPullRequest className="w-5 h-5 text-cyan-400" />;
      case "npm":
        return <Package className="w-5 h-5 text-rose-400" />;
    }
  };

  const getHeaderColor = () => {
    switch (item.platform) {
      case "OpenDev":
        return "border-amber-500/30 bg-amber-950/20";
      case "GitHub":
        return "border-cyan-500/30 bg-cyan-950/20";
      case "npm":
        return "border-rose-500/30 bg-rose-950/20";
    }
  };

  return (
    <div className="glass-card rounded-xl p-6 flex flex-col justify-between relative border border-slate-800/80 hover:border-cyan-500/40 transition-all">
      <div>
        {/* Header Platform Badge & Verified Indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg border ${getHeaderColor()}`}>
              {getIcon()}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
                {item.platform} Ecosystem
              </span>
              <h4 className="text-base font-bold text-slate-100">{item.title}</h4>
            </div>
          </div>

          <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            {item.statusBadge}
          </span>
        </div>

        <p className="text-slate-300 text-xs font-mono mb-3 text-cyan-300/90">
          {item.subtitle}
        </p>

        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {item.context}
        </p>

        {/* Verifiable Contribution Fact Callout */}
        <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs mb-4">
          <span className="text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1 font-semibold">
            Verified Public Contribution Evidence
          </span>
          <p className="text-slate-200 font-mono text-[11px] leading-relaxed">
            {item.verifiedDetails}
          </p>
        </div>
      </div>

      {/* Footer Tags & CTA Link */}
      <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={item.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 hover:underline pt-1 sm:pt-0"
        >
          {item.linkText} <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

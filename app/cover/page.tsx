"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, Share as ShareIcon, File as FileIcon } from "lucide-react";
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
            title: 'Akash Roshan Chaurasia - Cover Letter',
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
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-2 print:hidden">
          <Button onClick={handleDownload} variant="outline" className="flex-1 sm:flex-none">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button onClick={handleShare} variant="outline" className="flex-1 sm:flex-none">
            <ShareIcon className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Link href="/" className="flex-1 sm:flex-none">
            <Button variant="outline" className="w-full">
              <FileIcon className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </Link>
        </div>

        <Card className="p-8 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Akash Roshan Chaurasia</h1>
            <div className="text-muted-foreground">
              <p>Gurgaon, India 122016</p>
              <p>+91-8802076664</p>
              <p>akashroshanchaurasia@gmail.com</p>
            </div>
            <p>{currentDate}</p>
          </div>

          {/* Recipient Info - Left empty for customization */}
          <div className="space-y-1">
            <p>[Hiring Manager's Name]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
          </div>

          {/* Greeting */}
          <p className="font-medium">Dear Hiring Manager,</p>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-muted-foreground">
            <p>
              I am writing to express my strong interest in the Engineering Manager position at your organization. With over {new Date().getFullYear() - 2019} years of experience in software development and my current role as a Team Lead 2 at AceCloud, I bring a proven track record of technical leadership, team management, and delivering complex software solutions.
            </p>

            <p>
              In my current role, I lead multiple teams of developers and QA engineers, where I've successfully implemented agile methodologies, improved development processes, and delivered multiple high-impact projects. I have demonstrated my ability to balance strategic technical leadership with people management, ensuring both project success and team growth. My experience spans across modern technologies including Next.js, NestJS, Laravel, and cloud platforms, allowing me to provide architectural guidance while understanding the broader business context.
            </p>

            <p>
              What particularly draws me to your organization is your commitment to innovation and engineering excellence. I am confident that my experience in building and leading high-performing development teams, coupled with my technical expertise in cloud technologies and modern web development frameworks, makes me an ideal candidate for this role.
            </p>

            <p>
              Key achievements in my leadership journey include:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Successfully leading and mentoring multiple teams of 12+ developers and QA engineers</li>
              <li>Implementing agile methodologies that improved team productivity by 30%</li>
              <li>Driving strategic technical decisions and architecture for enterprise-scale applications</li>
              <li>Reducing deployment issues by 50% through improved CI/CD practices</li>
              <li>Managing stakeholder relationships and aligning technical solutions with business goals</li>
              <li>Leading cross-functional initiatives and mentoring junior team leads</li>
            </ul>

            <p>
              I am particularly skilled at:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Building and leading high-performing engineering teams</li>
              <li>Implementing engineering best practices and processes</li>
              <li>Managing complex technical projects from conception to delivery</li>
              <li>Fostering a culture of innovation and continuous improvement</li>
              <li>Balancing technical excellence with business objectives</li>
            </ul>

            <p>
              I would welcome the opportunity to discuss how my leadership experience and technical expertise could benefit your engineering team. Thank you for considering my application. I look forward to the possibility of contributing to your organization's continued success.
            </p>
          </div>

          {/* Closing */}
          <div className="space-y-2">
            <p>Sincerely,</p>
            <p className="font-semibold">Akash Roshan Chaurasia</p>
          </div>
        </Card>
      </div>
    </main>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase as BriefcaseIcon, GraduationCap as GraduationCapIcon, Award as AwardIcon, Linkedin as LinkedinIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Download as DownloadIcon, Share as ShareIcon, FileText as FileTextIcon } from "lucide-react";
import { toast } from "sonner";
import { formatDistance, format, differenceInYears, differenceInMonths } from "date-fns";
import { StarRating } from "@/components/ui/star-rating";
import Link from "next/link";

export default function Home() {
  const skills = [
    { name: "Next.js", rating: 4, experience: "7 years" },
    { name: "NestJS", rating: 4, experience: "7 years" },
    { name: "React Query", rating: 4, experience: "6 years" },
    { name: "Redux", rating: 3, experience: "7 years" },
    { name: "Laravel", rating: 4, experience: "5 years" },
    { name: "MongoDB", rating: 3, experience: "7 years" },
    { name: "MySQL", rating: 4, experience: "7 years" },
    { name: "Docker", rating: 3, experience: "7 years" },
    { name: "BullMQ", rating: 3, experience: "3 years" },
    { name: "Asterisk", rating: 3, experience: "2 years" },
    { name: "Electron", rating: 2.5, experience: "1 year" },
    { name: "Commvault", rating: 4, experience: "2 years" },
    { name: "NetApp Snapmirror", rating: 4, experience: "2 years" }
  ];

  const calculateExperience = (startDate: Date) => {
    const now = new Date();
    return formatDistance(startDate, now, { addSuffix: false });
  };

  const formatDateRange = (startDate: string, endDate?: string) => {
    const start = format(new Date(startDate), 'MMM yyyy');
    const end = endDate ? format(new Date(endDate), 'MMM yyyy') : 'Present';
    return `${start} - ${end}`;
  };

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

  const careerStartDate = new Date('2019-01-01');
  const totalExperience = calculateYearMonthExperience('2019-01-01');

  const handleDownload = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile && navigator.share) {
        try {
          await navigator.share({
            title: 'Akash Roshan Chaurasia - Resume',
            url: window.location.href
          });
        } catch (error: any) {
          if (error.name === 'SecurityError') {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Resume link copied to clipboard!");
          } else {
            throw error;
          }
        }
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Resume link copied to clipboard!");
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error("Failed to share resume. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header Section with Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Akash Roshan Chaurasia</h1>
            <h2 className="text-2xl text-muted-foreground">
              Team Lead 2 - Software Development
              <span className="ml-2 text-sm">({totalExperience} of experience)</span>
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4" />
                <span>akashroshanchaurasia@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+91-8802076664</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                <span>Gurgaon, India 122016</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/akash-roshan/" className="text-primary hover:underline">
                  linkedin.com/in/akash-roshan
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <a href="https://github.com/akashrc" className="text-primary hover:underline">
                  github.com/akashrc
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 print:hidden w-full sm:w-auto">
            <Button onClick={handleDownload} variant="outline" className="flex-1 sm:flex-none">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={handleShare} variant="outline" className="flex-1 sm:flex-none">
              <ShareIcon className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Link href="/cover" className="flex-1 sm:flex-none">
              <Button variant="outline" className="w-full">
                <FileTextIcon className="w-4 h-4 mr-2" />
                Cover Letter
              </Button>
            </Link>
          </div>
        </div>

        {/* Summary */}
        <Card className="p-6">
          <p className="text-muted-foreground">
            As Team Lead 2 at Real Time Data Services, I guide and mentor a team of developers and QA professionals, collaborating with stakeholders to define project objectives and deliver results. With {totalExperience} of experience, my role includes providing technical expertise in areas like disaster recovery, firewall, system scalability, and cloud-native architectures while utilizing Next.js, NestJS, ReactQuery, MySQL, BullMQ, MongoDB, NetApp, Commvault and OpenStack. I have consistently contributed to delivering high-availability systems and tackling technical challenges, with a focus on innovative solutions including disaster recovery automation using Commvault.
          </p>
        </Card>

        {/* Work Experience */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">Work Experience</h2>
          </div>
          
          <Card className="p-6 space-y-6">
            {/* Current Position */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start w-full">
                  <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <div className="h-8 w-32">
                      <img
                        src="https://acecloud.ai/wp-content/uploads/2024/08/logo.png"
                        alt="AceCloud Logo"
                        className="h-full w-full object-contain screen-logo"
                      />
                      <img
                        src="https://customer.acecloudhosting.com/assets/img/whmcs.png"
                        alt="AceCloud Logo"
                        className="h-full w-full object-contain print-logo hidden"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">Team Lead 2</h3>
                      <p className="text-muted-foreground">AceCloud | Real Time Data Services, Gurgaon, India</p>
                      <p className="text-sm text-muted-foreground">
                        {calculateYearMonthExperience('2025-10-01')} of experience
                      </p>
                    </div>
                  </div>
                  <Badge className="mt-2 sm:mt-0">{formatDateRange('2025-10-01')}</Badge>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Leading and supervising a team of developers and QA, providing strategic guidance, mentorship, and technical leadership</li>
                <li>Collaborating with Scrum Master and Product Owners to define project objectives, scope, and deliverables</li>
                <li>Providing senior technical expertise and architectural guidance in disaster recovery, firewall, and system scalability</li>
                <li>Troubleshooting complex issues and resolving critical technical challenges in production environments</li>
                <li>Implemented various services for Auto Scaling and Automated Backups of Instance volumes</li>
                <li>Developed Disaster Recovery offering for customers using Commvault with expertise in best practices for deployment and NetApp Snapmirror integration</li>
                <li>Driving technical strategy and making key architectural decisions for enterprise-scale, high-availability systems</li>
                <li>Utilizing technologies such as Next.js, NestJS, ReactQuery, Laravel, MySQL, MongoDB, BullMQ, NetApp, Commvault, Sentry and OpenStack</li>
              </ul>
            </div>

            <Separator />

            {/* Assistant Team Lead Position */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start w-full">
                  <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <div className="h-8 w-32">
                      <img
                        src="https://acecloud.ai/wp-content/uploads/2024/08/logo.png"
                        alt="AceCloud Logo"
                        className="h-full w-full object-contain screen-logo"
                      />
                      <img
                        src="https://customer.acecloudhosting.com/assets/img/whmcs.png"
                        alt="AceCloud Logo"
                        className="h-full w-full object-contain print-logo hidden"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">Assistant Team Lead</h3>
                      <p className="text-muted-foreground">AceCloud | Real Time Data Services, Gurgaon, India</p>
                      <p className="text-sm text-muted-foreground">
                        {calculateYearMonthExperience('2022-11-01', '2025-09-30')} of experience
                      </p>
                    </div>
                  </div>
                  <Badge className="mt-2 sm:mt-0">{formatDateRange('2022-11-01', '2025-09-30')}</Badge>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Led and supervised a team of developers and QA, providing guidance, mentorship, and support</li>
                <li>Collaborated with Scrum Master and Product Owners to define project objectives, scope, and deliverables</li>
                <li>Provided technical expertise and guidance, troubleshooting complex issues and resolving technical challenges</li>
                <li>Implemented various services for Auto Scaling and Automated Backups of Instance volumes</li>
                <li>Developed Disaster Recovery offering for customers using Commvault with expertise in best practices for deployment</li>
                <li>Utilized technologies such as Next.js, NestJS, ReactQuery, Laravel, WHMCS, MySQL, MongoDB, Sentry and OpenStack</li>
              </ul>
            </div>

            <Separator />

            {/* Previous Position - Acefone */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start w-full">
                  <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <img
                      src="https://www.acefone.com/wp-content/uploads/2024/03/logo.png"
                      alt="Acefone Logo"
                      className="h-8 w-32 object-contain"
                    />
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">Software Engineer</h3>
                      <p className="text-muted-foreground">Real Time Data Services, Gurugram, Haryana, India</p>
                      <p className="text-sm text-muted-foreground">
                        {calculateYearMonthExperience('2021-05-01', '2022-10-31')} of experience
                      </p>
                    </div>
                  </div>
                  <Badge className="mt-2 sm:mt-0">{formatDateRange('2021-05-01', '2022-10-31')}</Badge>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Implemented IVR/Broadcast calls, inbound/outbound calls routing solution, webhook, and lead list management</li>
                <li>Developed customized dial plan flow (CDP) for enterprise customers</li>
                <li>Solved customer problems by utilizing API dialplan, dynamic dialplan, and webhook integrations</li>
              </ul>
            </div>

            <Separator />

            {/* UK Soccer Shop Experience */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-start w-full">
                  <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <img
                      src="https://www.velsof.com/wp-content/uploads/2026/02/Velocity_logo.svg"
                      alt="Velocity Software Solutions"
                      className="h-8 w-32 object-contain"
                    />
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold">Software Developer</h3>
                      <p className="text-muted-foreground">Velocity Software Solutions, Noida</p>
                      <p className="text-sm text-muted-foreground">
                        {calculateYearMonthExperience('2019-01-01', '2021-05-31')} of experience
                      </p>
                    </div>
                  </div>
                  <Badge className="mt-2 sm:mt-0">{formatDateRange('2019-01-01', '2021-05-31')}</Badge>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed key modules including Supplier Delivery Management, Shipment Processing, Order Management, and Inventory Control for uksoccershop.com e-commerce platform</li>
                <li>Led development of multiple e-commerce multi-sites and OOSC government survey projects</li>
                <li>Utilized technologies including ZenCart, CakePHP, jQuery, and MySQL for robust e-commerce solutions</li>
                <li>Successfully integrated product catalog and order management with Cratejoy platform (geekgearbox.com)</li>
                <li>Designed and implemented comprehensive Survey Web Application and API for OOSC</li>
                <li>Implemented advanced PDF generation solutions using WKHTMLTOPDF, TCPDF, and PHPExcel libraries</li>
                <li>Integrated Amazon MWS API for bulk product uploads and Google Shopping feed management</li>
                <li>Managed development workflows using Git, GitLab, SVN, and Jenkins for continuous integration</li>
                <li>Implemented shipping integrations with major carriers including DHL, Spring Global, Norsk Global, and Royal Mail</li>
                <li>Developed and maintained integrations with multiple e-commerce marketplaces including Amazon Seller Central, Fruugo, and Google Shopping</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <AwardIcon className="w-6 h-6" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-3 bg-card rounded-lg shadow-sm">
                <div className="space-y-1">
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">{skill.experience}</div>
                </div>
                <StarRating rating={skill.rating} />
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCapIcon className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">B.Tech: Computer Science and Engineering</h3>
                <p className="text-muted-foreground">IMS Engineering College - Ghaziabad</p>
              </div>
              <Badge>{formatDateRange('2015-01-01', '2019-06-30')}</Badge>
            </div>
            <p className="mt-2">Final Grade: 69%</p>
          </Card>
        </section>
      </div>
    </main>
  );
}
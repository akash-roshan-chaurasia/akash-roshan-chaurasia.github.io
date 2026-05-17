"use client";

import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, FileText, Chrome as Home } from "lucide-react";
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
    <main className="min-h-screen bg-white text-black print:bg-white print:text-black">
      <div className="max-w-4xl mx-auto p-8 space-y-6">
        {/* Navigation and Download Button */}
        <div className="flex justify-between items-center flex-wrap gap-3 print:hidden mb-6">
          <div className="flex gap-2 flex-wrap">
            <Link href="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Portfolio
              </Button>
            </Link>
            <Button variant="default" size="sm" disabled>
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              ATS Resume
            </Button>
            <Link href="/cover">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Cover Letter
              </Button>
            </Link>
          </div>
          <Button onClick={handleDownload} variant="default">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Header */}
        <div className="text-center space-y-2 border-b border-black pb-6 print:border-black">
          <h1 className="text-3xl font-bold">AKASH ROSHAN CHAURASIA</h1>
          <p className="text-lg font-semibold">Team Lead 2 - Software Developer</p>
          <div className="flex justify-center gap-4 text-sm flex-wrap">
            <span>Gurugram, Haryana, India 122016</span>
            <span>•</span>
            <span>+91-8802076664</span>
            <span>•</span>
            <span>akashroshanchaurasia@gmail.com</span>
          </div>
          <div className="flex justify-center gap-4 text-sm flex-wrap">
            <a href="https://www.linkedin.com/in/akash-roshan/" className="text-blue-600 underline hover:text-blue-800 print:text-blue-600">
              linkedin.com/in/akash-roshan
            </a>
            <span>•</span>
            <a href="https://github.com/akashrc" className="text-blue-600 underline hover:text-blue-800 print:text-blue-600">
              github.com/akashrc
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm leading-relaxed text-black">
            Team Lead 2 at Real Time Data Services with {totalExperience} of experience in software development. Specialized expertise in disaster recovery, cloud infrastructure, and enterprise-scale system development. Proven track record in leading development teams, mentoring QA professionals, and delivering high-availability solutions. Technical proficiency in Next.js, NestJS, ReactQuery, MySQL, MongoDB, BullMQ, NetApp, Commvault, and OpenStack. Committed to innovative solutions and fostering team growth.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-black">
            <div>
              <span className="font-semibold">Frontend:</span> Next.js, React, React Query, Redux, Electron, HTML, CSS, JavaScript, TypeScript
            </div>
            <div>
              <span className="font-semibold">Backend:</span> NestJS, Node.js, Laravel, PHP, Python
            </div>
            <div>
              <span className="font-semibold">Databases:</span> MySQL, MongoDB, PostgreSQL
            </div>
            <div>
              <span className="font-semibold">Cloud & Infrastructure:</span> OpenStack, NetApp Snapmirror, Commvault, Docker, AWS Elastic Disaster Recovery
            </div>
            <div>
              <span className="font-semibold">Message Queues & Tools:</span> BullMQ, Kafka, Asterisk, WHMCS, Sentry
            </div>
            <div>
              <span className="font-semibold">Other:</span> Git, GitLab, Jenkins, CI/CD, VCS, API Development, Webhooks
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-black">PROFESSIONAL EXPERIENCE</h2>

          {/* Team Lead 2 */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-black">Team Lead 2 - Software Developer</h3>
                <p className="text-sm text-black">Real Time Data Services, Gurugram, Haryana, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap text-black">Oct 2025 - Present</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside text-black">
              <li>Lead and supervise development and QA teams, providing strategic guidance, mentorship, and technical leadership</li>
              <li>Collaborate with Scrum Master and Product Owners to define project objectives, scope, and deliverables</li>
              <li>Provide senior technical expertise in disaster recovery, firewall, and system scalability for enterprise applications</li>
              <li>Troubleshoot complex issues and resolve critical technical challenges in production environments</li>
              <li>Implement auto-scaling services and automated backup solutions for instance volumes</li>
              <li>Develop disaster recovery offerings using Commvault with best practices for deployment and NetApp Snapmirror integration</li>
              <li>Drive technical strategy and architectural decisions for high-availability, enterprise-scale systems</li>
              <li>Tech Stack: Next.js, NestJS, ReactQuery, Laravel, MySQL, MongoDB, BullMQ, NetApp, Commvault, Sentry, OpenStack</li>
            </ul>
          </div>

          {/* Assistant Team Lead */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-black">Assistant Team Lead - Software Development</h3>
                <p className="text-sm text-black">Real Time Data Services, Gurugram, Haryana, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap text-black">Nov 2022 - Oct 2025</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside text-black">
              <li>Led and supervised development and QA teams, providing guidance, mentorship, and technical support</li>
              <li>Collaborated with Scrum Master and Product Owners on project objectives and deliverables</li>
              <li>Provided technical expertise and guidance for complex issue resolution and technical challenges</li>
              <li>Implemented auto-scaling services and automated backup solutions for instance volumes</li>
              <li>Developed disaster recovery offerings using Commvault with deployment expertise</li>
              <li>Tech Stack: Next.js, NestJS, ReactQuery, Laravel, WHMCS, MySQL, MongoDB, Sentry, OpenStack</li>
            </ul>
          </div>

          {/* Software Engineer - Acefone */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-black">Software Engineer</h3>
                <p className="text-sm text-black">Real Time Data Services, Gurugram, Haryana, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap text-black">May 2021 - Nov 2022</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside text-black">
              <li>Implemented IVR and broadcast call solutions with inbound/outbound routing capabilities</li>
              <li>Developed webhook integrations and lead list management systems</li>
              <li>Developed customized dial plan flow (CDP) solutions for enterprise customers</li>
              <li>Resolved customer problems using API dialplan, dynamic dialplan, and webhook technologies</li>
            </ul>
          </div>

          {/* Software Engineer - Velocity */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-black">Software Engineer</h3>
                <p className="text-sm text-black">Velocity Software Solutions Private Limited, Noida, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap text-black">Jan 2019 - May 2021</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside text-black">
              <li>Developed key e-commerce modules including Supplier Delivery Management, Order Management, Shipment Processing, and Inventory Control for uksoccershop.com platform</li>
              <li>Led development of multiple e-commerce multi-sites and government survey projects (OOSC)</li>
              <li>Integrated product catalog and order management with Cratejoy platform (geekgearbox.com)</li>
              <li>Designed and implemented comprehensive Survey Web Application and RESTful API for OOSC</li>
              <li>Implemented advanced PDF generation solutions using WKHTMLTOPDF, TCPDF, and PHPExcel</li>
              <li>Integrated Amazon MWS API for bulk product uploads and Google Shopping feed management</li>
              <li>Implemented shipping integrations with DHL, Spring Global, Norsk Global, and Royal Mail</li>
              <li>Managed integrations with Amazon Seller Central, Fruugo, and Google Shopping marketplaces</li>
              <li>Tech Stack: ZenCart, CakePHP, jQuery, MySQL, Git, GitLab, SVN, Jenkins</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black">EDUCATION</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-black">Bachelor of Technology (B.Tech) - Computer Science and Engineering</h3>
              <p className="text-sm text-black">IMS Engineering College, Ghaziabad, India</p>
              <p className="text-sm text-black">Final Grade: 69%</p>
            </div>
            <div className="text-sm font-semibold whitespace-nowrap text-black">2015 - 2019</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black">CERTIFICATIONS</h2>
          <ul className="text-sm space-y-1 text-black">
            <li>• AWS Elastic Disaster Recovery - A Technical Introduction</li>
            <li>• Neural Networks and Deep Learning</li>
            <li>• Intro to Python for Data Science</li>
          </ul>
        </div>

        {/* Core Competencies */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black">CORE COMPETENCIES</h2>
          <p className="text-sm text-black">
            Disaster Recovery | System Scalability | Cloud Infrastructure | Team Leadership | Mentorship | Technical Architecture | Production Deployment | High-Availability Systems | Commvault Administration | NetApp Management | API Development | Database Design | E-commerce Solutions | Agile/Scrum | DevOps Practices | Code Review | Problem Solving
          </p>
        </div>

        {/* Top Skills */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-black">TOP SKILLS</h2>
          <p className="text-sm text-black">
            Disaster Recovery, ReactQuery, MySQL, Next.js, NestJS, MongoDB, Docker, Commvault, NetApp Snapmirror, BullMQ, Laravel, Asterisk, System Architecture, Team Leadership
          </p>
        </div>
      </div>
    </main>
  );
}

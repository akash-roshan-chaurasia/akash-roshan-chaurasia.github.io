"use client";

import { Button } from "@/components/ui/button";
import { Download as DownloadIcon } from "lucide-react";
import { toast } from "sonner";
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
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8 space-y-6">
        {/* Download Button */}
        <div className="flex justify-end print:hidden mb-6">
          <Button onClick={handleDownload} variant="outline">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Header */}
        <div className="text-center space-y-2 border-b pb-6">
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
            <a href="https://www.linkedin.com/in/akash-roshan/" className="text-blue-600 underline">
              linkedin.com/in/akash-roshan
            </a>
            <span>•</span>
            <a href="https://github.com/akashrc" className="text-blue-600 underline">
              github.com/akashrc
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm leading-relaxed">
            Team Lead 2 at Real Time Data Services with {totalExperience} of experience in software development. Specialized expertise in disaster recovery, cloud infrastructure, and enterprise-scale system development. Proven track record in leading development teams, mentoring QA professionals, and delivering high-availability solutions. Technical proficiency in Next.js, NestJS, ReactQuery, MySQL, MongoDB, BullMQ, NetApp, Commvault, and OpenStack. Committed to innovative solutions and fostering team growth.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
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
          <h2 className="text-lg font-bold">PROFESSIONAL EXPERIENCE</h2>

          {/* Team Lead 2 */}
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Team Lead 2 - Software Developer</h3>
                <p className="text-sm">Real Time Data Services, Gurugram, Haryana, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap">Oct 2025 - Present</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside">
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
                <h3 className="font-bold">Assistant Team Lead - Software Development</h3>
                <p className="text-sm">Real Time Data Services, Gurugram, Haryana, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap">Nov 2022 - Oct 2025</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside">
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
                <h3 className="font-bold">Software Engineer</h3>
                <p className="text-sm">Real Time Data Services, Gurugram, Haryana, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap">May 2021 - Nov 2022</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside">
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
                <h3 className="font-bold">Software Engineer</h3>
                <p className="text-sm">Velocity Software Solutions Private Limited, Noida, India</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap">Jan 2019 - May 2021</div>
            </div>
            <ul className="text-sm space-y-1 list-disc list-inside">
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
          <h2 className="text-lg font-bold">EDUCATION</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Bachelor of Technology (B.Tech) - Computer Science and Engineering</h3>
              <p className="text-sm">IMS Engineering College, Ghaziabad, India</p>
              <p className="text-sm">Final Grade: 69%</p>
            </div>
            <div className="text-sm font-semibold whitespace-nowrap">2015 - 2019</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold">CERTIFICATIONS</h2>
          <ul className="text-sm space-y-1">
            <li>• AWS Elastic Disaster Recovery - A Technical Introduction</li>
            <li>• Neural Networks and Deep Learning</li>
            <li>• Intro to Python for Data Science</li>
          </ul>
        </div>

        {/* Core Competencies */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold">CORE COMPETENCIES</h2>
          <p className="text-sm">
            Disaster Recovery | System Scalability | Cloud Infrastructure | Team Leadership | Mentorship | Technical Architecture | Production Deployment | High-Availability Systems | Commvault Administration | NetApp Management | API Development | Database Design | E-commerce Solutions | Agile/Scrum | DevOps Practices | Code Review | Problem Solving
          </p>
        </div>

        {/* Top Skills */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold">TOP SKILLS</h2>
          <p className="text-sm">
            Disaster Recovery, ReactQuery, MySQL, Next.js, NestJS, MongoDB, Docker, Commvault, NetApp Snapmirror, BullMQ, Laravel, Asterisk, System Architecture, Team Leadership
          </p>
        </div>
      </div>
    </main>
  );
}

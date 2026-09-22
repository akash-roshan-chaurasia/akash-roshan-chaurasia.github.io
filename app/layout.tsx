import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: 'Akash Roshan Chaurasia — Team Lead 2 | Cloud Platform & Backend Engineering',
  description: 'Team Lead 2 and hands-on engineering leader with ~7.5 years experience building cloud platform products and backend systems on top of OpenStack APIs, Node.js/NestJS microservices, Disaster Recovery (Commvault + NetApp), and cloud automation.',
  keywords: [
    'Akash Roshan Chaurasia',
    'Akash Chaurasia',
    'Team Lead 2',
    'Cloud Platform Product Engineering',
    'Cloud Platform Engineer',
    'Backend Engineering Lead',
    'Staff Backend Engineer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'OpenStack APIs',
    'Cloud Automation',
    'Disaster Recovery',
    'Commvault',
    'NetApp SnapMirror',
    'Heat Autoscaling',
    'Smart GPU Flavor Scheduling',
    'BullMQ',
    'Microservices',
    'Technical Leadership',
    'Engineering Manager',
    'Release Management',
    'Gurgaon Software Engineer',
    'OpenDev Gerrit Contributor'
  ],
  authors: [{ name: 'Akash Roshan Chaurasia', url: 'https://github.com/akash-roshan-chaurasia' }],
  creator: 'Akash Roshan Chaurasia',
  publisher: 'Akash Roshan Chaurasia',
  metadataBase: new URL('https://akash-roshan-chaurasia.github.io/'),
  alternates: {
    canonical: 'https://akash-roshan-chaurasia.github.io/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://akash-roshan-chaurasia.github.io/',
    title: 'Akash Roshan Chaurasia — Team Lead 2 | Cloud Platform & Backend Engineering',
    description: 'Team Lead 2 and hands-on engineering leader with ~7.5 years experience building cloud platform products and backend systems on top of OpenStack APIs, Node.js/NestJS microservices, Disaster Recovery (Commvault + NetApp), and cloud automation.',
    siteName: 'Akash Roshan Chaurasia Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Roshan Chaurasia — Team Lead 2 | Cloud Platform & Backend Engineering',
    description: 'Team Lead 2 and hands-on engineering leader with ~7.5 years experience building cloud platform products and backend systems on top of OpenStack APIs, Node.js/NestJS microservices, Disaster Recovery (Commvault + NetApp), and cloud automation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://akash-roshan-chaurasia.github.io/#person",
      "name": "Akash Roshan Chaurasia",
      "jobTitle": "Team Lead 2 — Software Development (Cloud Platform & Backend Engineering)",
      "worksFor": {
        "@type": "Organization",
        "name": "AceCloud | Real Time Data Services"
      },
      "email": "mailto:akashroshanchaurasia@gmail.com",
      "telephone": "+91-8802076664",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurgaon",
        "addressCountry": "India"
      },
      "url": "https://akash-roshan-chaurasia.github.io/",
      "sameAs": [
        "https://github.com/akash-roshan-chaurasia",
        "https://www.linkedin.com/in/akash-roshan/",
        "https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com",
        "https://www.npmjs.com/~akash_roshan"
      ],
      "knowsAbout": [
        "Cloud Platform Product Engineering",
        "OpenStack APIs (Nova, Cinder, Heat)",
        "Backend Architecture & Microservices",
        "Node.js",
        "NestJS",
        "TypeScript",
        "Next.js",
        "React",
        "Disaster Recovery Orchestration",
        "Commvault",
        "NetApp SnapMirror & ONTAP",
        "BullMQ",
        "Cloud Automation & Heat Stacks",
        "Smart GPU Flavor Scheduling",
        "MySQL",
        "MongoDB",
        "Docker",
        "Technical Leadership & Mentorship",
        "Engineering Hiring & Technical Interviewing",
        "Release Execution & Zero-Downtime Deployments",
        "Model Context Protocol & OpenAPI"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://akash-roshan-chaurasia.github.io/#website",
      "url": "https://akash-roshan-chaurasia.github.io/",
      "name": "Akash Roshan Chaurasia Portfolio",
      "publisher": {
        "@id": "https://akash-roshan-chaurasia.github.io/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://akash-roshan-chaurasia.github.io/#webpage",
      "url": "https://akash-roshan-chaurasia.github.io/",
      "name": "Akash Roshan Chaurasia — Team Lead 2 | Cloud Platform & Backend Engineering",
      "mainEntity": {
        "@id": "https://akash-roshan-chaurasia.github.io/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-cyan-500/20 selection:text-cyan-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
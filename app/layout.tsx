import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: 'Akash Roshan Chaurasia — Senior Software Engineer & Team Lead 2',
  description: 'Senior Software Engineer & Team Lead 2 with 7+ years of experience building high-availability cloud infrastructure, disaster recovery automation, Next.js, NestJS, and Open Source systems.',
  keywords: [
    'Akash Roshan Chaurasia',
    'Akash Chaurasia',
    'Akash Roshan',
    'Software Engineer',
    'Team Lead 2',
    'Next.js Developer',
    'NestJS Developer',
    'Disaster Recovery Automation',
    'Commvault NetApp',
    'OpenStack',
    'OpenDev Gerrit Contributor',
    'swagger-mcp',
    'Gurgaon Software Engineer'
  ],
  authors: [{ name: 'Akash Roshan Chaurasia', url: 'https://github.com/akashrc' }],
  creator: 'Akash Roshan Chaurasia',
  publisher: 'Akash Roshan Chaurasia',
  metadataBase: new URL('https://akashrc.github.io/Resume/'),
  alternates: {
    canonical: 'https://akashrc.github.io/Resume/',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://akashrc.github.io/Resume/',
    title: 'Akash Roshan Chaurasia — Senior Software Engineer & Team Lead 2',
    description: 'Senior Software Engineer & Team Lead 2 with 7+ years of experience building high-availability cloud infrastructure, disaster recovery automation, Next.js, NestJS, and Open Source systems.',
    siteName: 'Akash Roshan Chaurasia Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Roshan Chaurasia — Senior Software Engineer & Team Lead 2',
    description: 'Senior Software Engineer & Team Lead 2 with 7+ years of experience building high-availability cloud infrastructure, disaster recovery automation, Next.js, NestJS, and Open Source systems.',
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
      "@id": "https://akashrc.github.io/Resume/#person",
      "name": "Akash Roshan Chaurasia",
      "jobTitle": "Team Lead 2 - Software Development",
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
      "url": "https://akashrc.github.io/Resume/",
      "sameAs": [
        "https://github.com/akashrc",
        "https://www.linkedin.com/in/akash-roshan/",
        "https://review.opendev.org/q/owner:akashroshanchaurasia@gmail.com",
        "https://www.npmjs.com/~akash_roshan"
      ],
      "knowsAbout": [
        "Software Engineering",
        "Next.js",
        "NestJS",
        "React",
        "Node.js",
        "Cloud Architecture",
        "Disaster Recovery",
        "OpenStack",
        "Commvault",
        "NetApp Snapmirror",
        "BullMQ",
        "MySQL",
        "MongoDB",
        "Laravel",
        "Docker",
        "Model Context Protocol"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://akashrc.github.io/Resume/#website",
      "url": "https://akashrc.github.io/Resume/",
      "name": "Akash Roshan Chaurasia Portfolio",
      "publisher": {
        "@id": "https://akashrc.github.io/Resume/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://akashrc.github.io/Resume/#webpage",
      "url": "https://akashrc.github.io/Resume/",
      "name": "Akash Roshan Chaurasia — Senior Software Engineer & Team Lead 2",
      "mainEntity": {
        "@id": "https://akashrc.github.io/Resume/#person"
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
import type { Metadata } from 'next';

import PlausibleAnalytics from 'next-plausible';

import './globals.css';

import { getFontConfig } from '@/fonts/fonts.config';
const { accent, sans } = getFontConfig();

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Providers } from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${accent.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <PlausibleAnalytics domain="admondtamang.com.np" />
        {/* <meta name="og:image" /> is generated. */}
        <meta property="og:image:alt" content="Admond Tamang" />
        {/* <meta name="twitter:image" /> is generated. */}
        <meta property="og:image:alt" content="Admond Tamang" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="admondtamang – Blog"
          href="/rss.xml"
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen" data-page-root>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

/**
 * Exports
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://admondtamang.com.np'),
  authors: { name: 'Admond Tamang' },
  creator: 'Admond Tamang',
  publisher: 'Admond Tamang',
  title: {
    template: '%s | Admond Tamang',
    default: 'Admond Tamang – Product Engineer',
  },
  description:
    'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
  keywords: [
    'Web Development',
    'Freelancer',
    'Product Engineer',
    'Product Development',
    'Product Management',
    'MVP',
    'Startups',
  ],
  viewport: { width: 'device-width', initialScale: 1 },
  alternates: {
    canonical: 'https://admondtamang.com.np',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    site: '@admondtamang',
    creator: '@admondtamang',
    title: 'Admond Tamang – Product Engineer',
    description:
      'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Admond',
    lastName: 'Tamang',
    username: 'admondtamang',
    gender: 'he/him',
    emails: ['admondtamang@gmail.com'],
    url: 'https://admondtamang.com.np',
    siteName: 'Admond Tamang',
    title: 'Admond Tamang – Product Engineer',
    description:
      'Turn your product’s pain into production-ready features that unlock opportunities. For startups and scale-ups.',
    countryName: 'Nepal',
    locale: 'en_US',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Admond Tamang',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default RootLayout;

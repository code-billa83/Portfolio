import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500', '700', '800'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Shiva Mishra | Full Stack Developer | MERN & Next.js | Lucknow, India',
  description: 'Shiva Mishra - Professional Full Stack Developer from Lucknow, India. Expert in MERN Stack, Next.js, Three.js & Particle Animations. Building modern, viral & high-performance websites. Available for freelance & full-time.',
  keywords: ['Shiva Mishra', 'Full Stack Developer Lucknow', 'MERN Stack Developer India', 'Next.js Developer', 'Full Stack Developer Portfolio', 'Freelance Developer Lucknow', 'JavaScript Developer India', 'Shiva Mishra Portfolio'],
  authors: [{ name: 'Shiva Mishra', url: 'https://portfolio-pearl-two-10.vercel.app' }],
  creator: 'Shiva Mishra',
  publisher: 'Shiva Mishra',
  metadataBase: new URL('https://portfolio-pearl-two-10.vercel.app'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "fGE-jCKrQsXe-Aj-HKiN_HYCijM0ML98RkfeIYKG8Mo",
  },
  icons: {
    icon: '/shiva.jpeg',
  },
  openGraph: {
    title: 'Shiva Mishra | Full Stack Developer | MERN & Next.js',
    description: 'Professional Full Stack Developer from Lucknow. MERN, Next.js, Three.js expert. Check my projects - Neon Particle Trail, Modern Web Apps.',
    url: 'https://portfolio-pearl-two-10.vercel.app',
    siteName: 'Shiva Mishra Portfolio',
    images: [
      {
        url: '/shiva.jpeg',
        width: 800,
        height: 800,
        alt: 'Shiva Mishra - Full Stack Developer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiva Mishra | Full Stack Developer',
    description: 'Full Stack Developer (MERN & Next.js) from Lucknow, India. Building viral web experiences.',
    images: ['/shiva.jpeg'],
    creator: '@shiva_mishra',
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

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shiva Mishra",
    "jobTitle": "Full Stack Developer",
    "description": "Professional Full Stack Developer specializing in MERN Stack and Next.js",
    "url": "https://portfolio-pearl-two-10.vercel.app",
    "image": "https://portfolio-pearl-two-10.vercel.app/shiva.jpeg",
    "sameAs": [
      "https://github.com/shiva",
      "https://linkedin.com/in/shiva-mishra",
      "https://instagram.com/shiva_mishra"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "knowsAbout": ["JavaScript", "React", "Next.js", "Node.js", "MERN Stack", "Full Stack Development", "Three.js"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={jetbrainsMono.className}>
        {children}
      </body>
    </html>
  );
}
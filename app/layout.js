import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500', '700', '800'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Shiva Mishra | Portfolio',
  description: 'Professional Full Stack Developer Portfolio',
  icons: {
    icon: '/shiva.jpeg', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import ClientLayout from './components/client-layout';
import './globals.css';

export const metadata: Metadata = {
  title: '404 Gallery',
  description: 'A curated collection of beautiful and interesting 404 pages.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
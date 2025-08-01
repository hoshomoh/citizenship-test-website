import type { Metadata } from 'next';
import { Roboto, Unbounded } from 'next/font/google';
import './globals.css';

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Citizenship Test App',
  description:
    'Taking the next step toward citizenship? Whether you’re preparing for the German Einbürgerungstest or future tests in other countries, our app is designed to help you succeed with confidence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}

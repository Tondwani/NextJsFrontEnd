'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

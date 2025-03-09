import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-r from-purple-600 to-indigo-600">
        {children}
      </main>
      <Footer />
    </div>
  );
}

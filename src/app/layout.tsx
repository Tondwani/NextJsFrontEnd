import StoreProvider from './StoreProvider';
import './styles/globals.css';
import './styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

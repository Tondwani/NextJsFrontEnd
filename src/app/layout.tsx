'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './styles/globals.css';
import './styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-purple-indigo">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}

'use client';
import { NextUIProvider } from '@nextui-org/react';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        {' '}
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}

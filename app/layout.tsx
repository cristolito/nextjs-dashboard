import '@/app/ui/global.css';
import { cardo } from '@/app/ui/font/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cardo.className} antialiased`}>{children}</body>
    </html>
  );
}

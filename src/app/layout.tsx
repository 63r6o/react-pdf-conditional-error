import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col h-screen`}>
        <nav className="p-12 w-screen flex gap-20 justify-center">
          <Link href="./errorpdf">PDF with error</Link>
          <Link href="./workingpdf">PDF without error</Link>
        </nav>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}

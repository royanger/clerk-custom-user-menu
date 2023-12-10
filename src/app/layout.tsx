import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <header className="bg-gray-800/70 p-4">
            <div className="container flex flex-row items-center">
              <Image src="/light-logo.png" alt="Clerk Logo" height={64} width={64} />
              <h1 className="text-1xl md:text-2xl font-bold">Custom User Button and Menu</h1>

            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

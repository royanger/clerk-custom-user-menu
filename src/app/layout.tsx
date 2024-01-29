import { ClerkProvider, SignInButton, SignedOut } from "@clerk/nextjs";
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
              <Image
                src="/light-logo.png"
                alt="Clerk Logo"
                height={64}
                width={64}
              />
              <h1 className="text-1xl font-bold md:text-2xl grow">
                Custom User Button and Menu
              </h1>
              <SignedOut>
                <SignInButton>
                  <button className="text-2xl">Sign In</button>
                </SignInButton>
              </SignedOut>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

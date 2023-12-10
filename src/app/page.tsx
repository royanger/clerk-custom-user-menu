import { UserButton } from "@/components/user-button";
import { UserButton as ClerkUserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center">
      <UserButton />
    </div>
  );
}

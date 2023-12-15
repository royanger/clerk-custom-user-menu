"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// Import useUser() and useClerk()
import { useUser, useClerk } from "@clerk/nextjs";
// Import Next's router
import { useRouter } from "next/navigation";
// Import the Image element
import Image from "next/image";
// Import Link to add more buttons to the menu
import Link from "next/link";

export const UserButton = () => {
  // Grab the `isLoaded` and `user` from useUser()
  const { isLoaded, user } = useUser();
  // Grab the signOut and openUserProfile methods
  const { signOut, openUserProfile } = useClerk();
  // Get access to Next's router
  const router = useRouter();

  // Make sure that the useUser() hook has loaded
  if (!isLoaded) return null;
  // Make sure there is valid user data
  if (!user?.id) return null;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {/* Render a button using the image and email from `user` */}
        <button className="flex flex-row rounded-xl border border-gray-200 bg-white px-4 py-3 text-black drop-shadow-md">
          <Image
            alt={user?.primaryEmailAddress?.emailAddress!}
            src={user?.imageUrl}
            width={30}
            height={30}
            className="mr-2 rounded-full border border-gray-200 drop-shadow-sm"
          />
          {user?.username
            ? user.username
            : user?.primaryEmailAddress?.emailAddress!}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-4 w-52 rounded-xl border border-gray-200 bg-white px-6 py-4 text-black drop-shadow-2xl">
          <DropdownMenu.Label />
          <DropdownMenu.Group className="py-3">
            <DropdownMenu.Item>
              {/* Create a button with an onClick to open the User Profile modal */}
              <button onClick={() => openUserProfile()} className="pb-3">
                Profile
              </button>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              {/* Create a fictional link to /subscriptions */}
              <Link href="/subscriptions" passHref className="py-3">
                Subscription
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="my-1 h-px bg-gray-500" />
          <DropdownMenu.Item>
            {/* Create a Sign Out button -- signOut() takes a call back where the user is redirected */}
            <button
              onClick={() => signOut(() => router.push("/"))}
              className="py-3"
            >
              Sign Out{" "}
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

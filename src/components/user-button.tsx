"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowPathIcon,
  ArrowRightCircleIcon,
  ArrowRightEndOnRectangleIcon,
  CurrencyDollarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { VariantProps, cva } from "class-variance-authority";

const button = cva(["flex", "flex-row", "items-center", "rounded-xl"], {
  variants: {
    variant: {
      primary: [
        "border",
        "border-gray-200",
        "bg-white",
        "text-black",
        "drop-shadow-md",
        "hover:bg-stone-100",
        "hover:text-stone-800",
        "justify-center",
      ],
      accent: [
        "border",
        "border-stone-950",
        "bg-stone-800/70",
        "hover:bg-stone-950",
        "text-stone-200",
        "justify-center",
      ],
      menu: [
        "w-full",
        "justify-start",
        "bg-transparent",
        "hover:bg-stone-800/70",
        "text-gray-800/70",
        "hover:text-stone-100",
        "px-4",
        "rounded-sm",
      ],
    },
    size: {
      regular: ["px-4", "py-3 "],
      small: ["py-3", "py-2"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "regular",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  },
);

// Create a new UserButtonandMenu component and move the old return into this
const UserButtonAndMenu = () => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const router = useRouter();
  const label = user?.firstName ? user.firstName : "Profile";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className="outline-none">
        <Button variant="accent" className="min-w-[192px]">
          {user?.hasImage ? (
            <Image
              alt={label ? label : "Profile image"}
              src={user?.imageUrl}
              width={30}
              height={30}
              className="mr-2 rounded-full border border-stone-950 drop-shadow-sm"
            />
          ) : (
            <UserIcon className="mr-2 h-6 w-auto" />
          )}
          {label}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-4 w-52 rounded-xl border border-gray-200 bg-white px-2 py-2 text-black drop-shadow-2xl">
          <DropdownMenu.Label />
          <DropdownMenu.Group className="py-1">
            <DropdownMenu.Item className="outline-none" asChild>
              <Button
                onClick={() => openUserProfile()}
                className="pb-3"
                variant="menu"
                size="small"
              >
                <UserIcon className="mr-2 h-6 w-auto" />
                Profile
              </Button>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild className="outline-none">
              <Link href="/subscriptions" passHref>
                <Button className="py-2" variant="menu" size="small">
                  <CurrencyDollarIcon className="mr-2 h-6 w-auto" />
                  Subscription
                </Button>
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
          <DropdownMenu.Item asChild className="outline-none">
            <Button
              onClick={() => signOut(() => router.push("/"))}
              className="py-3"
              variant="menu"
              size="small"
            >
              <ArrowRightEndOnRectangleIcon className="mr-2 h-5 w-auto" /> Sign Out
            </Button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const UserButton = () => {
  const { isLoaded, user } = useUser();
  const { openSignIn } = useClerk();

  if (!isLoaded)
    return (
      <Button onClick={() => openSignIn()} className="w-48">
        <ArrowPathIcon className="ml-2 h-6 w-auto animate-spin" />
      </Button>
    );

  if (!user?.id)
    return (
      <Button onClick={() => openSignIn()} className="w-48">
        Sign In
        <ArrowRightCircleIcon className="ml-2 h-6 w-auto" />
      </Button>
    );

  return <UserButtonAndMenu />;
};

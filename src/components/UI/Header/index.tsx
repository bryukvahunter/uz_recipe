"use client";

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignInModal from "../modals/SignInModal";
import SignUpForm from "../forms/SignUpForm";
import { useState } from "react";
import SignUpModal from "../modals/SignUpModal";
import { signOutFn } from "@/auth/actions/signOut";

export const AcmeLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/logo.jpg"
        alt={siteConfig.title}
        width={52}
        height={52}
        priority
        className="rounded-medium "
      />
    </Link>
  );
};

export default function Header() {
  const pathName = usePathname();

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  async function handleSignOut() {
    await signOutFn();
  }

  return (
    <Navbar style={{ height: `${layoutConfig.headerHeight}` }}>
      <NavbarBrand className="flex gap-3">
        <AcmeLogo />
        <p className="font-bold text-inherit">{siteConfig.title}</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.headerLinks.map((link) => {
          const isActive = pathName === link.route;
          return (
            <NavbarItem key={link.id} isActive={isActive}>
              <Link
                color="foreground"
                href={link.route}
                className={`px-3 py-1 ${
                  isActive ? "text-blue-500" : "text-foreground"
                } hover:text-blue-300 hover:border hover:border-blue-300 hover:rounded-md transition-colors transition-border duration-200`}
              >
                {link.value}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={handleSignOut}
          >
            Выйти
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setIsSignInOpen(true)}
          >
            Войти
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setIsSignUpOpen(true)}
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </Navbar>
  );
}

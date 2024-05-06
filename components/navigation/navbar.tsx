import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { useDisclosure, useMobileDesktop } from "../hooks";
import { nexethLogoTransparent } from "../images";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

import { navigationConfig } from "./navigation-config";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
  NavigationChildItem,
} from "@/components/ui/navigation-menu";

const DesktopNavbar = () => (
  <NavigationMenu>
    <NavigationMenuList>
      {navigationConfig.map((item) => (
        <NavigationMenuItem key={item.href}>
          {item.children && item.children.length > 0 ? (
            <>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href}>
                      <NavigationChildItem title={child.label}>
                        {child.description}
                      </NavigationChildItem>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </>
          ) : (
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

const MobileNavbar = () => {
  const { isOpen, setIsOpen } = useDisclosure();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="flex flex-row gap-4 items-center">
          <div className="relative">
            <Image
              src={nexethLogoTransparent}
              alt="Nexeth Logo"
              width={40}
              height={40}
            />
            <Badge
              variant="secondary"
              className="text-[8px] opacity-80 px-1 h-4 absolute top-0 left-5"
            >
              Beta
            </Badge>
          </div>
          Nexeth
        </SheetTitle>
        <div className="flex flex-col items-start pt-2">
          {navigationConfig.map((item) =>
            item.children && item.children.length > 0 ? (
              <>
                <Button key={item.href} variant="ghost">
                  {item.label}
                </Button>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    legacyBehavior
                    passHref
                  >
                    <Button variant="ghost" className="ml-4">
                      {child.label}
                    </Button>
                  </Link>
                ))}
              </>
            ) : (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost">{item.label}</Button>
              </Link>
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const Navbar = () =>
  useMobileDesktop(<MobileNavbar />, <DesktopNavbar />);

"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";
import { getDictionary } from "@/app/i18n/get-dictionary";
import { Locale } from "@/app/i18n/settings";
import Theme from "../Theme";
import { cn } from "@/lib/utils";

interface NavProps {
  /** 语言 */
  lang: Locale;
}

export default function Nav({ lang }: NavProps) {
  const t = getDictionary(lang);

  const intoView = (id: string) => {
    document
      .querySelector(`#${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="flex flex-row items-center justify-between rounded-[4px] px-8 h-16 sticky top-0 z-10 backdrop-blur">
      <div className="flex flex-row items-center gap-16">
        <div className="flex flex-row items-center gap-2">
          <Image src="/images/logo.png" width={50} height={33} alt="Image" />
          <Link href="/" className="text-2xl font-bold">
            PP2MALL
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="cursor-pointer px-2 text-sm">
                {t.home}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={() => intoView("service")}>
              <span className="cursor-pointer px-2 text-sm">
                {t.our_service}
              </span>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={() => intoView("introduction")}>
              <span className="cursor-pointer px-2 text-sm">
                {t.team_introduction}
              </span>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={() => intoView("aboutUs")}>
              <span className="cursor-pointer px-2 text-sm">{t.about_us}</span>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={() => intoView("contact")}>
              <span className="cursor-pointer px-2 text-sm">
                {t.contact_us}
              </span>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Theme lang={lang} />
        <LanguageSwitcher lang={lang} />
        <Button variant="ghost">{t.login}</Button>
      </div>
    </nav>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

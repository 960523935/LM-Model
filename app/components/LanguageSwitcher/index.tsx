"use client";

import { useRouter, usePathname } from "next/navigation";
import Cookie from "js-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = async (newLang: string) => {
    Cookie.set("locale", newLang, {}); // 选中语言设置到cookie中,持久化
    // 替换URL中的语言部分
    if (currentPathname === "/") {
      router.replace(`/${newLang}`);
      return;
    }
    const newPath = currentPathname.replace(`/${lang}`, `/${newLang}`);
    router.replace(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleChange("zh")}>
            <span>中文</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleChange("en")}>
            <span>English</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

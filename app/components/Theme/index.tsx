"use client";

import { Locale } from "@/app/i18n/settings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/app/i18n/get-dictionary";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { Half2Icon } from "@radix-ui/react-icons";
import { Moon, Sun } from "lucide-react";
import { THEME } from "@/app/enum";
interface NavProps {
  /** 语言 */
  lang: Locale;
}

export default function Nav({ lang }: NavProps) {
  const t = getDictionary(lang);
  const [theme, setTheme] = useState<THEME>();
  const changeTheme = (tm: THEME) => {
    Cookie.set("theme", tm, {}); // 选中语言设置到cookie中,持久化
    document.body.classList.remove(THEME.DARK, THEME.LIGHT);
    if (tm !== THEME.DEFAULT) {
      document.body.classList.add(tm);
    } else {
      const defaultTheme = getSystemTheme();
      document.body.classList.add(defaultTheme);
    }
    setTheme(tm);
  };

  const getSystemTheme = () => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? THEME.DARK
      : THEME.LIGHT;
    return defaultTheme;
  };

  const systemChangeTheme = (event: MediaQueryListEvent) => {
    if (event.matches) {
      // 切换到深色主题
      changeTheme(THEME.DARK);
    } else {
      // 切换到浅色主题
      changeTheme(THEME.LIGHT);
    }
  };

  useEffect(() => {
    // 获取设置的系统主题
    const tm = (Cookie.get("theme") as THEME) ?? getSystemTheme();
    changeTheme(tm);
  }, []);

  useEffect(() => {
    // 如果主题跟随系统，则添加主题变化监听
    if (theme === THEME.DEFAULT) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", systemChangeTheme);
    }
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", systemChangeTheme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {theme === THEME.DEFAULT && <Half2Icon />}
          {theme === THEME.LIGHT && <Sun />}
          {theme === THEME.DARK && <Moon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => changeTheme(THEME.DEFAULT)}>
            <Half2Icon />
            <span>{t.theme_default}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTheme(THEME.LIGHT)}>
            <Sun />
            <span>{t.theme_light}</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTheme(THEME.DARK)}>
            <Moon />
            <span>{t.theme_dark}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";
import Link from "next/link";
import { NavigationMenu } from "../ui/navigation-menu";
import { LogoBlackSvg } from "../ui/svgs";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const LinkText = () => {
  return (
    <span className="flex items-center text-[21px] gap-[6px] font-medium">
      <LogoBlackSvg />
      Discovery
    </span>
  );
};

interface NavigationBarProps {
  className?: string;
  preview: boolean;
}

const NavigationBar = (props: NavigationBarProps) => {
  const { className, preview } = props;
  return (
    <NavigationMenu
      className={cn(
        className,
        "sticky top-0 px-4 h-11 w-full min-w-full justify-start",
      )}
    >
      <Link href="/">
        <LinkText />
      </Link>
      <div className="grow shrink-0" />
      {preview && (
        <Button className="min-w-[5.625rem] h-8 rounded-4xl shadow-[0_12px_24px_rgba(0_0_0_/_17%)] bg-(--theme-color-appTint)">
          Publish
        </Button>
      )}
    </NavigationMenu>
  );
};

export default NavigationBar;

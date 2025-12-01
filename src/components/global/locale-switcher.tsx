"use client";
import React, { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const LocaleSwitchSelector = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      router.replace(
        {
          pathname,
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          params,
          query: Object.fromEntries(newSearchParams.entries()),
        },
        { locale: nextLocale },
      );
    });
  };

  return (
    <Select
      onValueChange={handleLocaleChange}
      disabled={isPending}
      value={locale}
    >
      <SelectTrigger
        className="w-fit  border-none data-[placeholder]:text-white focus-visible:border-0 focus-visible:ring-0"
        showIcon={false}
      >
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((cur) => (
          <SelectItem
            key={cur}
            value={cur}
          >
            {t(cur)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitchSelector;

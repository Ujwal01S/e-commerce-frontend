"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Link, usePathname } from "@/i18n/routing";
import { generateUrlArray } from "@/utills/bread-crumb-url";
import { SlashIcon } from "lucide-react";
import React from "react";

export function BreadcrumbWithCustomSeparator() {
  const pathname = decodeURIComponent(usePathname()) || "";
  // use for link navigation
  const linkArray = pathname.split("/").slice(1);

  // get trasnformed url array for bread crumb
  const urlPathnameArray = generateUrlArray({ url: pathname });

  return (
    <Breadcrumb className="px-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <SlashIcon size={14} />
        {urlPathnameArray.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/${linkArray[index]}`}
                  className={`capitalize ${index === urlPathnameArray.length - 1 ? "text-black" : undefined}`}
                >
                  {path}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== urlPathnameArray.length - 1 && <SlashIcon size={14} />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

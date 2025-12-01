"use client";

import { Link, usePathname } from "@/i18n/routing";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const normalizePath = (path: string) => {
    return path.replace(/-/g, "");
  };

  const normalizedHref = normalizePath(href);
  const normalizedPathname = normalizePath(pathname);

  const isActive =
    href === "/"
      ? pathname === "/"
      : normalizedPathname.startsWith(normalizedHref);

  return (
    <Link
      href={href}
      className={`hover:underline underline-offset-4 ${
        isActive
          ? " underline underline-offset-4 decoration-text-secondary"
          : ""
      }`.trim()}
    >
      {children}
    </Link>
  );
}

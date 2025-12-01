import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/routing";
import { SlashIcon } from "lucide-react";

export function ProductBreadcrumb({
  id,
  category,
}: {
  id: string;
  category: string;
}) {
  return (
    <Breadcrumb className="px-2 cursor-pointer">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <SlashIcon size={14} />

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="#">{decodeURIComponent(category)}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <SlashIcon size={14} />

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              className="text-black"
              href={id}
            >
              {id}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

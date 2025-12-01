import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../ui/breadcrumb";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container w-full mx-auto flex flex-col gap-10 min-h-[calc(100dvh-40dvh)]">
      <div></div>
      <div className="md-lg:pt-10">
        <Breadcrumb className="px-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <SlashIcon size={14} />

            <BreadcrumbItem>
              <BreadcrumbLink className="text-black">Error 404</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-10 items-center text-center">
        <p className="text-2xl md-lg:text-9xl font-bold">404 Not Found</p>

        <p>Your visited page not found. You may go home page</p>

        <Link
          className="bg-button-background w-fit rounded-sm px-4 md-lg:px-10 py-4 mb-4 font-normal text-white text-sm md:text-base"
          href={"/"}
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

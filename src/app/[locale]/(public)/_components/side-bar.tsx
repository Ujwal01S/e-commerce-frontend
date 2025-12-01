import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { sidebarNavigationItems } from "@/constants/sidebar";
import { Link } from "@/i18n/routing";
import { ChevronsUpDown } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="space-y-3 border-0 md:border-r pr-3 min-w-[200px] lg:min-w-[217px] pt-8">
      {sidebarNavigationItems.map((item) => (
        <div key={item.title}>
          {item.subTitle ? (
            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="text-base hover:no-underline font-normal py-0 [&[data-state=closed]>svg]:rotate-270
                [&[data-state=open]>svg]:rotate-360 gap-0"
                >
                  {item.title}
                </AccordionTrigger>

                <AccordionContent className="space-y-3 grid">
                  <div></div>
                  {item.subTitle.map((sub) => (
                    <Link
                      href={"#"}
                      key={sub}
                      className="pl-4"
                    >
                      {sub}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <Link href={"#"}>{item.title}</Link>
          )}
        </div>
      ))}
    </div>
  );
};

const LandingPageSideBar = () => {
  return (
    <>
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      <div className="md:hidden w-full">
        <Collapsible>
          <CollapsibleTrigger className="bg-button-background w-full justify-between flex md:w-fit md:gap-2 items-center px-12 py-3 rounded-sm text-white font-semibold">
            View All Category
            <ChevronsUpDown />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Sidebar />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
};

export default LandingPageSideBar;

"use client";

import { useMemo } from "react";
import { useSearchStore } from "@/store/search-item/search.store";
import { useDebounce } from "@/hooks/use-debounce";
import ProductCard from "@/components/common/product-card";
import { useTranslations } from "next-intl";
import { allProductItems } from "../../_mock/carousel";
import SectionHeader from "@/components/common/section-header";

const SeachSection = () => {
  const t = useTranslations("homePage");
  const { searchValue } = useSearchStore();

  // debounce the global search value
  const debouncedSearch = useDebounce<string>(searchValue, 300);

  const results = useMemo(() => {
    const q = String(debouncedSearch ?? "")
      .trim()
      .toLowerCase();

    if (!q) {
      return null;
    }

    return allProductItems.filter((p) => {
      const title = String(p.title ?? "").toLowerCase();
      const category = String(p.category ?? "").toLowerCase();

      return title.includes(q) || category.includes(q);
    });
  }, [debouncedSearch]);

  // nothing to show when there's no query
  if (results === null) return null;

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-4 pb-5 md:pb-12 w-full">
        <div className="grid gap-5">
          <SectionHeader header={t("Search Results")} />

          {results.length === 0 ? (
            <div className="py-8 text-center text-gray-500">No Item Found</div>
          ) : (
            <div className="w-full overflow-hidden pl-5 pr-7">
              <div className="gap-10 flex overflow-x-auto py-2 px-1 -mx-1 ">
                {results.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[220px] max-w-[220px] shrink-0"
                  >
                    <ProductCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeachSection;

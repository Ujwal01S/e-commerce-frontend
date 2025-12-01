import SectionHeader from "@/components/common/section-header";
import { IProductProps } from "@/constants/product.constant";
import { Metadata } from "next";
import { Suspense } from "react";
import ProductDetailSection from "./_components/detail-section";
import { ProductBreadcrumb } from "./_components/product-bread-crumb";
import { allProductItems } from "../../../_mock/carousel";
import BestSelling from "../../../_components/best-selling";

interface Props {
  params: Promise<{ locale: string; category: string; productId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;

  const productData =
    productId && allProductItems.find((item) => item.id === productId);

  if (!productData) {
    return {
      title: "Product Not Found - Exclusion",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${productData.title} - Exclusion`,
    description: productData.description,
    keywords: [
      productData.title.toLowerCase(),
      productData.category.toLowerCase(),
      ...productData.title.split(" ").map((word) => word.toLowerCase()),
      "gaming",
      "electronics",
      "furniture",
      "shopping",
      "discount",
    ],

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
      },
    },
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const { productId, category } = await params;

  const productData =
    productId && allProductItems.find((item) => item.id === productId);

  let relatedItems;
  if (productData) {
    relatedItems = allProductItems.filter(
      (cat) =>
        cat.category === productData.category && cat.id !== productData.id,
    );
  }

  return (
    <div className="py-6 md:py-20 px-4 md:px-0 grid gap-10">
      <ProductBreadcrumb
        id={productId}
        category={category}
      />
      {productData ? (
        <Suspense fallback={<p>Data is Loading...</p>}>
          <section>
            <ProductDetailSection data={productData as IProductProps} />
          </section>
        </Suspense>
      ) : (
        <h3 className="text-2xl font-bold text-center">
          No product of with this ID
        </h3>
      )}

      <section className="grid gap-14">
        <SectionHeader header="Related Item" />

        {relatedItems && relatedItems.length > 0 ? (
          <BestSelling data={relatedItems} />
        ) : (
          <p className="text-lg font-semibold">No Related Item available</p>
        )}
      </section>
    </div>
  );
};

export default ProductDetailPage;

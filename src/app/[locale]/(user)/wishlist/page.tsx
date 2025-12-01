import { bestSellingProduct } from "../../(public)/_mock/carousel";
import RecommendationSection from "./_components/recommendation";
import WishListSection from "./_components/wish-section";

const WishListPage = async () => {
  const recommendationSectionData = bestSellingProduct;
  return (
    <div className="container w-full mx-auto grid gap-10 py-4 sm-md:py-10">
      {/* contents */}

      <div className="grid gap-20 px-4 sm-md:px-2">
        {/* wishlist section */}
        <WishListSection />

        {/* Recommendation section */}
        <RecommendationSection data={recommendationSectionData} />
      </div>
    </div>
  );
};

export default WishListPage;

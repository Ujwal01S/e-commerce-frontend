import ProductCard from "@/components/common/product-card";
import { IProductProps } from "@/constants/product.constant";

const BestSelling = ({ data }: { data: IProductProps[] }) => {
  return (
    <div className="grid xs:grid-cols-2 px-4 sm-md:px-0 sm:grid-cols-3 gap-3 sm:gap-3 lg:grid-cols-4 md-lg:gap-[30px] auto-rows-fr">
      {data.map((item) => (
        <ProductCard
          id={item.id}
          imageUrl={item.imageUrl}
          noOfRating={item.noOfRating}
          price={item.price}
          rating={item.rating}
          title={item.title}
          discountPercent={item.discountPercent}
          discountedPrice={item.discountedPrice}
          key={item.id}
          category={item.category}
          description={item.description}
          stock={item.stock}
        />
      ))}
    </div>
  );
};

export default BestSelling;

import { BreadcrumbWithCustomSeparator } from "@/components/common/bread-crumb";
import CartTable from "./_components/cart-table";
import CartCoupon from "@/components/common/cart-coupon";
import CartTotalCard from "./_components/cart-total";

const CartPage = () => {
  return (
    <div className="grid container gap-5 md:gap-10 my-5 sm-md:my-14 px-2">
      <div className="sm-md:mb-4">
        <BreadcrumbWithCustomSeparator />
      </div>

      <CartTable />

      <div className="grid grid-cols-1 md:grid-cols-2 sm-md:gap-4 lg:gap-24 px-2 w-full">
        <CartCoupon />

        <CartTotalCard />
      </div>
    </div>
  );
};

export default CartPage;

import { BreadcrumbWithCustomSeparator } from "@/components/common/bread-crumb";
import CheckoutForm from "@/components/form/checkout";

const CheckoutPage = () => {
  return (
    <div className="py-4 sm-md:py-8 container">
      <div className="my-4">
        <BreadcrumbWithCustomSeparator />
      </div>

      <h3 className="text-3xl font-medium py-4 sm-md:py-8 px-8 sm-md:px-0">
        Billing Details
      </h3>

      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;

import { productSizes } from "@/constants/product.constant";

interface Props {
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const SizeSelector = ({ selectedSize, setSelectedSize }: Props) => {
  const sizeHandler = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <div className="flex gap-4 items-center">
      <p>Size:</p>
      {productSizes.map((size) => (
        <div
          key={size}
          className={`w-8 h-8 rounded-sm border flex items-center justify-center cursor-pointer uppercase ${selectedSize === size ? "bg-button-background text-white border-button-background" : undefined} `}
          onClick={() => sizeHandler(size)}
        >
          <p className="text-sm font-medium">{size}</p>
        </div>
      ))}
    </div>
  );
};

export default SizeSelector;
